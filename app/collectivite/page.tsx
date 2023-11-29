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
import { HelpCard } from '../components/HelpCard';
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { NumericFormat } from 'react-number-format';
import "./page.css"
import { cx } from "@codegouvfr/react-dsfr/fr/cx";


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
                        <div className={cx(fr.cx('fr-container'),fr.cx('fr-pt-10v'),fr.cx('fr-pb-10v'))}>
                            <div className={fr.cx("fr-grid-row")}>
                                <div className={fr.cx("fr-col-3")}>
                                    <Breadcrumb  
                                        currentPageLabel={searchParams.get('nom')}
                                        homeLinkProps={{
                                            href: '.'
                                        }}
                                        segments={[
                                        ]}
                                        classes={{
                                            root: cx(fr.cx('fr-mb-0'),fr.cx('fr-mt-0')), 
                                            button: fr.cx('fr-mb-2v'), 
                                        }}
                                    />
                                </div>
                            </div>
                        
                    
                            <div className={fr.cx("fr-grid-row")}>
                                <div className={fr.cx("fr-col-12")}>
                                    <h1 className={fr.cx('fr-mb-0')}>{searchParams.get('nom')}</h1>
                                </div>
                            </div>
                        
                        
                            <div className={fr.cx("fr-grid-row")}>
                                <div className={fr.cx("fr-col-12")}>
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
                    </div>

                    <div>
                        <div 
                            className={fr.cx("fr-container")}
                            style = {{
                                paddingTop: fr.spacing("10v")
                            }}
                        >
                            <div className={fr.cx("fr-grid-row")}>
                                <div className={fr.cx("fr-col-12")}>
                                    <h2>Population exposée aux nuisances</h2>
                                </div>
                            </div>
                        </div>

                        <div 
                            className={fr.cx("fr-container")}
                            style = {{
                                paddingBottom: fr.spacing("6v"),
                            }}
                        >
                            <div className={cx(fr.cx("fr-grid-row"),fr.cx('fr-grid-row--gutters'))}>
                                <div className={fr.cx("fr-col-4")}>
                                    <KPICard/>
                                </div>
                                <div className={fr.cx("fr-col-4")}>
                                    <KPICard/>
                                </div>
                                <div className={fr.cx("fr-col-4")}>
                                    <KPICard/>
                                </div>
                                <div className={fr.cx("fr-col-4")}>
                                    <KPICard/>
                                </div>

                                <div className={fr.cx("fr-col-4")}>
                                    <HelpCard/>
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