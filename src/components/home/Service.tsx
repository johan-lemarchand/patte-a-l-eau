import Image from 'next/image'

interface ServiceCard {
    id: number;
    image: string;
    title: string;
    description: string;
    alt: string;
}

export default function Service() {
    const services: ServiceCard[] = [
        {
        id: 1,
        image: "/image/photo-2.webp",
        title: "Installations Confortables",
        description: "Un espace calme et accueillant, conçu pour le bien-être de votre animal et pour réduire le stress pendant les soins.",
        alt: "Installations Confortables"
        },
        {
        id: 2,
        image: "/image/photo-2.webp",
        title: "Soins de Toilettage Professionnels",
        description: "Des soins complets et personnalisés adaptés aux besoins de chaque race, réalisés avec des produits de qualité.",
        alt: "Soins de Toilettage Professionnels"
        },
        {
        id: 3,
        image: "/image/photo-2.webp",
        title: "Attention Personnalisée pour Chaque Animal",
        description: "Chaque animal est unique et mérite une attention particulière. Clara prend le temps de s'adapter aux besoins et aux préférences de votre compagnon.",
        alt: "Attention Personnalisée pour Chaque Animal"
        }
    ];

    return (
        <div id='service' className="section">
        <div className="r-container">
            <div className="d-flex flex-column justify-content-center text-center gap-3 mb-5">
            <div className="mx-auto" style={{ maxWidth: '754px' }}>
                <span className="font-1 accent-color-2 fs-3">Services</span>
                <div className="mb-4">
                <h3 className="font-2 fw-semibold">
                    Des Services de Toilettage et de Bien-Être pour Vos Compagnons
                </h3>
                </div>
                <p className="text-gray">
                Offrez à vos animaux de compagnie une expérience de toilettage et de bien-être inégalée. Clara propose des services de toilettage professionnels, un accueil chaleureux, et des soins personnalisés pour assurer le confort et la sérénité de chaque animal. Que ce soit pour un toilettage complet, des soins réguliers, ou un moment de détente, nous mettons tout en œuvre pour que votre compagnon soit entre de bonnes mains.
                </p>
            </div>
            </div>

            <div className="row row-cols-lg-3 row-cols-1 g-4 mb-5">
            {services.map((service) => (
                <div key={service.id} className="col">
                <div className="h-100 d-flex flex-column">
                    <div className="position-relative" style={{ height: '250px' }}>
                    <Image 
                        src={service.image}
                        alt={service.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-top-3"
                    />
                    </div>
                    <div className="bg-light-color p-4 flex-grow-1 rounded-bottom-3 shadow-sm text-center d-flex flex-column">
                    <h5 className="fw-semibold mb-3">{service.title}</h5>
                    <p className="text-gray mb-0">{service.description}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}