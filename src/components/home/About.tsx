import Image from 'next/image'

export default function About() {
    return (
        <div id="about" className="section pb-0 bg-light-color">
        <div className="r-container">
            <div className="row row-cols-lg-2 row-cols-1">
            <div className="col mb-lg-0 mb-3">
                <div className="position-relative">
                <div className="ps-lg-5 ps-0">
                    <Image 
                    src="/image/photo-3.webp" 
                    alt="About"
                    width={600}
                    height={600}
                    className="img-fluid"
                    />
                </div>
                <div className="position-absolute start-0 top-0" style={{ zIndex: 2 }}>
                    <div className="bg-accent-color rounded-3 d-flex align-items-center gap-3 px-5 py-3 text-white">
                    <div style={{ fontSize: '3rem' }}>
                        <i className="fa-solid fa-paw"></i>
                    </div>
                    <div>
                        <h3 className="m-0 fw-semibold">2K</h3>
                        <span>boules de poils satisfaites</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col mb-3">
                <div className="d-flex flex-column justify-content-center h-100 pe-lg-5 pe-0">
                <span className="font-1 accent-color-2 fs-3">À propos</span>
                <div className="mb-4">
                    <h3 className="font-2 fw-semibold">Rencontrez Clara, votre toiletteuse dédiée</h3>
                </div>
                <p className="text-gray">
                    Je m&apos;appelle Clara, artisan toiletteuse spécialisée pour chiens et chats. Basée à Auenheim 
                    Rountzenheim, j&apos;ai suivi une formation de toilettage canin et félin en 2022, ce qui m&apos;a permis 
                    d&apos;obtenir un diplôme et de transformer ma passion en métier.
                </p>
                <p className="text-gray">
                    Forte de mon expérience au sein d&apos;une association de protection animale pendant de nombreuses 
                    années, je suis pleinement dévouée au bien-être de vos compagnons. J&apos;ai hâte de prendre soin 
                    de votre loulou dans un environnement calme et attentionné, en veillant à chaque détail pour 
                    leur confort et leur beauté.
                </p>
                <div className="row row-cols-lg-2 row-cols-1 mt-2">
                    <div className="col">
                    <div>
                        <div className="d-flex flex-row align-items-center gap-2 mb-3">
                        <Image 
                            src="/image/icon-1.png" 
                            alt="Expert Care" 
                            width={40} 
                            height={40}
                            className="img-fluid"
                        />
                        <h5 className="fw-semibold m-0">Soin Expert</h5>
                        </div>
                        <p className="text-gray">
                        Passionnée par les animaux et diplômée en toilettage canin et félin, Clara s&apos;  engage à offrir des soins de qualité pour chaque compagnon à quatre pattes. Grâce à une expérience au sein d&apos;une association de protection animale, elle comprend l&apos;importance du bien-être de chaque animal et veille à leur offrir un environnement de toilettage apaisant.
                        </p>
                    </div>
                    </div>
                    <div className="col">
                    <div>
                        <div className="d-flex flex-row align-items-center gap-2 mb-3">
                        <Image  
                            src="/image/icon-2.png" 
                            alt="Convenient Location" 
                            width={40} 
                            height={40}
                            className="img-fluid"
                        />
                        <h5 className="fw-semibold m-0">Emplacement Pratique</h5>
                        </div>
                        <p className="text-gray">
                        Située à Auenheim Rountzenheim, Clara propose un salon de toilettage facilement accessible pour les habitants de la région. Que vous veniez pour un toilettage complet ou un entretien régulier, le salon est aménagé pour offrir un cadre confortable et accueillant pour vous et votre compagnon.
                        </p>
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