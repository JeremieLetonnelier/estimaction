"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { useRouter } from 'next/navigation' ;
import { useSearchParams } from 'next/navigation';
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { NumericFormat } from 'react-number-format';
import { cx } from "@codegouvfr/react-dsfr/tools/cx";


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
                        </div>
                    </div>
                </>
    )
}