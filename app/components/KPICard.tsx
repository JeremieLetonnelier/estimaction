"use client";

import { useEffect, useState } from "react"; // for the search bar we use it to know what the user has entered 
import "./SearchBarCollectivites.css"
import { NumericFormat } from 'react-number-format';
import Link from "next/link";
import { is } from "tsafe";
import { fr } from "@codegouvfr/react-dsfr";
import "./Cards.css"
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { Button } from "@codegouvfr/react-dsfr/Button";

export const KPICard = (codeCommune:any) => { 
    
    const [kpi, setKPI] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // fetch(`https://api-estimaction-2-tja3bmgvva-od.a.run.app/communes_qualite_air/?admin_express_code_commune_insee=${codeCommune.codeCommune}`)
        fetch(`http://127.0.0.1:8000/communes_bruit_trafic_routier/?admin_express_code_commune_insee=${codeCommune.codeCommune}`, {
            mode: 'no-cors'
          })
        .then((res) => res.json())
        .then((data) => {
            setKPI(data)
            setLoading(false)
            console.log(data)
          })
      }, [codeCommune])

    console.log(isLoading)
    

    
    // const resultsCard = (isLoading:boolean,kpi:any) => {
    //     console.log('The value of the kpi is : ' + kpi)
    //     if (isLoading) return <p>50</p>
    //     if (!kpi) return <p>Pas de données</p>
        
       
    //     if (kpi){
    //         return (
    //             <div className="results-list">
    //                 <p>50</p>
    //             </div>
    //         )
    //     };
    //     if(kpi == null){
    //         return (<div></div>)
    //     };
    // };


    return (
        <>
            <div className='kpi-card'>
                <div
                    style={{
                        paddingTop: fr.spacing('3w'),
                        paddingBottom: fr.spacing('3w'),
                        paddingLeft: fr.spacing('3w'),
                        paddingRight: fr.spacing('3w'),
                        height: '100%'
                    }}>
                    <Tag>
                        Air extérieur
                    </Tag>
                    <div className='kpi-card-value'>
                        13 500
                    </div>
                    <div className='kpi-card-text'>
                        personnes sur exposées à une mauvaise qualité de l&apos;air
                    </div>
                    <div className='kpi-update'>
                        <div className='flex-container'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#6A6AF4"/>
                        </svg>
                        Mise à jour : 01/06/2022
                        </div>
                        <div className='flex-container'>
                            <Button iconId="fr-icon-arrow-right-line" priority="tertiary no outline">
                            </Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
        
}