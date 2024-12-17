import MinioImage from '@/components/common/MinioImage'
import content from '@/content.json'

interface PricingPlan {
    id: string;
    title: string;
    basePrice: number;
    extraPrice?: number;
    image: {
        src: string;
        alt: string;
    };
    variant: 'light' | 'green' | 'accent';
}

export default function Pricing() {
    const { pricing } = content;
    
    const getVariantClasses = (variant: PricingPlan['variant']) => {
        switch (variant) {
            case 'light':
                return {
                    container: 'bg-light-color accent-color-2',
                    button: 'btn-accent'
                };
            case 'green':
                return {
                    container: 'bg-accent-green text-white',
                    button: 'btn-accent-green'
                };
            case 'accent':
                return {
                    container: 'bg-accent-color text-white',
                    button: 'btn-white-accent'
                };
        }
    };

    // Assigner les variants aux plans
    const pricingPlansWithVariants = pricing.plans.map((plan, index) => {
        let variant: PricingPlan['variant'];
        if (index % 3 === 0) variant = 'light';
        else if (index % 3 === 1) variant = 'green';
        else variant = 'accent';
        return { ...plan, variant };
    });

    return (
        <div id={pricing.id} className="section">
            <div id="pricing" className="r-container">
                <div className="d-flex flex-column gap-3 justify-content-center text-center mx-auto mb-4">
                    <span id={pricing.texts.subtitle.id} className="font-1 accent-color-2 fs-3">
                        {pricing.texts.subtitle.text}
                    </span>
                    <h3 id={pricing.texts.title.id} className="font-2 fw-semibold">
                        {pricing.texts.title.text}
                    </h3>
                </div>

                <div className="row row-cols-lg-3 row-cols-1 g-4 mb-5">
                    {pricingPlansWithVariants.map((plan) => {
                        const variantClasses = getVariantClasses(plan.variant);
                        
                        return (
                            <div key={plan.id} id={plan.id} className="col">
                                <div className="h-100 d-flex flex-column">
                                    <div className="position-relative" style={{ height: '250px' }}>
                                        <MinioImage 
                                            id={`pricing-image-${plan.id}`}
                                            src={plan.image.src}
                                            alt={plan.image.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="rounded-top-3"
                                            style={{ objectFit: 'cover' }}
                                            priority
                                        />
                                    </div>
                                    <div id={`pricing-content-${plan.id}`} className={`${variantClasses.container} p-4 flex-grow-1 rounded-bottom-3 shadow-sm`}>
                                        <h5 id={`pricing-title-${plan.id}`} className="fw-semibold mb-3">
                                            {plan.title}
                                        </h5>
                                        <div id={`pricing-price-${plan.id}`} className="d-flex flex-column gap-2 mb-3">
                                            <h3 className="fw-semibold m-0">
                                                {plan.basePrice}€
                                            </h3>
                                            {plan.extraPrice && (
                                                <span id={`pricing-extra-${plan.id}`} className="text-sm">
                                                    + {plan.extraPrice}€ si nœuds
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    <div className="col">
                        <div className="bg-light-color p-4 rounded-3 shadow-sm h-100">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <MinioImage 
                                    src="photo-2.webp" 
                                    alt="Forfait de base" 
                                    width={40} 
                                    height={40}
                                    style={{ objectFit: 'cover' }}
                                />
                                <h5 className="fw-semibold m-0">FORFAIT DE BASE</h5>
                            </div>
                            <p className="mb-0">
                                Le forfait de base comprend le bain, le séchage, la coupe, la coupe des griffes, 
                                le nettoyage des yeux + oreilles et les finitions.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="bg-light-color p-4 rounded-3 shadow-sm h-100">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <MinioImage 
                                    src="photo-2.webp" 
                                    alt="Hors forfait" 
                                    width={40} 
                                    height={40}
                                    style={{ objectFit: 'cover' }}
                                />
                                <h5 className="fw-semibold m-0">HORS FORFAIT</h5>
                            </div>
                            <p className="mb-0">
                                Le hors forfait comprend le temps de démêlage supplémentaire, 
                                l&apos;utilisation de produits antiparasitaires, la gestion des 
                                comportements difficiles et le dépassement du créneau de deux heures.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-light-color p-4 rounded-3 shadow-sm text-center">
                    <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                        <MinioImage 
                            src="photo-2.webp" 
                            alt="Coupe"
                            width={40} 
                            height={40}
                            style={{ objectFit: 'cover' }}
                        />
                        <h5 className="fw-semibold m-0">COUPE DES GRIFFES SEULE</h5>
                    </div>
                    <p className="mb-0">Coupe des griffes hors prestation de toilettage : 10€</p>
                </div>

                <div className="alert alert-warning mt-5 text-center" role="alert">
                    Tout retard de 15 min est obligatoirement annulé et devra être décalé à un autre jour car cela engendre des retards pour les autres prestations que je ne peux faire aux autres clients.
                </div>
            </div>
        </div>
    );
}