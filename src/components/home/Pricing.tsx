import MinioImage from '@/components/common/MinioImage'
import content from '@/content.json'

interface PricingService {
    name: string;
    price: number;
}

interface BasePricingPlan {
    id: string;
    title: string;
    description?: string;
    image: {
        src: string;
        alt: string;
    };
    basePrice?: number;
    extraPrice?: number;
    services?: PricingService[];
}

interface PricingPlan extends BasePricingPlan {
    variant: 'light' | 'green' | 'accent';
}

// Ajout de l'interface pour sous-plan
interface SousPlan {
    id: string;
    title?: string;
    description?: string;
    alert?: string;
    image?: {
        src: string;
        alt: string;
    };
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

    const pricingPlansWithVariants: PricingPlan[] = pricing.plans.map((plan: BasePricingPlan, index) => {
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
                                        {plan.description && (
                                            <p className="text-sm mb-3">
                                                {plan.description}
                                            </p>
                                        )}
                                        <div id={`pricing-price-${plan.id}`} className="d-flex flex-column gap-2 mb-3">
                                            {plan.services && plan.services.length > 0 ? (
                                                <div className="d-flex flex-column gap-2">
                                                    {plan.services.map((service, index) => (
                                                        <div key={index} className="d-flex justify-content-between align-items-center">
                                                            <span className="text-sm">{service.name}</span>
                                                            <span className="fw-semibold">à partir de {service.price}€</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : plan.basePrice !== undefined && plan.basePrice !== null ? (
                                                <>
                                                    <h3 className="fw-semibold m-0">{plan.basePrice}€</h3>
                                                    {plan.extraPrice && (
                                                        <span id={`pricing-extra-${plan.id}`} className="text-sm"></span>
                                                    )}
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    {pricing['sous-plan'].slice(0, 2).map((plan: SousPlan) => (
                        <div key={plan.id} className="col">
                            <div className="bg-light-color p-4 rounded-3 shadow-sm h-100">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    {plan.image && (
                                        <MinioImage 
                                            src={plan.image.src}
                                            alt={plan.image.alt}
                                            width={40} 
                                            height={40}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    )}
                                    {plan.title && <h5 className="fw-semibold m-0">{plan.title}</h5>}
                                </div>
                                {plan.description && <p className="mb-0">{plan.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-light-color p-4 rounded-3 shadow-sm text-center">
                    {pricing['sous-plan'].slice(2, 3).map((plan: SousPlan) => (
                        <div key={plan.id}>
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                                {plan.image && (
                                    <MinioImage 
                                        src={plan.image.src}
                                        alt={plan.image.alt}
                                        width={40} 
                                        height={40}
                                        style={{ objectFit: 'cover' }}
                                    />
                                )}
                                {plan.title && <h5 className="fw-semibold m-0">{plan.title}</h5>}
                            </div>
                            {plan.description && <p className="mb-0">{plan.description}</p>}
                        </div>
                    ))}
                </div>

                <div className="alert alert-warning mt-5 text-center" role="alert">
                    {pricing['sous-plan'][3].alert}
                </div>
            </div>
        </div>
    );
}