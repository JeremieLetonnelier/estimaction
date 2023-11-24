import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import { StartDsfr } from "./StartDsfr";
import { defaultColorScheme } from "./defaultColorScheme";
import MuiDsfrThemeProvider from "@codegouvfr/react-dsfr/mui";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { fr } from "@codegouvfr/react-dsfr";
import { Navigation } from "./Navigation";
import Link from "next/link";
import {
	ConsentBannerAndConsentManagement,
	FooterConsentManagementItem,
	FooterPersonalDataPolicyItem
} from "../ui/consentManagement";

export default function RootLayout({ children }: { children: JSX.Element; }) {

	return (
		<html {...getHtmlAttributes({ defaultColorScheme })}>
			<head>
				<title>Estimaction</title>
				<StartDsfr />
				<DsfrHead
					Link={Link}
					preloadFonts={[
						//"Marianne-Light",
						//"Marianne-Light_Italic",
						"Marianne-Regular",
						//"Marianne-Regular_Italic",
						"Marianne-Medium",
						//"Marianne-Medium_Italic",
						"Marianne-Bold"
						//"Marianne-Bold_Italic",
						//"Spectral-Regular",
						//"Spectral-ExtraBold"
					]}
				/>
			</head>
			<body
				style={{
					"minHeight": "100vh",
					"display": "flex",
					"flexDirection": "column"
				}}
			>
				<DsfrProvider>
					<ConsentBannerAndConsentManagement />
					<NextAppDirEmotionCacheProvider options={{ "key": "css" }}>
						<MuiDsfrThemeProvider>
							<Header
								brandTop={<>REPUBLIQUE<br />FRANCAISE</>}
								serviceTitle="Estim'action"
								serviceTagline="Les marmottes vaincront"
								homeLinkProps={{
									"href": "/",
									"title": "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"
								}}
								quickAccessItems={[
									headerFooterDisplayItem,
									{
										"iconId": "ri-mail-line",
										"linkProps": {
											"href": "mailto:contact@code.gouv.fr",
										},
										"text": "Nous contacter"
									},
									
								]}
								navigation={<Navigation 
								/>}
							/>

							<div
								style={{
									"flex": 1,
									// "margin": "auto",
									// "maxWidth": 1000,
									// ...fr.spacing("padding", {
									// 	"topBottom": "10v"
									// })
								}}>
								{children}
							</div>
							
							<Footer
								accessibility="non compliant"
								contentDescription={<p>Cet outil est porté et géré par <a href="https://www.cerema.fr/fr" target="_blank" rel="noreferrer">le Cerema</a></p>}
								bottomItems={[
									headerFooterDisplayItem,
									<FooterConsentManagementItem key={0} />,
									<FooterPersonalDataPolicyItem key={1} />
								]}
							/>
						</MuiDsfrThemeProvider>
					</NextAppDirEmotionCacheProvider>
				</DsfrProvider>
			</body>
		</html>
	);
}
