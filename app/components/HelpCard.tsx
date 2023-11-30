"use client";

import { useEffect, useState } from "react"; // for the search bar we use it to know what the user has entered 
import "./SearchBarCollectivites.css"
import { NumericFormat } from 'react-number-format';
import Link from "next/link";
import { is } from "tsafe";
import { fr } from "@codegouvfr/react-dsfr";
import "./Cards.css";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";


export const HelpCard = () => { 

    return (
        <>
            <div className='help-card'>
                <div className={cx(fr.cx('fr-pt-6v'),fr.cx('fr-pb-6v'),fr.cx('fr-pl-6v'),fr.cx('fr-pr-6v'))} style={{height:'100%'}}>
                    <Tag iconId="fr-icon-user-line" linkProps={{href: '#'}}>
                        Appel à contribution
                    </Tag>
                    <p className={cx('fr-text-md','fr-text--bold',fr.cx('fr-mb-0'),'fr-pt-4v',fr.cx('fr-pb-2v'))}>
                        Une idée d&apos;indicateur à ajouter ?
                    </p>
                    <p className={cx(fr.cx('fr-mb-0'),fr.cx('fr-pb-2v'))} style={{fontSize:'14px'}}> 
                        Contribuez en votant pour le prochain indicateur à ajouter ou en en proposant un nouveau.
                    </p>
                    <div className='kpi-update'>
                        <div className='flex-container-contribution'>
                            <Button 
                                priority="secondary"
                                iconId="fr-icon-external-link-line" 
                                iconPosition="right"
                                className={cx(fr.cx('fr-pt-1v'),fr.cx('fr-pb-1v'),fr.cx('fr-pr-2v'),fr.cx('fr-pl-3v'))}
                                style={{gap:'8px',fontSize:'14px'}}>
                            Contribuer
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
        
}