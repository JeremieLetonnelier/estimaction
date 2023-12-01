"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { useRouter } from 'next/navigation' ;
import { useSearchParams } from 'next/navigation';
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { NumericFormat } from 'react-number-format';
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import Link from "next/link";
import { ToggleButton } from "../../components/ToggleButton";
import { flexbox, width } from "@mui/system";
import "./page.css"
import { EstimactionSwitch } from "../../components/ToggleButtonWithMui"

function findArrayElementByType(array:any, type:any) {
    return array.find((element:any) => {
      return element.type === type;
    })
  }

export default function CollectiviteIndicateur() {
    const searchParams = useSearchParams()

    const indicateur = searchParams.get('type')
    const indicateurs = [
                            {
                                'type':'qa',
                                'typeText':`Qualité de l'air`
                            },
                            {
                                'type':'b',
                                'typeText':'Bruit'    
                            }
                        ]
    // console.log(searchParams.get('code')) // Logs "search"
    const indicateurTypeObject = findArrayElementByType(indicateurs,indicateur) 
    const indicateurTypeText = indicateurTypeObject.typeText

    const nbPersonsFrom65To69dB = 13667
    const nbPersonsFrom70To74dB = 10200
    const nbPersonsFrom75dB = 1234
    const nbPersonsTotal = nbPersonsFrom65To69dB + nbPersonsFrom70To74dB + nbPersonsFrom75dB
    const ratioPersonsFrom65To69dB = (nbPersonsFrom65To69dB/nbPersonsTotal)*100
    const ratioPersonsFrom70To74dB = (nbPersonsFrom70To74dB/nbPersonsTotal)*100
    const ratioPersonsFrom75dB = (nbPersonsFrom75dB/nbPersonsTotal)*100   

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
                                        currentPageLabel={indicateurTypeText} // Remplacer par un json
                                        homeLinkProps={{
                                            href: '.'
                                        }}
                                        segments={[
                                            {
                                                label: searchParams.get('nom'),
                                                linkProps: {
                                                  href: `/collectivite?nom=${searchParams.get('nom')}&code=${searchParams.get('code')}&population=${searchParams.get('population')}`
                                                }
                                              },
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
                                    <h1 className={fr.cx('fr-mb-1v')}>{indicateurTypeText}</h1>
                                </div>
                            </div>
                            <div className={fr.cx("fr-grid-row")}>
                                <div className={fr.cx("fr-col-12")}>
                                    <p className={cx("fr-text--lead","fr-mb-0")}>Données mises à jour le 30/11/2023 · Source : <Link href='https://www.cerema.fr'>Cerema</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{
                            // backgroundColor : fr.colors.decisions.background.alt.blueFrance.default,
                        }}
                    >
                        <div className={cx("fr-container","fr-pt-10v","fr-pb-10v")}>
                            <div className={cx("fr-grid-row","fr-grid-row--gutters")}>
                                <div className={fr.cx("fr-col-4")}>
                                    <div className="align-flex">
                                        <div className="flex-container">
                                            <p className={cx("fr-text--md","fr-mb-0")}>Seuil de référence</p>
                                        </div>
                                        <div className="flex-container">
                                            <ToggleButton checkedLabel="OMS" uncheckedLabel="Réglementaire"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={fr.cx("fr-col-4")}>
                                    <div className="align-flex">
                                        <div className="flex-container">
                                            <p className={cx("fr-text--md","fr-mb-0","fr-mt-4v")}>Moment de la journée</p>
                                        </div>
                                        <div className="flex-container">
                                            <EstimactionSwitch></EstimactionSwitch>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("fr-grid-row","fr-grid-row--gutters")}>
                                <div className={fr.cx("fr-col-4")}>
                                    <p className={cx("fr-text--xs","fr-mb-0")}>Seuil règlementaire jour : 65 dB · Seuil règlementaire nuit : 60 dB </p>
                                    <div className="align-flex-seuils--no-gap">
                                        <Link href="https://jereleto.gitlab.io/documentation-se/indicateurs/bruit/methodologie" className={cx("fr-text--xs","fr-mb-0")}>
                                            <p className={cx("fr-text--xs","fr-mb-0")}>En savoir plus sur les seuils</p>
                                        </Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" className={cx("fr-pb-0-5v","fr-pl-0-5v")}>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.22266 3V4H2.72266V9.5H8.22266V7H9.22266V10C9.22266 10.2761 8.9988 10.5 8.72266 10.5H2.22266C1.94651 10.5 1.72266 10.2761 1.72266 10V3.5C1.72266 3.22386 1.94651 3 2.22266 3H5.22266ZM10.7227 1.5V6L8.82566 4.1035L5.82616 7.1035L5.11916 6.3965L8.11866 3.3965L6.22266 1.5H10.7227Z" fill="#666666"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx("fr-container","fr-pt-10v","fr-pb-32v")}>
                            <div className={cx("fr-grid-row","fr-grid-row--gutters")}>
                                <div className={fr.cx("fr-col-12")}>
                                    <div className="flex-box-analyse">
                                        <div className="flex-box-analyse-titles">
                                            <h4 className={cx("fr-mb-0")}>Population sur exposée à une mauvaise qualité de l&apos;air</h4>
                                            <div className="flex-box-analyse-subtitle">
                                                <div className="flex-box-analyse-subtitle-head">
                                                    <h2 className={cx("fr-mb-0","fr-display-lg")}>25101</h2> 
                                                    <h6 className={cx("fr-mb-0","fr-display-xxs","display-inline")}> personnes</h6>
                                                </div>
                                                <p className={cx("fr-mb-0","fr-text--md")}>soit 5.3 % de la population toulousaine composée de 471 941 habitants.</p>
                                            </div>
                                        </div>
                                        <div className="flex-box-analyse-graphe">
                                            <p className={cx("fr-mb-0","fr-text--lg")}>Répartition de la population exposée par niveaux de bruit</p>
                                            <div className="flex-box-analyse-graphe--bar-container">
                                                <div className={cx("flex-box-analyse-graphe--bar","fr-text--xs")} style={{
                                                        backgroundColor: '#60E0EB',
                                                        height:'20px',
                                                        width:`${ratioPersonsFrom65To69dB}%`
                                                    }}>
                                                    <NumericFormat 
                                                        value={nbPersonsFrom65To69dB} 
                                                        displayType='text'
                                                        thousandSeparator=' ' 
                                                        /> 
                                                </div>
                                                <div className={cx("flex-box-analyse-graphe--bar","fr-text--xs")} style={{
                                                        backgroundColor: '#B6CFFB',
                                                        height:'20px',
                                                        width:`${ratioPersonsFrom70To74dB}%`
                                                    }}>
                                                    <NumericFormat 
                                                    value={nbPersonsFrom70To74dB} 
                                                    displayType='text'
                                                    thousandSeparator=' ' 
                                                        /> 
                                                </div>
                                                <div className={cx("flex-box-analyse-graphe--bar","fr-text--xs")} style={{
                                                        backgroundColor: '#FCC0B4',
                                                        height:'20px',
                                                        width:`${ratioPersonsFrom75dB}%`
                                                    }}>
                                                    <NumericFormat 
                                                    value={nbPersonsFrom75dB} 
                                                    displayType='text'
                                                    thousandSeparator=' ' 
                                                        /> 
                                                </div>
                                            </div>
                                            <div className="flex-box-analyse-graphe--legend-container">
                                                <div className="flex-box-analyse-graphe--legend-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="8" fill="#60E0EB"/>
                                                    </svg>
                                                    <p className={cx("fr-mb-0","fr-text--md")}>
                                                        65 - 69 dB : <NumericFormat value={nbPersonsFrom65To69dB} displayType='text' thousandSeparator=' ' /> personnes
                                                    </p>
                                                </div>
                                                <div className="flex-box-analyse-graphe--legend-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="8" fill="#B6CFFB"/>
                                                    </svg>
                                                    <p className={cx("fr-mb-0","fr-text--md")}>
                                                        70 - 74 dB : <NumericFormat value={nbPersonsFrom70To74dB} displayType='text' thousandSeparator=' ' /> personnes
                                                    </p>
                                                </div>
                                                <div className="flex-box-analyse-graphe--legend-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <circle cx="8" cy="8" r="8" fill="#FCC0B4"/>
                                                    </svg>
                                                    <p className={cx("fr-mb-0","fr-text--md")}>
                                                        75 dB et plus : <NumericFormat value={nbPersonsFrom75dB} displayType='text' thousandSeparator=' ' /> personnes
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
    )
}