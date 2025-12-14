import MinioImage from '@/components/common/MinioImage'
import content from '@/content.json'

interface ServiceCard {
    id: string;
    title: string;
    description: string;
    image: string;
    alt: string;
}

export default function Service() {
    const { services } = content;

    return (
        <div id={services.id} className="section">
            <div id="service" className="r-container">
                <div className="d-flex flex-column justify-content-center text-center gap-3 mb-5">
                    <div className="mx-auto" style={{ maxWidth: '754px' }}>
                        <span id={services.texts.subtitle.id} className="font-1 accent-color-2 fs-3">
                            {services.texts.subtitle.text}
                        </span>
                        <div className="mb-4">
                            <h3 id={services.texts.title.id} className="font-2 fw-semibold">
                                {services.texts.title.text}
                            </h3>
                        </div>
                        <p id={services.texts.description.id} className="text-gray">
                            {services.texts.description.text}
                        </p>
                    </div>
                </div>

                <div className="row row-cols-lg-3 row-cols-1 g-4 mb-5">
                    {services.items.map((service: ServiceCard) => (
                        <div key={service.id} id={`service-card-${service.id}`} className="col">
                            <div className="h-100 d-flex flex-column">
                                <div className="position-relative" style={{ height: '250px' }}>
                                    <MinioImage
                                        id={`service-image-${service.id}`}
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-top-3"
                                    />
                                </div>
                                <div className="bg-light-color p-4 flex-grow-1 rounded-bottom-3 shadow-sm text-center d-flex flex-column">
                                    <h5 id={`service-title-${service.id}`} className="fw-semibold mb-3">
                                        {service.title}
                                    </h5>
                                    <p id={`service-description-${service.id}`} className="text-gray mb-0">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}