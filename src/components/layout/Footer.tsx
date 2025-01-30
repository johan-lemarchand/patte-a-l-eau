'use client'

import MinioImage from '@/components/common/MinioImage'
import Link from 'next/link'
import content from '@/content.json'

export default function Footer() {
    const { footer } = content;
    return (
        <footer>
            <div className="section pb-0 bg-light-color">
                <div className="r-container">
                    <div className="row row-cols-lg-3 row-cols-1">
                        <div className="col mb-3">
                            <div className="d-flex flex-column gap-4">
                                <div className="container">
                                    <MinioImage
                                        src={footer.logo.src}
                                        alt={footer.logo.alt}
                                        width={150}
                                        height={50}
                                        className="img-fluid mb-4"
                                    />
                                </div>
                                <p className="text-gray">
                                    {footer.quote}
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
                                                <Link href="#faq" className="link">FAQs</Link>
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
                                        <a 
                                            href="https://maps.google.com?q=62+Rue+de+Soufflenheim+67480+Rountzenheim-Auenheim" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="link"
                                        >
                                            <i className="fa fa-location-dot me-2"></i>
                                            62 Rue de Soufflenheim, 67480 Rountzenheim-Auenheim
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="tel:+33627806061"
                                            className="link"
                                        >
                                            <i className="fa fa-phone me-2"></i>
                                            06 27 80 60 61
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="mailto:pattesaleautoilettage@gmail.com"
                                            className="link"
                                        >
                                            <i className="fa fa-envelope me-2"></i>
                                            pattesaleautoilettage@gmail.com
                                        </a>
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
                            Copyright  2024 Anstett Solutions pro. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
} 