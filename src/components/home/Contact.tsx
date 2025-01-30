"use client";

import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import content from '@/content.json';

interface ContactInfo {
  id: string;
  icon: string;
  title: string;
  content: string;
}

interface Contact {
  id: string;
  info: ContactInfo[];
}

export default function Contact() {
  const { contact } = content;
  const [isVerified, setIsVerified] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Enlever tout ce qui n'est pas un chiffre
      const numbersOnly = value.replace(/\D/g, '');
      // Limiter à 10 chiffres
      const truncated = numbersOnly.slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: truncated
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Empêcher le collage de texte non numérique dans le champ téléphone
  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const numbersOnly = pastedText.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({
      ...prev,
      phone: numbersOnly
    }));
  };

  // Empêcher les touches non numériques
  const handlePhoneKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) || (e.target as HTMLInputElement).value.length >= 10) {
      e.preventDefault();
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setIsVerified(token);
  };

  // Ajouter ces fonctions pour gérer les toasts
  const showToast = (id: string) => {
    const toast = document.getElementById(id);
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000); // Disparaît après 3 secondes
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isVerified) {
      alert('Veuillez valider le reCAPTCHA');
      return;
    }

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    try {
      // Vérifier le reCAPTCHA
      const verifyResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: isVerified
        }),
      });

      const verifyData = await verifyResponse.json();

      if (!verifyData.success) {
        throw new Error('reCAPTCHA verification failed');
      }

      // Envoi de l'email
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const emailData = await emailResponse.json();
      if (!emailData.success) {
        throw new Error('Failed to send email');
      }

      showToast('success-toast');
      
      // Réinitialiser le formulaire
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsVerified(null);
      form.classList.remove('was-validated');
      
      // Réinitialiser le reCAPTCHA
      const recaptcha = document.querySelector('iframe[title="reCAPTCHA"]');
      if (recaptcha) {
        recaptcha.parentElement?.querySelector('div')?.click();
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      showToast('error-toast');
    }
  };

  return (
      <div id={contact.id} className="section">
        <div id="contact" className="r-container">
          <div className="row row-cols-lg-3 row-cols-1">
            {contact.info.map((item) => (
              <div key={item.id} id={item.id} className="col mb-3 px-lg-3 px-0">
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
                      <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex flex-column">
            <div className="mx-auto mb-3 text-center" style={{ maxWidth: '754px' }}>
              <span id="contact-subtitle" className="font-1 accent-color-2 fs-3">
                Nous sommes là pour vous aider
              </span>
              <div className="mb-4">
                <h3 id="contact-title" className="font-2 fw-semibold">
                  Contactez-nous
                </h3>
              </div>
              <p id="contact-description" className="text-gray">
                Vous avez des questions ou des préoccupations ? N&apos;hésitez pas à nous contacter.
              </p>
            </div>

            <div className="bg-light-color shadow-sm d-flex flex-column p-5">
              {/* Toast de succès */}
              <div 
                id="success-toast" 
                className="toast align-items-center w-100 shadow-none border-success mb-3 my-4 border rounded-0" 
                role="alert" 
                aria-live="assertive" 
                aria-atomic="true"
              >
                <div className="d-flex p-2">
                  <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-success">
                    <i className="fa-solid fa-circle-check f-36"></i>
                    Message envoyé avec succès !
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

              {/* Toast d'erreur */}
              <div 
                id="error-toast"
                className="toast align-items-center w-100 shadow-none border-danger mb-3 my-4 border rounded-0"
                role="alert" 
                aria-live="assertive" 
                aria-atomic="true"
              >
                <div className="d-flex p-2">
                  <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-danger">
                    <i className="fa-solid fa-triangle-exclamation f-36"></i>
                    Une erreur est survenue, veuillez réessayer plus tard.
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
              <form 
                className="contact-form needs-validation" 
                onSubmit={handleSubmit} 
                noValidate
              >
                <div className="row">
                  <div className="col mb-3">
                    <input 
                      type="text" 
                      className="form-control py-3 px-4" 
                      name="first_name" 
                      placeholder="Votre nom" 
                      required 
                      pattern="[A-Za-z\u00C0-\u017F\- ']{2,50}"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">
                      Veuillez entrer un nom valide (2 à 50 caractères)
                    </div>
                  </div>
                  <div className="col mb-3">
                    <input 
                      type="text" 
                      className="form-control py-3 px-4" 
                      name="last_name" 
                      placeholder="Votre prénom" 
                      required 
                      pattern="[A-Za-z\u00C0-\u017F\- ']{2,50}"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">
                      Veuillez entrer un prénom valide (2 à 50 caractères)
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col mb-3">
                    <input 
                      type="email" 
                      className="form-control py-3 px-4" 
                      name="email" 
                      placeholder="Email" 
                      required 
                      pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">
                      Veuillez entrer une adresse email valide
                    </div>
                  </div>
                  <div className="col mb-3">
                    <input 
                      type="tel" 
                      className="form-control py-3 px-4" 
                      name="phone" 
                      placeholder="Numéro de téléphone" 
                      required 
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onPaste={handlePhonePaste}
                      onKeyPress={handlePhoneKeyPress}
                      minLength={10}
                      maxLength={10}
                      inputMode="numeric"
                    />
                    <div className="invalid-feedback">
                      Veuillez entrer un numéro de téléphone valide (10 chiffres)
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea 
                    className="form-control py-3 px-4" 
                    name="message" 
                    rows={5}
                    placeholder="Votre message"
                    required
                    minLength={10}
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <div className="invalid-feedback">
                    Veuillez entrer un message (10 à 1000 caractères)
                  </div>
                </div>

                <div className="mb-4">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={handleRecaptchaChange}
                  />
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-accent submit_form py-3 w-100"
                    disabled={!isVerified}
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="">
            <div className="mb-3">
                <iframe 
                    id="map"
                    loading="lazy" 
                    className="maps overflow-hidden"
                    src="https://maps.google.com/maps?q=62%20Rue%20de%20Soufflenheim%2C%2067480%20Rountzenheim-Auenheim&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
                    title="62 Rue de Soufflenheim, 67480 Rountzenheim-Auenheim" 
                    aria-label="62 Rue de Soufflenheim, 67480 Rountzenheim-Auenheim"
                >
                </iframe>
            </div>
        </div>
      </div>
  )
}