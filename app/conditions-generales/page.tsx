import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales',
  description: 'Conditions générales du salon de toilettage Patte à l\'eau. Informations sur nos services, tarifs et modalités de rendez-vous.',
  alternates: {
    canonical: 'https://pattesaleau-toilettage.fr/conditions-generales'
  }
}

export default function ConditionsGenerales() {
    return (
        <div className="section">
            <div className="r-container">
                <h1 className="mb-4">Conditions Générales</h1>

                <h2 className="mt-5 mb-3">1. Services proposés</h2>
                <p>Nous proposons des services de toilettage pour chiens et chats. Nos prestations incluent le bain, la coupe, le brushing et divers soins selon les besoins de votre animal.</p>

                <h2 className="mt-5 mb-3">2. Rendez-vous et annulations</h2>
                <p>Tout retard de 15 minutes est considéré comme une annulation et nécessite une reprogrammation. Les annulations doivent être effectuées au moins 24 heures à l&apos;avance.</p>

                <h2 className="mt-5 mb-3">3. Santé et sécurité</h2>
                <p>Nous nous réservons le droit de refuser le service si l&apos;animal présente des signes de maladie contagieuse ou un comportement dangereux. Les vaccinations doivent être à jour.</p>

                <h2 className="mt-5 mb-3">4. Tarifs et paiement</h2>
                <p>Les tarifs sont établis selon la taille de l&apos;animal et le type de service demandé. Le paiement est dû au moment de la prestation.</p>

                <h2 className="mt-5 mb-3">5. Responsabilité</h2>
                <p>Bien que nous prenions le plus grand soin de votre animal, nous ne pouvons être tenus responsables des réactions allergiques aux produits utilisés ou des blessures que l&apos;animal pourrait s&apos;infliger du fait de son comportement.</p>

                <h2 className="mt-5 mb-3">6. Modification des conditions</h2>
                <p>Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront effectives dès leur publication sur notre site.</p>
            </div>
        </div>
    )
} 