import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="section pb-0 bg-light-color">
                <div className="r-container py-lg-5 pt-5 border-bottom">
                    <div className="row row-cols-lg-3 row-cols-1 w-100 pt-5">
                        <div className="col mb-3">
                            <div className="d-flex flex-column gap-4">
                                <div className="container">
                                    <Image
                                        src="/image/logo-clara.webp"
                                        alt="Logo patte à l'eau"
                                        width={250}
                                        height={100}
                                        className="img-fluid"
                                    />
                                </div>
                                <p className="text-gray">
                                    &quot;Prenez soin de vos compagnons avec amour et expertise. Chez Patte à l&apos;eau, chaque toilettage est une caresse.&quot;
                                </p>
                            </div>
                        </div>
                        <div className="col pt-lg-5 mb-3">
                            <div className="row row-cols-lg-2 row-cols-1 h-100">
                                <div className="col mb-3">
                                    <div className="d-flex flex-column gap-3">
                                        <h5 className="fw-semibold border-bottom pb-2">Liens Rapides</h5> 
                                        <ul className="list gap-2">
                                            <li>
                                                <i className="fa-solid fa-chevron-right fa-xs"></i>
                                                <Link href="/" className="link">Home</Link>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-right fa-xs"></i>
                                                <Link href="#about" className="link">À propos</Link>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-right fa-xs"></i>
                                                <Link href="#service" className="link">Services</Link>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-right fa-xs"></i>
                                                <Link href="#contact" className="link">Contactez-nous</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col mb-3">
                                    <div className="d-flex flex-column gap-3">
                                        <h5 className="fw-semibold border-bottom pb-2">Information</h5>
                                        <ul className="list gap-2">
                                            <li>
                                                <i className="fa-solid fa-chevron-right fa-xs"></i>
                                                <Link href="/privacy" className="link">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-right fa-xs"></i>
                                                <Link href="/terms" className="link">Term & Condition</Link>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-right fa-xs"></i>
                                                <Link href="#faqs" className="link">FAQs</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-lg-5 px-lg-5 mb-3">
                            <div className="d-flex flex-column gap-3">
                                <h5 className="fw-semibold border-bottom pb-2">Contactez-nous</h5>
                                <ul className="list gap-2">
                                    <li>
                                        <i className="fa fa-location-dot"></i>
                                        62 Rue de Soufflenheim, 67480 Rountzenheim-Auenheim
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        06 27 80 60 61
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i>
                                        hello@domainsite.com
                                    </li>
                                </ul>
                                <div className="social-container mb-lg-0 mb-3">
                                    <Link href="https://www.facebook.com" className="social-item">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                    <Link href="https://www.twitter.com" className="social-item">
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                    <Link href="https://www.instagram.com" className="social-item">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                    <Link href="https://www.youtube.com" className="social-item">
                                        <i className="fa-brands fa-youtube"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="r-container py-3">
                    <div className="d-flex flex-lg-row flex-column gap-3 justify-content-between">
                        <div className="d-flex flex-row gap-3 justify-content-center">
                            <Link href="/privacy" className="link text-gray">Privacy Policy</Link>
                            |
                            <Link href="/terms" className="link text-gray">Term & Services</Link>
                        </div>
                        <span className="text-gray text-center">
                            Copyright © 2024 Anstett Solutions pro. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
} 