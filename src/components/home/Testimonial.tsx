import Image from 'next/image'

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
                    apprécient l’attention portée au bien-être de leurs animaux et la qualité de notre travail. Lisez
                    leurs témoignages et voyez pourquoi ils nous font confiance pour prendre soin de leurs compagnons.
                </p>
                </div>
            </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-1 w-100">
            {[1, 2, 3].map((index) => (
                <div key={index} className="col mb-3 px-3">
                <div className="d-flex flex-column justify-content-center gap-4 px-3">
                    <ul className="rating">
                    {[1, 2, 3, 4].map((star) => (
                        <li key={star}><i className="fa-solid fa-star"></i></li>
                    ))}
                    <li className="inactive"><i className="fa-solid fa-star"></i></li>
                    </ul>
                    <p className="text-gray fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusm tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <div className="d-flex flex-row align-items-center gap-3">
                    <div>
                        <Image 
                        src="/image/dummy-img-400x400.jpg" 
                        alt="Client portrait"
                        width={70} 
                        height={70}
                        className="img-fluid rounded-circle"
                        />
                    </div>
                    <div className="d-flex flex-column">
                        <h6 className="m-0 fw-semibold lh-1">Miguela Andrean</h6>
                        <span className="text-gray">Designation</span>
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