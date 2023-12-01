"use client";

import { useEffect, useState } from "react"; // for the search bar we use it to know what the user has entered 
import "./SearchBarCollectivites.css"
import { NumericFormat } from 'react-number-format';
import Link from "next/link";
import { cx } from "@codegouvfr/react-dsfr/fr/cx";

type Props = {
    checkedLabel:string;
    uncheckedLabel:string;
  };
  
export const ToggleButton = ({ checkedLabel, uncheckedLabel}: Props) => {
    return (
      <div className={cx("fr-toggle","fr-pb-0")}>
        <input
          type="checkbox"
          className="fr-toggle__input"
          aria-describedby= "toggle-698-hint-text"
          id= "toggle-698"
        />
        <label
          className="fr-toggle__label"
          htmlFor="toggle-698"
          data-fr-checked-label= {checkedLabel}
          data-fr-unchecked-label= {uncheckedLabel}
        >
        </label>
      </div>
    );
  };