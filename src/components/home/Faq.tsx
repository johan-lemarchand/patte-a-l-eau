"use client";

import MinioImage from '@/components/common/MinioImage'
import content from '@/content.json'

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

export default function Faq() {
    const { faq } = content;

    return (
        <div id={faq.id} className="section position-relative">
            <div id="faq" className="r-container">
                <div className="d-flex flex-lg-row flex-column-reverse gap-4">
                    {/* Colonne de gauche : FAQ */}
                    <div className="col px-lg-5 mb-5">
                        <div className="d-flex flex-column justify-content-center gap-3">
                            {/* En-tête */}
                            <span id={faq.texts.subtitle.id} className="font-1 accent-color-2 fs-3">
                                {faq.texts.subtitle.text}
                            </span>

                            <h3 id={faq.texts.title.id} className="font-2 fw-semibold">
                                {faq.texts.title.text}
                            </h3>
                            
                            <p id={faq.texts.description.id} className="text-gray">
                                {faq.texts.description.text}
                            </p>

                            {/* Liste des questions */}
                            <div className="accordion d-flex flex-column gap-4" id="accordionExample">
                                {faq.questions.map((item: FaqItem) => (
                                    <div id={item.id} className="accordion-item" key={item.id}>
                                        <h2 className="accordion-header">
                                            <button 
                                                id={`faq-question-${item.id}`}
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.id}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse${item.id}`}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${item.id}`}
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div id={`faq-answer-${item.id}`} className="accordion-body">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite : Image */}
                    <div className="col">
                        <div className="position-relative">
                            <MinioImage
                                src="/boutique.webp"
                                alt="FAQ illustration"
                                width={600}
                                height={700}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}