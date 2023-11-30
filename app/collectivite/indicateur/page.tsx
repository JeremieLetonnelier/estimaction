"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { useRouter } from 'next/navigation' ;
import { useSearchParams } from 'next/navigation';
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { NumericFormat } from 'react-number-format';
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import Link from "next/link";
import { ToggleButton } from "../../components/ToggleButton";
import { flexbox } from "@mui/system";
import "./page.css"

export function findArrayElementByType(array:any, type:any) {
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
                        <div className={cx(fr.cx('fr-container'),fr.cx('fr-pt-10v'),fr.cx('fr-pb-10v'))}>
                            <div className={cx("fr-grid-row")}>
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
    
                            </div>
                        </div>
                    </div>

                </>
    )
}