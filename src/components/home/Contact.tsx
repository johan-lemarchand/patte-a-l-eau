export default function Contact() {
  return (
      <div id="contact" className="section">
        <div className="r-container">
          <div className="row row-cols-lg-3 row-cols-1">
            {[
              {
                icon: "fa-location-dot",
                title: "Localisation",
                content: "62 rue de Soufflenheim, 67480 Rountzenheim-Auenheim"
              },
              {
                icon: "fa-phone",
                title: "Téléphone",
                content: "06 27 80 60 61"
              },
              {
                icon: "fa-envelope",
                title: "Email",
                content: "hello@domainsite.com"
              }
            ].map((item, index) => (
              <div key={index} className="col mb-3 px-lg-3 px-0">
                <div className="p-lg-5 p-3 shadow-sm rounded-3 bg-light-color">
                  <div className="d-flex flex-row gap-4 align-items-center">
                    <div>
                      <div 
                        className="bg-accent-color d-flex align-items-center justify-content-center rounded-circle p-3"
                        style={{ width: '5rem', height: '5rem' }}
                      >
                        <div className="fw-semibold text-white m-0" style={{ fontSize: '2rem' }}>
                          <i className={`fa-solid ${item.icon}`}></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="m-0 fw-semibold">{item.title}</h5>
                      <span>{item.content}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex flex-column">
            <div className="mx-auto mb-3 text-center" style={{ maxWidth: '754px' }}>
              <span className="font-1 accent-color-2 fs-3">Contact Us</span>
              <div className="mb-4">
                <h3 className="font-2 fw-semibold">Send Us Message</h3>
              </div>
              <p className="text-gray">
                Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat
                id porta nibh venenatis cras. Tincidunt praesent semper. Arcu dui vivamus arcu felis
              </p>
            </div>

            <div className="bg-light-color shadow-sm d-flex flex-column p-5">
              {/* Messages de succès et d'erreur */}
              <div 
                className="success_msg toast align-items-center w-100 shadow-none mb-3 border border-success rounded-0 my-4"
                role="alert" 
                aria-live="assertive" 
                aria-atomic="true"
              >
                <div className="d-flex p-2">
                  <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-success">
                    <i className="fa-solid fa-check f-36 text-success"></i>
                    Your Message Successfully Send.
                  </div>
                  <button 
                    type="button" 
                    className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-success"
                    data-bs-dismiss="toast" 
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>

              <div 
                className="error_msg toast align-items-center w-100 shadow-none border-danger mb-3 my-4 border rounded-0"
                role="alert" 
                aria-live="assertive" 
                aria-atomic="true"
              >
                <div className="d-flex p-2">
                  <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-danger">
                    <i className="fa-solid fa-triangle-exclamation f-36 text-danger"></i>
                    Something Wrong ! Send Form Failed.
                  </div>
                  <button 
                    type="button" 
                    className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-danger"
                    data-bs-dismiss="toast" 
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>

              {/* Formulaire de contact */}
              <form className="d-flex flex-column h-100 justify-content-center w-100 needs-validation mb-3 form" noValidate>
                <div className="row row-cols-lg-2 row-cols-1">
                  <div className="col mb-3">
                    <input 
                      type="text" 
                      className="form-control py-3 px-4" 
                      name="first_name" 
                      id="first_name"
                      placeholder="First Name" 
                      required 
                    />
                    <div className="invalid-feedback">
                      The field is required.
                    </div>
                  </div>
                  <div className="col mb-3">
                    <input 
                      type="text" 
                      className="form-control py-3 px-4" 
                      name="last_name" 
                      id="last_name"
                      placeholder="Last Name" 
                      required 
                    />
                    <div className="invalid-feedback">
                      The field is required.
                    </div>
                  </div>
                </div>

                <div className="row row-cols-lg-2 row-cols-1">
                  <div className="col mb-3">
                    <input 
                      type="email" 
                      className="form-control py-3 px-4" 
                      name="email" 
                      id="email"
                      placeholder="Email" 
                      required 
                    />
                    <div className="invalid-feedback">
                      The field is required.
                    </div>
                  </div>
                  <div className="col mb-3">
                    <input 
                      type="tel" 
                      className="form-control py-3 px-4" 
                      name="phone" 
                      id="phone"
                      placeholder="Phone Number" 
                      required 
                    />
                    <div className="invalid-feedback">
                      The field is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <textarea 
                    className="form-control py-3 px-4" 
                    id="message" 
                    name="message" 
                    rows={5}
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <button type="submit" className="btn btn-accent submit_form py-3 w-100">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="">
            <div className="mb-3">
                <iframe 
                    loading="lazy" 
                    className="maps overflow-hidden"
                    src="https://maps.google.com/maps?q=62%20Rue%20de%20Soufflenheim%2C%2067480%20Rountzenheim-Auenheim&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
                    title="62 Rue de Soufflenheim, 67480 Rountzenheim-Auenheim" 
                    aria-label="62 Rue de Soufflenheim, 67480 Rountzenheim-Auenheim">
                </iframe>
            </div>
        </div>
      </div>
  )
} 