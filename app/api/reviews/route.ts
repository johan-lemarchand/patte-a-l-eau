import { formatReviews, saveReviewsToTmp, GooglePlacesResponse } from '@johan27000/next-google-reviews';

export async function GET() {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?` +
            `place_id=${process.env.GOOGLE_PLACE_ID}` +
            `&fields=reviews,user_ratings_total,rating` +
            `&key=${process.env.GOOGLE_API_KEY}` +
            `&language=fr`
        );

        const data = await response.json() as GooglePlacesResponse;

        if (!data.result) {
            throw new Error(data.error_message || 'No result found');
        }

        const reviews = data.result.reviews || [];
        const limitedReviews = reviews.slice(0, 5);

        const formattedData = {
            totalReviews: data.result.user_ratings_total || 0,
            rating: data.result.rating || 0,
            reviews: formatReviews(limitedReviews),
            lastUpdate: new Date().toISOString().split('T')[0]
        };

        await saveReviewsToTmp(formattedData);
        return Response.json(formattedData);
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