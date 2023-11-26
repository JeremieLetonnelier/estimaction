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
    

    
    const resultsCard = (isLoading:boolean,kpi:any) => {
        console.log('The value of the kpi is : ' + kpi)
        if (isLoading) return <p>50</p>
        if (!kpi) return <p>Pas de données</p>
        
       
        if (kpi){
            return (
                <div className="results-list">
                    <p>50</p>
                </div>
            )
        };
        if(kpi == null){
            return (<div></div>)
        };
    };


    return (
        <>
            <div>{resultsCard(isLoading,kpi)}</div>
        </>
        
    );
        
}