import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="section pt-lg-0">
      <div className="r-container">
        <div className="row row-cols-lg-2 row-cols-1">
          <div className="col mb-3">
            <div className="d-flex flex-column justify-content-center h-100 pe-lg-5 pe-0">
              <span className="font-1 accent-color-2 fs-3">Bienvenue au salon de toilettage Pattes à l&apos;eau</span>
              <div className="mb-4">
                <h3 className="font-2 fw-semibold">
                  Prendre soin de vos animaux avec compétence et professionnalisme
                </h3>
              </div>
              <p className="text-gray">
                Au salon de toilettage Pattes à l&apos;eau, nous sommes dédiés à fournir un soin attentif et complet pour vos animaux. De la toilettage à l&apos;hébergement, nous nous assurons que vos compagnons sont heureux et bien entretenus.
              </p>
              <div className="d-flex flex-row gap-3 mt-3">
                <Link href="#about" className="btn btn-accent px-5 py-3 fw-semibold">
                  En savoir plus
                </Link>
                <Link href="#contact" className="btn btn-accent-outline px-5 py-3 fw-semibold">
                  Contactez-moi
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="ps-lg-5 ps-0 position-relative">
              <Image 
                src="/image/photo-1.webp"
                alt="image"
                width={600}
                height={700}
                className="img-fluid"
              />
              <div className="position-absolute start-0 bottom-0 video-e119">
                <div 
                  className="position-relative h-100 overflow-hidden"
                  style={{ border: '5px solid white', borderRadius: '13px' }}
                >
                  <div className="image-overlay-2"></div>
                  <div className="position-absolute start-0 top-0 w-100 h-100" style={{ zIndex: 2 }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <button 
                        type="button" 
                        className="btn request-loader" 
                        data-bs-toggle="modal"
                        data-bs-target="#e119"
                      >
                        <i className="fa-solid fa-play ms-1"></i>
                      </button>
                    </div>
                  </div>
                  <Image 
                    src="/image/photo-2.webp"
                    alt="image"
                    width={600}
                    height={400}
                    className="w-100 img-fluid"
                  />
                </div>
                <div className="modal fade bg-overlay" id="e119" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content bg-dark-color">
                      <iframe 
                        className="ifr-video"
                        src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"
                      />
                    </div>
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