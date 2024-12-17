import MinioImage from '@/components/common/MinioImage'
import Link from 'next/link'
import content from '@/content.json'

export default function Banner() {
  const { banner } = content;
  
  return (
    <div className="section pt-lg-0">
      <div className="r-container">
        <div className="row row-cols-lg-2 row-cols-1">
          <div className="col mb-3">
            <div className="d-flex flex-column justify-content-center h-100 pe-lg-5 pe-0">
              <span id={banner.texts.subtitle.id} className="font-1 accent-color-2 fs-3">
                {banner.texts.subtitle.text}
              </span>
              <div className="mb-4">
                <h3 id={banner.texts.title.id} className="font-2 fw-semibold">
                  {banner.texts.title.text}
                </h3>
              </div>
              <p id={banner.texts.description.id} className="text-gray">
                {banner.texts.description.text}
              </p>
              <div className="d-flex flex-row gap-3 mt-3">
                <Link 
                  href="#about" 
                  id={banner.texts.buttons.primary.id}
                  className="btn btn-accent px-5 py-3 fw-semibold"
                >
                  {banner.texts.buttons.primary.text}
                </Link>
                <Link 
                  href="#contact" 
                  id={banner.texts.buttons.secondary.id}
                  className="btn btn-accent-outline px-5 py-3 fw-semibold"
                >
                  {banner.texts.buttons.secondary.text}
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="ps-lg-5 ps-0 position-relative">
              <MinioImage 
                id={banner.images.main.id}
                src={banner.images.main.src}
                alt={banner.images.main.alt}
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
                  <MinioImage 
                    id={banner.images.video.id}
                    src={banner.images.video.src}
                    alt={banner.images.video.alt}
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