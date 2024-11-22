'use client';

import { GoogleReviewsButton, ReviewsSwiper } from '@johan27000/next-google-reviews';

export default function Testimonial() {
    return (
        <div className="section">
            <div className="r-container">
                <div className="row row-cols-lg-2 row-cols-1 w-100 mb-5">
                    <div className="col pe-lg-5">
                        <div className="d-flex flex-column pe-lg-5">
                            <span className="font-1 accent-color-2 fs-3">Nos avis</span>
                            <div className="mb-4">
                                <h3 className="font-2 fw-semibold">
                                    Voir les avis de nos clients
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center pe-lg-5 h-100">
                            <p className="text-gray">
                                Découvrez ce que nos clients pensent de nos services ! Nous nous engageons à offrir une expérience
                                de toilettage attentionnée et professionnelle pour chaque compagnon à quatre pattes. Nos clients
                                apprécient l&apos;attention portée au bien-être de leurs animaux et la qualité de notre travail. Lisez
                                leurs témoignages et voyez pourquoi ils nous font confiance pour prendre soin de leurs compagnons.
                            </p>
                        </div>
                    </div>
                </div>
                <GoogleReviewsButton placeId="ChIJA-Vgz8XnlkcRyB153HKgHtQ" /> 
                <ReviewsSwiper />              
            </div>
        </div>
    );
}