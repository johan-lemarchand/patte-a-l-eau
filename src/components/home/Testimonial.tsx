'use client';

import { GoogleReviewsButton, ReviewsSwiper } from '@johan27000/next-google-reviews';
import content from '@/content.json';

export default function Testimonial() {
    const { testimonials } = content;

    return (
        <div id={testimonials.id} className="section">
            <div id="review" className="r-container">
                <div className="row row-cols-lg-2 row-cols-1 w-100 mb-5">
                    <div className="col pe-lg-5">
                        <div className="d-flex flex-column pe-lg-5">
                            <span id={testimonials.texts.subtitle.id} className="font-1 accent-color-2 fs-3">
                                {testimonials.texts.subtitle.text}
                            </span>
                            <div className="mb-4">
                                <h3 id={testimonials.texts.title.id} className="font-2 fw-semibold">
                                    {testimonials.texts.title.text}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center pe-lg-5 h-100">
                            <p id={testimonials.texts.description.id} className="text-gray">
                                {testimonials.texts.description.text}
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