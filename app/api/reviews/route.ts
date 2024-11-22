export async function GET() {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?` +
            `place_id=${process.env.GOOGLE_PLACE_ID}` +
            `&fields=reviews,user_ratings_total,rating` +
            `&key=${process.env.GOOGLE_API_KEY}` +
            `&language=fr`
        );

        const data = await response.json();
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