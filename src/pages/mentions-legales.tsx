import Layout from "@/components/layout/Layout";

export default function MentionsLegales() {
	const lastUpdated = new Date().toLocaleDateString("fr-FR");

	return (
		<Layout>
			<main className="section-padding container-max">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-4xl font-bold mb-6">Mentions légales</h1>

					<p className="text-sm text-muted-foreground mb-4">Dernière mise à jour : {lastUpdated}</p>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Éditeur du site</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Nom de la société : <strong>O TECH Solution</strong><br />
							Forme juridique : <strong>EI (Entreprise Individuelle)</strong><br />
							Siège social : <strong>1 Rue Raymond Poincaré, 74300 Cluses</strong><br />
							Téléphone : <strong>07 67 71 33 17</strong><br />
							Email : <strong>contact@otech-solution.com</strong><br />
							Numéro SIRET : <strong>503 637 001 00044</strong><br />
							TVA intracommunautaire : <strong>Pas de n° TVA valide connu</strong>
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Directeur de la publication</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Le directeur de la publication du site est : <strong>Hamza Aydogdu</strong> (représentant légal).
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Hébergement</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Le site est hébergé par : <br />
							<strong>[Nom de l'hébergeur]</strong><br />
							Adresse : <strong>[Adresse de l'hébergeur]</strong><br />
							Téléphone : <strong>[Téléphone hébergeur]</strong>
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Propriété intellectuelle</h2>
						<p className="text-sm text-foreground leading-relaxed">
							L'ensemble des éléments présents sur ce site (textes, visuels, logos, icônes, code source, etc.) sont la propriété
							exclusive de O TECH Solution ou de leurs auteurs respectifs et sont protégés par le Code de la propriété intellectuelle.
							Toute reproduction, représentation, adaptation, modification, distribution ou publication de ces éléments,
							par quelque procédé que ce soit, sans l'autorisation écrite préalable de O TECH Solution est strictement interdite.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Données personnelles (RGPD)</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Les données personnelles collectées via les formulaires du site (nom, email, téléphone, message, etc.) sont utilisées uniquement pour répondre à vos demandes.<br />
							Ces informations ne sont pas stockées sur le site ni dans une base de données : elles servent uniquement à l'envoi d'un email au responsable du site.<br />
							Aucune donnée n'est conservée sur le serveur après l'envoi du message.<br />
							Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, d'opposition et de portabilité de vos données.<br />
							Pour exercer ces droits, contactez-nous à : <strong>contact@otech-solution.com</strong>.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Cookies</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Ce site n'utilise aucun cookie de suivi, d'analyse ou publicitaire.<br />
							Uniquement un cookie technique est utilisé pour mémoriser l'état d'ouverture ou de fermeture du menu latéral (sidebar).<br />
							Ce cookie ne contient aucune donnée personnelle et n'est pas utilisé à des fins de tracking ou de marketing.<br />
							Vous pouvez supprimer ce cookie via les paramètres de votre navigateur si vous le souhaitez.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Responsabilité</h2>
						<p className="text-sm text-foreground leading-relaxed">
							O TECH Solution met en œuvre tous les moyens raisonnables pour assurer l'exactitude et la mise à jour des informations présentes
							sur ce site, mais ne peut garantir l'exactitude, la complétude, ou l'actualité des informations. En conséquence, l'utilisateur
							reconnaît utiliser ces informations sous sa responsabilité exclusive.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Liens externes</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Le site peut contenir des liens vers des sites tiers. O TECH Solution n'exerce aucun contrôle sur ces sites externes
							et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
						</p>
					</section>

					<section className="mb-6">
						<h2 className="text-2xl font-semibold mb-2">Contact</h2>
						<p className="text-sm text-foreground leading-relaxed">
							Pour toute question relative aux mentions légales ou à la protection des données :
							<br />
							Email : <a href="mailto:contact@otech-solution.com" className="text-primary">contact@otech-solution.com</a>
						</p>
					</section>
				</div>
			</main>
		</Layout>
	);
}
