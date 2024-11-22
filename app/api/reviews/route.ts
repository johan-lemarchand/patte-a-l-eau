import { GoogleReviewsConfig, PlaceDetails } from '@johan27000/next-google-reviews';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';


// Types pour les avis Google
interface GoogleReview {
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url?: string;
}

interface FormattedReview {
    author_name: string;
    rating: number;
    text: string;
    date: string;
    image: string;
}

interface GooglePlacesResponse {
    result?: {
        reviews: GoogleReview[];
        user_ratings_total: number;
        rating: number;
    };
    status: string;
    error_message?: string;
}

// Fonction pour formater la date des avis
function formatDate(timestamp: number): string {
    return new Date(timestamp * 1000).toISOString().split('T')[0];
}

// Fonction pour formater les avis
function formatReviews(reviews: GoogleReview[]): FormattedReview[] {
    return reviews.map(review => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        date: formatDate(review.time),
        image: review.profile_photo_url || ''
    }));
}

async function fetchAndSaveReviews(config: GoogleReviewsConfig): Promise<PlaceDetails> {
    try {
        if (config.limit && (config.limit < 1 || config.limit > 5)) {
            throw new Error('Limit must be between 1 and 5');
        }

        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?` +
            `place_id=${config.placeId}` +
            `&fields=reviews,user_ratings_total,rating` +
            `&key=${config.apiKey}` +
            `&language=${config.language || 'fr'}`
        );

        const data = await response.json() as GooglePlacesResponse;

        if (!data.result) {
            throw new Error(data.error_message || 'No result found');
        }

        const reviews = data.result.reviews || [];
        const limitedReviews = config.limit ? reviews.slice(0, config.limit) : reviews;

        const formattedData: PlaceDetails = {
            totalReviews: data.result.user_ratings_total || 0,
            rating: data.result.rating || 0,
            reviews: formatReviews(limitedReviews),
            lastUpdate: new Date().toISOString().split('T')[0]
        };

        // Stockage en JSON dans le dossier public
        const dataDir = join(process.cwd(), 'public', 'data');
        if (!existsSync(dataDir)) {
            await mkdir(dataDir, { recursive: true });
        }

        await writeFile(
            join(dataDir, 'reviews.json'),
            JSON.stringify(formattedData, null, 2)
        );

        return formattedData;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Failed to fetch Google reviews: ${errorMessage}`);
    }
}

export async function GET() {
    try {
        const data = await fetchAndSaveReviews({
            placeId: process.env.GOOGLE_PLACE_ID!,
            apiKey: process.env.GOOGLE_API_KEY!,
            language: 'fr',
            limit: 3
        });
        
        return Response.json(data);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return Response.json({
            totalReviews: 0,
            rating: 0,
            reviews: [],
            lastUpdate: new Date().toISOString()
        });
    }
}