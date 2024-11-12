import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="border-bottom bg-white sticky-top">
      <div className="r-container">
        <nav className="navbar navbar-expand-lg font-2">
          <div className="container-fluid">
            <div className="logo-container">
              <Link className="navbar-brand" href="/">
                <Image src="/image/logo-clara.webp" alt="Logo patte à l'eau" className="img-fluid" width={150} height={50} />
              </Link>
            </div>
            <button 
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#about">
                    À propos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#service">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#pricing">
                    Tarifs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#partner">
                    Partenaires
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#faq">
                    Faq
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#contact">
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
                <Link href="tel:+12345678" className="btn btn-accent px-4 py-3">
                  <i className="fa-solid fa-phone"></i>
                  06 27 80 60 61
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
} 