export async function GET() {
    try {
        const response = await fetch('/api/reviews');
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