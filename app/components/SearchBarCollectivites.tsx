"use client";

import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { useState } from "react"; // for the search bar we use it to know what the user has entered 
import "./SearchResultsCollectivites.css"
import { NumericFormat } from 'react-number-format';



export const SearchBarCollectives = () => {              
    const [search, onSearchChange] = useState(""); // search is the value, onSearchChange that can be use to change the value of the input
    const [resultsEPCI, onResultsEPCIChange] = useState("")
    const [resultsCommunes, onResultsCommunesChange] = useState("")
    const [results_all, onResultsChange] = useState<string[]>([])


    // const [inputElement, setInputElement] = useState<HTMLInputElement | null>(null); 


    const fetchData = (value:any) => {

        fetch(`https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(value)}&fields=nom,codesDepartements,population,code&boost=population&limit=5`)
        .then((response) => response.json())
        .then((json) => {
            const resultsCommunes = json.filter((commune:any) => {
                return (
                    value &&
                    commune && // check if EPCI (index) does exist
                    commune.nom && // check if EPCI (index) has a name
                    commune.nom.toLowerCase().includes(value.toLowerCase())
                )
            });
            onResultsCommunesChange(resultsCommunes);

        // La valeur du résultat de l'API est stocké dans results, qui a un état défini 
        // sur la page où est utilisée la barre de rercherche 
        });
        
        fetch(`https://geo.api.gouv.fr/epcis?nom=${encodeURIComponent(value)}&fields=nom,codesDepartements,population,code&boost=population&limit=5`)
            .then((response) => response.json())
            .then((json) => {
                const resultsEPCI = json.filter((epci:any) => {
                    return (
                        value && // pour empecher de renvoyer qq chose si rien n'a été tapé
                        epci && // check if EPCI (index) does exist
                        epci.nom && // check if EPCI (index) has a name
                        epci.nom.toLowerCase().includes(value.toLowerCase())
                    )
                });
                onResultsEPCIChange(resultsEPCI);
            });


        {const results_all = [resultsEPCI, resultsCommunes];
        onResultsChange(results_all);};
        

    };

    const resultsList = (results:any) => {
        if (results){
            return (
                <div className="results-list">
                    {results.map((result:any,id:any) => {
                        return (
                            <div className="result-collectivite" key={id}>
                              <div className="result-collectivite-nom" >{result.nom}</div>
                              <NumericFormat 
                                className="result-collectivite-info" 
                                value={result.population} 
                                displayType='text'
                                thousandSeparator=' ' 
                                prefix={result.type} 
                                suffix=' habitants'/> 
                            </div>
                        )
                    })}
                </div>
            )
        };
        if(results == null){
            return (<div></div>)
        };
    };

    const handleChange = (value:any) => {
        onSearchChange(value); // set the 
        fetchData(value); // make the request to the API
        console.log(results_all);
        // fetchDataEPCI(value);
    };


    return (
        <>
            <SearchBar
                renderInput={({ className, id, placeholder, type }) => 
                    <input
                        // ref={setInputElement}
                        className={className}
                        id={id}
                        placeholder={placeholder}
                        type={type}
                        value={search}
                        // Note: The default behavior for an input of type 'text' is to clear the input value when the escape key is pressed.
                        // However, due to a bug in @gouvfr/dsfr the escape key event is not propagated to the input element.
                        // As a result this onChange is not called when the escape key is pressed.
                        onChange={event => handleChange(event.currentTarget.value)}
                        // Same goes for the keydown event so this is useless but we hope the bug will be fixed soon.
                    />
                }
            />
            <p>{resultsList(resultsEPCI)}</p>
        </>
        
    );
        
}