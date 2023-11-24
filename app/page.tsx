"use client";
//import { ClientComponent } from "#/ui/ClientComponent";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import Image from "next/image";
import { Summary } from "@codegouvfr/react-dsfr/Summary";
import { fr } from "@codegouvfr/react-dsfr";
import { ClientComponent } from "../ui/ClientComponent";
import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { SearchBarCollectives } from "./components/SearchBarCollectivites";
import { useState } from "react";
import carte from "./assets/img/carte_nuisances.png";


export default function Page() {

    const pourquoi_estimaction = [
        <h2 key='title'>
            Pourquoi Estim&apos;action ?
        </h2>,
        <p key='paragraphe-1'>
            Le bruit, la mauvaise qualité de l&apos;air, les pollens ou encore les pesticides sont 
            autant de nuisnace qui ont un impact sur la santé des personnes exposées à celles-ci.
        </p>,
        <p key='paragraphe-2'>
            Les collectivités territoriales cherchent à améliorer la qualité de vie de leurs habitants en 
            réduisant ces nuisances. Pour pouvoir planifier l&apos;évolution de leur territoire en prenant en compte
            ces enjeux de santé environnement, il est important de connaître et comprendre la situation actuelle.
        </p>,
        <p key='paragraphe-3'>
            Estim&apos;action vise à proposer aux communes et aux EPCI un diagnostic santé environnement humanisé de leur 
            territoire, leur permettant ainsi de prioriser leurs politiques publiques. Humanisé car il propose
            à celles-ci des indicateurs qui quantifient la part de la population exposée à chaque type de 
            nuisance.
        </p>
    ]

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
            </div>

            <div 
                className={fr.cx("fr-container")}
                style = {{
                    paddingBottom: fr.spacing("30v"),
                    paddingLeft: fr.spacing('18v'),
                    paddingRight: fr.spacing('18v'),
                    paddingTop: fr.spacing("30v")
                }}
            >
                <div className={fr.cx("fr-grid-row")}>
                    <div className={fr.cx("fr-col-5")}>
                    <Image 
                        src={carte}
                        alt="Illustration"	
                    />
    
                    </div>
                    <div className={fr.cx("fr-col-2")}>
                    </div>
                    <div className={fr.cx("fr-col-5")}>
                        {pourquoi_estimaction}
                    </div>
                </div>

            </div> 

            <div 
                style={{
                    backgroundColor : fr.colors.decisions.background.alt.blueFrance.default,
                }}
            >
                <div 
                    className={fr.cx("fr-container")}
                    style = {{
                        paddingBottom: fr.spacing("30v"),
                        paddingLeft: fr.spacing('18v'),
                        paddingRight: fr.spacing('18v'),
                        paddingTop: fr.spacing("30v")
                    }}
                >
                    <div className={fr.cx("fr-grid-row")}>
                    <div className={fr.cx("fr-col-5")}>
                            <h1 className={fr.cx("fr-h1")}>Estim&apos;action est actuellement en version Bêta.</h1>
                            <p>Nous tâchons de développer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div 
            >
                <div 
                    className={fr.cx("fr-container")} 
                    style = {{
                        paddingBottom: fr.spacing("30v"),
                        paddingLeft: fr.spacing('18v'),
                        paddingRight: fr.spacing('18v'),
                        paddingTop: fr.spacing("30v")
                    }}
                    >
                    <div className={fr.cx("fr-grid-row")}>
                        <div>
                            <h1 className={fr.cx("fr-h1")}>Nos partenaires</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div 
                style={{
                    backgroundColor : fr.colors.decisions.background.alt.blueFrance.default,
                }}
            >   
                <div 
                    className={fr.cx("fr-container")}
                    style = {{
                        paddingBottom: fr.spacing("30v"),
                        paddingLeft: fr.spacing('18v'),
                        paddingRight: fr.spacing('18v'),
                        paddingTop: fr.spacing("30v")
                    }} 
                >
                    <div className={fr.cx("fr-grid-row")}>
                        <div className={fr.cx("fr-col-5")}>
                            <h1 className={fr.cx("fr-h1")}>Abonnez-vous à notre lettre d&apos;information</h1>
                            {/* <body class="fr-text--lead	">Vous souhaitez participer à la construction de l'outil ?</body> */}
                        </div>
                    </div>
                </div>
            </div>


            
            {/* <ClientComponent /> */}
        </>
    );

}
