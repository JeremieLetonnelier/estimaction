"use client";
//import { ClientComponent } from "#/ui/ClientComponent";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import Image from "next/image";
import { Summary } from "@codegouvfr/react-dsfr/Summary";
import { fr } from "@codegouvfr/react-dsfr";
import { useRouter } from 'next/navigation' ;
import { useSearchParams } from 'next/navigation';
import { KPICard } from '../components/KPICard';
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { NumericFormat } from 'react-number-format';


export default function Collectivite() {
    const searchParams = useSearchParams()
    // console.log(searchParams.get('code')) // Logs "search"

    return(
                <>


                    <div
                        style={{
                            backgroundColor : fr.colors.decisions.background.alt.blueFrance.default,
                        }}
                    >
                        <div 
                            className={fr.cx("fr-container")}
                            style = {{
                                paddingBottom: fr.spacing("2v"),
                                paddingTop: fr.spacing("10v")
                            }}
                        >
                                <div className={fr.cx("fr-grid-row")}>
                                    <div className={fr.cx("fr-col-3")}>
                                        <Breadcrumb  
                                            currentPageLabel={searchParams.get('nom')}
                                            homeLinkProps={{
                                                href: '.'
                                            }}
                                            segments={[
                                            ]}
                                        />
                                    </div>
                                    <div className={fr.cx("fr-col-9")}>
                                    </div>
                                
                            </div>
                        </div>
                        <div 
                            className={fr.cx("fr-container")}
                            style = {{
                            }}
                        >
                            <div className={fr.cx("fr-grid-row")}>
                                <div className={fr.cx("fr-col-12")}>
                                    <h1>{searchParams.get('nom')}</h1>
                                </div>
                            </div>
                        </div>
                        <div 
                            className={fr.cx("fr-container")}
                            style = {{
                                paddingBottom: fr.spacing("10v")
                            }}
                        >
                            <div className={fr.cx("fr-grid-row")}>
                                <div className={fr.cx("fr-col-12")}>
                                    <NumericFormat 
                                        className="result-collectivite-info" 
                                        value={searchParams.get('population')} 
                                        displayType='text'
                                        thousandSeparator=' ' 
                                        suffix=' habitants'/>                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div 
                            className={fr.cx("fr-container")}
                            style = {{
                                paddingBottom: fr.spacing("6v"),
                                paddingTop: fr.spacing("10v")
                            }}
                        >
                            <div className={fr.cx("fr-grid-row")}>
                                <div className={fr.cx("fr-col-12")}>
                                    <h2>Population exposée aux nuisances</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
  }
  

// export default function Collectivite() {

//     const router = useRouter();
//     const result = router.query;
//     console.log(result)

//     return(
//         <>
//             <div
//                 style={{
//                     backgroundColor : fr.colors.decisions.background.alt.blueFrance.default,
                    
//                 }}
//             >
//                 <div
//                     style={{
//                         paddingTop: fr.spacing("32v"),
//                         paddingBottom: fr.spacing("6v"),
//                         paddingLeft: fr.spacing('30v'),
//                         width:'690px'
//                     }}
//                 >
//                     <h1> {result} au diagostic santé evironnement de votre collectivité</h1>
//                 </div>

//             </div>
//         </>
//     )

// }