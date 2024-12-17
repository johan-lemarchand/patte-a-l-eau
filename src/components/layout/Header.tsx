'use client'

import { useRef } from 'react'
import Link from 'next/link'
import MinioImage from '@/components/common/MinioImage'
import content from '@/content.json'

export default function Header() {
  const { header } = content;
  const navbarToggler = useRef<HTMLButtonElement>(null);
  const navbarCollapse = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    // Vérifie si la navbar est ouverte (visible sur mobile)
    if (navbarCollapse.current?.classList.contains('show')) {
      navbarToggler.current?.click();
    }
  };

  return (
    <div className="border-bottom bg-white sticky-top">
      <div className="r-container">
        <nav className="navbar navbar-expand-lg font-2">
          <div className="container-fluid">
            <div className="logo-container">
              <Link className="navbar-brand" href="/">
                <MinioImage
                  id={header.logo.id}
                  src={header.logo.src}
                  alt={header.logo.alt}
                  width={150}
                  height={50}
                  className="img-fluid"
                />
              </Link>
            </div>
            <button 
              ref={navbarToggler}
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent"
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div ref={navbarCollapse} className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/" onClick={handleLinkClick}>
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#about" onClick={handleLinkClick}>
                    À propos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#service" onClick={handleLinkClick}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#pricing" onClick={handleLinkClick}>
                    Tarifs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#review" onClick={handleLinkClick}>
                    Mes avis
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#partner" onClick={handleLinkClick}>
                    Partenaires
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#faq" onClick={handleLinkClick}>
                    Faq
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#contact" onClick={handleLinkClick}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="social-container mb-lg-0 mb-3 me-5">
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
              <div>
                <Link href={`tel:${header.phone.number}`} className="btn btn-accent px-4 py-3">
                  <i className="fa-solid fa-phone me-2"></i>
                  {header.phone.text}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}