"use client";

import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { useEffect, useState } from "react"; // for the search bar we use it to know what the user has entered 
import "./SearchBarCollectivites.css"
import { NumericFormat } from 'react-number-format';
import Link from "next/link";
import { is } from "tsafe";



export const KPICard = (codeCommune:any) => { 
    
    const [kpi, setKPI] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api-estimaction-2-tja3bmgvva-od.a.run.app/communes_qualite_air/?admin_express_code_commune_insee=${codeCommune.codeCommune}`)
        .then((res) => res.json())
        .then((data) => {
            setKPI(data)
            setLoading(false)
          })
      }, [])
     

    
    const resultsCard = (isLoading:boolean,kpi:any) => {

        if (isLoading) return <p>Chargement...</p>
        if (!kpi) return <p>Pas de données</p>

        if (kpi){
            return (
                <div className="results-list">
                    {kpi.population_exposee_no2_seuil_10ug}
                </div>
            )
        };
        if(kpi == null){
            return (<div></div>)
        };
    };


    return (
        <>
            {resultsCard(isLoading,kpi)}
        </>
        
    );
        
}