"use client";
//import { ClientComponent } from "#/ui/ClientComponent";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { Summary } from "@codegouvfr/react-dsfr/Summary";
import { fr } from "@codegouvfr/react-dsfr";
import { ClientComponent } from "../ui/ClientComponent";
import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { SearchBarCollectives } from "./components/SearchBarCollectivites";
import { useState } from "react";

export default function Page() {

    return (
        <>
            

            <div
                style={{
                    backgroundColor : fr.colors.decisions.background.alt.blueFrance.default,
                    
                }}
            >
                <div
                    style={{
                        paddingTop: fr.spacing("32v"),
                        paddingBottom: fr.spacing("6v"),
                        paddingLeft: fr.spacing('30v'),
                        width:'690px'
                    }}
                >
                    <h1>Accédez au diagostic santé evironnement de votre collectivité</h1>
                </div>
                
                <div
                    style={{
                        paddingBottom: fr.spacing("4v"),
                        paddingLeft: fr.spacing('30v'),
                        width:'690px'
                    }}
                >
                    <p>
                    Sélectionnez une commune ou une intercommunalité et visualisez la population
                    exposée aux différentes nuisances présentes sur son territoire.
                    </p>
                </div>
            
                <div
                    style={{
                        paddingBottom: fr.spacing("4v"),
                        paddingLeft: fr.spacing('30v'),
                        width:'690px'
                    }}
                >
                
                <SearchBarCollectives/>
                </div>

                <div>
                    
                </div>
            </div>
            
            <ClientComponent />
        </>
    );

}
