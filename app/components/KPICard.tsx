"use client";

import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { useEffect, useState } from "react"; // for the search bar we use it to know what the user has entered 
import "./SearchBarCollectivites.css"
import { NumericFormat } from 'react-number-format';
import Link from "next/link";



export const KPICard = (codeCommune:any) => {              

    const fetchData = (codeCommune:any) => {

        // fetch(`https://api-estimaction-tja3bmgvva-od.a.run.app/communes_qualite_air/?admin_express_commune_id=${encodeURIComponent(codeCommune)}`)
        fetch(`https://api-estimaction-2-tja3bmgvva-od.a.run.app/communes_qualite_air/?admin_express_code_commune_insee=${codeCommune}`)
            .then((response) => response.json())
            .then((json) => {
                const resultsQualiteAir = json;

                console.log(resultsQualiteAir)
        });
        return resultsQualiteAir
        


    };

    const resultsQualiteAir:any = fetchData(codeCommune)

    
    const resultsCard = (resultKPI:any) => {
        if (resultKPI){
            return (
                <div className="results-list">
                    {resultKPI.population_exposee_no2_seuil_10ug}
                </div>
            )
        };
        if(resultsQualiteAir == null){
            return (<div></div>)
        };
    };


    return (
        <>
            <p>{resultsCard(resultsQualiteAir)}</p>
        </>
        
    );
        
}