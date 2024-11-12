import Image from 'next/image'
import Link from 'next/link'

interface Partner {
    id: number;
    logo: string;
    name: string;
    url: string;
}

export default function Partner() {
    const partners: Partner[] = [
    { id: 1, logo: "/image/logo-ipsum-2.png", name: "Partenaire 1", url: "https://partenaire1.com" },
    { id: 2, logo: "/image/logo-ipsum-3.png", name: "Partenaire 2", url: "https://partenaire2.com" },
    { id: 3, logo: "/image/logo-ipsum-4.png", name: "Partenaire 3", url: "https://partenaire3.com" },
    { id: 4, logo: "/image/logo-ipsum-5.png", name: "Partenaire 4", url: "https://partenaire4.com" },
    { id: 5, logo: "/image/logo-ipsum-6.png", name: "Partenaire 5", url: "https://partenaire5.com" },
    ];

    return (
        <div id="partner" className="py-5 bg-light-color">
        <div className="r-container">
            <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 w-100">
            {partners.map((partner) => (
                <div key={partner.id} className="col px-4">
                <Link 
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block hover:opacity-80 transition-opacity"
                >
                    <Image 
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={200}
                    height={100}
                    className="img-fluid"
                    />
                </Link>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
} 