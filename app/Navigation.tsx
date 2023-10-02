"use client";

import { MainNavigation } from "@codegouvfr/react-dsfr/MainNavigation";
import { useSelectedLayoutSegment } from "next/navigation";

export function Navigation() {

	const segment = useSelectedLayoutSegment();

	return (
		<MainNavigation
			items={[
				{
					"text": "Accueil",
					"linkProps": {
						"href": "/"
					},
					"isActive": segment === null
				},
				{
					"text": "À propos",
					"linkProps": {
						"href": "/about"
					},
					"isActive": segment === "empty"
				},
				{
					"text": "Données et méthodes",
					"linkProps": {
						"href": "https://jereleto.gitlab.io/documentation-se/intro"
					},
					"isActive": segment === "empty"
				}
			]}
		/>
	);

}