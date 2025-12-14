import MinioImage from '@/components/common/MinioImage'
import Link from 'next/link'
import content from '@/content.json'

interface Partner {
    id: string;
    title: string;
    description: string;
    image?: string;
    url: string;
    buttonText: string;
    type: 'association' | 'product';
}

export default function Partner() {
    const { partners } = content;

    return (
        <div id={partners.id} className="section bg-light-color">
            <div id="partner" className="r-container">
                <div className="d-flex flex-column gap-3 justify-content-center text-center mx-auto mb-5">
                    <span id={partners.texts.subtitle.id} className="font-1 accent-color-2 fs-3">
                        {partners.texts.subtitle.text}
                    </span>
                    <h3 id={partners.texts.title.id} className="font-2 fw-semibold">
                        {partners.texts.title.text}
                    </h3>
                </div>

                <div className="row g-4">
                    {partners.items.map((partner) => (
                        <div key={partner.id} className="col-md-6">
                            <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                                <div className="d-flex flex-column h-100">
                                    {partner.type === 'product' ? (
                                        <div className="mb-4 position-relative" style={{ height: '250px' }}>
                                            <MinioImage
                                                id={`partner-image-${partner.id}`}
                                                src="boutique.webp"
                                                alt="Notre boutique de produits"
                                                fill
                                                className="rounded-3 object-fit-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="mb-4 d-flex justify-content-center" style={{ height: '100px' }}>
                                            <MinioImage
                                                id={`partner-logo-${partner.id}`}
                                                src="la-porte.webp"
                                                alt="Logo La Porte de l'Espoir"
                                                width={200}
                                                height={100}
                                                className="object-fit-contain"
                                            />
                                        </div>
                                    )}
                                    <h4 className="fw-semibold mb-3">{partner.title}</h4>
                                    <p className="text-gray mb-4">{partner.description}</p>
                                    <div className="mt-auto">
                                        <Link 
                                            href={partner.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`btn ${partner.type === 'association' ? 'btn-accent' : 'btn-accent-outline'} px-4 py-2`}
                                        >
                                            {partner.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}