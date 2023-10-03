"use client";

import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { useEffect, useState } from "react"; // for the search bar we use it to know what the user has entered 
import "./SearchBarCollectivites.css"
import { NumericFormat } from 'react-number-format';



export const SearchBarCollectives = () => {              
    // const initialState = []
    const [search, onSearchChange] = useState(""); // search is the value, onSearchChange that can be use to change the value of the input
    const [results, onResultsChange] = useState([]);
    const [resultsCommunes, onResultsCommunesChange] = useState([])
    const [resultsEPCI, onResultsEPCIChange] = useState([])
   

    // const [inputElement, setInputElement] = useState<HTMLInputElement | null>(null); 


    const fetchData = (value:any) => {

        

        fetch(`https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(value)}&fields=nom,codesDepartements,population,code&boost=population&limit=2`)
            .then((response) => response.json())
            .then((json) => {
                const resultsCommunes = json.filter((commune:any) => {
                    return (
                        value &&
                        commune && // check if EPCI (index) does existSai
                        commune.nom && // check if EPCI (index) has a name
                        commune.nom.toLowerCase().includes(value.toLowerCase())
                    )
                });
                resultsCommunes.forEach((object:any) => {
                    object.type = 'Commune'
                })
                onResultsCommunesChange(resultsCommunes);

        });
        
        fetch(`https://geo.api.gouv.fr/epcis?nom=${encodeURIComponent(value)}&fields=nom,codesDepartements,population,code&boost=population&limit=2`)
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
                resultsEPCI.forEach((object:any) => {
                    object.type = 'Intercommunalité'
                })
                onResultsEPCIChange(resultsEPCI);
            });

    };

    const resultsList = (resultsCommunes:any,resultsEPCI:any) => {
        if (resultsCommunes && resultsEPCI){
            const results = [...resultsCommunes, ...resultsEPCI]
            results.sort((a,b) => b._score - a._score)
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
                                prefix={result.type + ' · '}
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
        // onResultsChange([...resultsCommunes,...resultsEPCI])
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
            <p>{resultsList(resultsCommunes,resultsEPCI)}</p>
        </>
        
    );
        
}