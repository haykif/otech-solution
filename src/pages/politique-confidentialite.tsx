import Layout from "@/components/layout/Layout";

export default function PolitiqueConfidentialite() {
	const lastUpdated = new Date().toLocaleDateString("fr-FR");

	return (
		<Layout>
			<main className="section-padding container-max">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-4xl font-bold mb-6">Politique de confidentialité</h1>
					<p className="text-sm text-muted-foreground mb-4">Dernière mise à jour : {lastUpdated}</p>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
						<p className="text-sm text-foreground leading-relaxed">
							O TECH Solution attache une grande importance à la protection de votre vie privée et de vos données personnelles. Cette politique de confidentialité explique quelles données sont collectées, comment elles sont utilisées et quels sont vos droits.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">2. Données collectées</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Le site ne collecte aucune donnée personnelle à votre insu. Les seules informations recueillies sont celles que vous fournissez volontairement via le formulaire de contact (nom, email, téléphone, message).<br />
							Aucune donnée n'est stockée sur le site ou dans une base de données. Les informations transmises servent uniquement à l'envoi d'un email au responsable du site.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">3. Utilisation des données</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Les données transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni conservées, ni transmises à des tiers, ni utilisées à des fins commerciales ou publicitaires.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Le site n'utilise aucun cookie de suivi, d'analyse ou publicitaire. Seul un cookie technique est utilisé pour mémoriser l'état du menu latéral (sidebar). Ce cookie ne contient aucune donnée personnelle.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">5. Vos droits</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour toute demande, contactez : <strong>contact@otech-solution.com</strong>.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Pour toute question relative à la confidentialité ou à la protection des données, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@otech-solution.com" className="text-primary">contact@otech-solution.com</a>
						</p>
					</section>

					<p className="text-xs text-muted-foreground mt-8">Cette politique de confidentialité est susceptible d'être modifiée à tout moment pour se conformer à la législation en vigueur ou à l'évolution du site.</p>
				</div>
			</main>
		</Layout>
	);
}
