import Image from 'next/image'

interface PricingPlan {
    id: number;
    image: string;
    title: string;
    basePrice: number;
    extraPrice?: number;
    variant: 'light' | 'green' | 'accent';
}

export default function Pricing() {
    const pricingPlans: PricingPlan[] = [
        {
            id: 1,
            image: "/image/photo-2.webp",
            title: "CHATS",
            basePrice: 50,
            variant: 'light'
        },
        {
            id: 2,
            image: "/image/photo-2.webp",
            title: "PETIT GABARIT [< 10 KGS]",
            basePrice: 45,
            extraPrice: 20,
            variant: 'green'
        },
        {
            id: 3,
            image: "/image/photo-2.webp",
            title: "GABARIT MOYEN [< 20 KGS]",
            basePrice: 60,
            extraPrice: 30,
            variant: 'accent'
        },
        {
            id: 4,
            image: "/image/photo-2.webp",
            title: "GRAND GABARIT [< 40 KGS]",
            basePrice: 70,
            extraPrice: 35,
            variant: 'green'
        },
        {
            id: 5,
            image: "/image/photo-2.webp",
            title: "TRÈS GRAND GABARIT [> 40 KGS]",
            basePrice: 90,
            extraPrice: 40,
            variant: 'light'
        }
    ];

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

    return (
        <div id="pricing" className="section">
            <div className="r-container">
                <div className="d-flex flex-column gap-3 justify-content-center text-center mx-auto mb-4">
                    <span className="font-1 accent-color-2 fs-3">Tarifs</span>
                    <h3 className="font-2 fw-semibold">
                        Nos Forfaits de Toilettage
                    </h3>
                </div>

                <div className="row row-cols-lg-3 row-cols-1 g-4 mb-5">
                    {pricingPlans.map((plan) => {
                        const variantClasses = getVariantClasses(plan.variant);
                        
                        return (
                            <div key={plan.id} className="col">
                                <div className="h-100 d-flex flex-column">
                                    <div className="position-relative" style={{ height: '250px' }}>
                                        <Image 
                                            src={plan.image}
                                            alt={plan.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="rounded-top-3"
                                        />
                                    </div>
                                    <div className={`${variantClasses.container} p-4 flex-grow-1 rounded-bottom-3 shadow-sm`}>
                                        <h5 className="fw-semibold text-center mb-4">{plan.title}</h5>
                                        <div className="mb-3">
                                            <p className="mb-2">Forfait de base : {plan.basePrice}€</p>
                                            {plan.extraPrice && (
                                                <p className="mb-0">Hors forfait : {plan.extraPrice}€/H</p>
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
                                <Image 
                                    src="/image/photo-2.webp" 
                                    alt="Forfait de base" 
                                    width={40} 
                                    height={40}
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
                                <Image 
                                    src="/image/photo-2.webp" 
                                    alt="Hors forfait" 
                                    width={40} 
                                    height={40}
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
                        <Image 
                            src="/image/photo-2.webp" 
                            alt="Coupe des griffes" 
                            width={40} 
                            height={40}
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