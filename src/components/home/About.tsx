import content from '@/content.json'
import MinioImage from '../common/MinioImage'

export default function About() {
    const { about } = content;
    return (
        <div id="about" className="section pb-0 bg-light-color">
            <div className="r-container">
                <div className="row row-cols-lg-2 row-cols-1">
                    <div className="col mb-lg-0 mb-3">
                        <div className="position-relative">
                            <div className="ps-lg-5 ps-0">
                                <MinioImage 
                                    src={about.image.src}
                                    alt={about.image.alt}
                                    width={600}
                                    height={600}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="position-absolute start-0 bottom-0" style={{ zIndex: 2 }}>
                                <div className="bg-accent-color rounded-3 d-flex align-items-center gap-3 px-5 py-3 text-white">
                                    <div style={{ fontSize: '2rem' }}>
                                        <i className="fa-solid fa-paw"></i>
                                    </div>
                                    <div>
                                        <h3 className="m-0 fw-semibold">{about.stats.count}</h3>
                                        <span>{about.stats.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="d-flex flex-column justify-content-center h-100 pe-lg-5 pe-0">
                            <span className="font-1 accent-color-2 fs-3">{about.texts.subtitle.text}</span>
                            <div className="mb-4">
                                <h3 className="font-2 fw-semibold">{about.texts.title.text}</h3>
                            </div>
                            <div className="text-gray">
                                {about.texts.description.map((paragraph, index) => (
                                    <p key={index} className="text-gray">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="row row-cols-lg-2 row-cols-1 mt-2">
                                {about.features.map((feature) => (
                                    <div key={feature.id} className="col">
                                        <div>
                                            <div className="d-flex flex-row align-items-center gap-2 mb-3">
                                                <MinioImage 
                                                    src={feature.icon}
                                                    alt={feature.title}
                                                    width={40}
                                                    height={40}
                                                    className="img-fluid"
                                                />
                                                <h5 className="fw-semibold m-0">{feature.title}</h5>
                                            </div>
                                            <p className="text-gray">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}