import Image from 'next/image'

interface FaqItem {
    id: number;
    question: string;
    answer: string;
    isOpen: boolean;
}

export default function Faq() {
    const faqItems: FaqItem[] = [
        {
            id: 1,
            question: "Acceptez-vous les chiens de catégorie ?",
            answer: "Oui j'accepte les chiens de catégorie. Je bénéficie même de la formation de détendeur de chien de catégorie 1 et 2.",
            isOpen: true
        },
        {
            id: 2,
            question: "Le maître peut-il rester avec lors du toilettage ?",
            answer: "Oui le maître peut rester avec si le chien reste en place car certain loulou en voyant la présence du maître peut ne pas ce laisser faire. Pour une question de sécurité il est préférable que le maître ne soit alors pas avec.",
            isOpen: false
        },
        {
            id: 3,
            question: "Acceptez vous tout type de chien et chat ?",
            answer: "Qu'importe la taille tout chien et chat sont acceptés.",
            isOpen: false
        },
        {
            id: 4,
            question: "Quel type de produit utilisez vous ?",
            answer: "J'utilise la gamme Petux qui est une gamme vegan et eco responsable.",
            isOpen: false
        },
        {
            id: 5,
            question: "Combien de temps dure en moyenne un toilettage ?",
            answer: "En général un toilettage dure 2 heures mais ce temps peut varier en fonction de la taille et de l'état de l'animal dans ce cas des frais supplémentaires sont mis en place.",
            isOpen: false
        }
    ];

    return (
        <div id='faq' className="section position-relative">
            <div className="r-container">
                <div className="d-flex flex-lg-row flex-column-reverse gap-4">
                    <div className="col px-lg-5 mb-5">
                        <div className="d-flex flex-column justify-content-center gap-3">
                            <span className="font-1 accent-color-2 fs-3">FAQs</span>

                            <h3 className="font-2 fw-semibold">
                                Questions Fréquemment Posées
                            </h3>
                            <p className="text-gray">
                                Retrouvez ici les réponses aux questions les plus fréquentes concernant nos services de toilettage.
                            </p>
                            <div className="accordion d-flex flex-column gap-4" id="accordionExample">
                                {faqItems.map((item) => (
                                    <div className="accordion-item" key={item.id}>
                                        <h2 className="accordion-header">
                                            <button 
                                                className={`accordion-button ${!item.isOpen ? 'collapsed' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.id}`}
                                                aria-expanded={item.isOpen}
                                                aria-controls={`collapse${item.id}`}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div 
                                            id={`collapse${item.id}`}
                                            className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="position-relative px-lg-5">
                            <div className="rounded-3 px-5">
                                <Image 
                                    src="/image/photo-1.webp"
                                    alt="FAQ illustration"
                                    width={600}
                                    height={800}
                                    className="img-fluid faq-img"
                                />
                            </div>
                            <div className="floating-top">
                                <div className="bg-accent-color rounded-3 d-flex align-items-center gap-3 px-lg-5 py-lg-3 px-2 py-1 text-white">
                                    <div style={{ fontSize: '3rem' }}>
                                        <i className="fa-solid fa-paw"></i>
                                    </div>
                                    <div>
                                        <h3 className="m-0 fw-semibold">2K</h3>
                                        <span>Animaux satisfaits</span>
                                    </div>
                                </div>
                            </div>
                            <div className="floating-bottom">
                                <div className="bg-accent-color rounded-3 d-flex align-items-center gap-3 px-lg-5 py-lg-3 px-2 py-1 text-white">
                                    <div style={{ fontSize: '3rem' }}>
                                        <i className="fa-solid fa-user-group"></i>
                                    </div>
                                    <div>
                                        <h3 className="m-0 fw-semibold">4K</h3>
                                        <span>Clients Satisfaits</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}