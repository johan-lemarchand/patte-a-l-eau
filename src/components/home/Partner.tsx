import MinioImage from '@/components/common/MinioImage'
import Link from 'next/link'
import content from '@/content.json'

interface Partner {
    id: string;
    logo: string;
    name: string;
    url: string;
}

export default function Partner() {
    const { partners } = content;

    return (
        <div id={partners.id} className="py-5 bg-light-color">
        <div id="partner" className="r-container">
            <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 w-100">
            {partners.items.map((partner) => (
                <div key={partner.id} id={partner.id} className="col px-4">
                <Link 
                    id={`partner-link-${partner.id}`}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block hover:opacity-80 transition-opacity"
                >
                    <MinioImage
                        id={`partner-logo-${partner.id}`}
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        width={150}
                        height={50}
                        className="partner-logo"
                    />
                </Link>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}