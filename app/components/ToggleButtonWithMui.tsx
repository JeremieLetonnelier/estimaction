"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { fr } from '@codegouvfr/react-dsfr';

  
export const EstimactionSwitch = styled(Switch)(({ theme }) => ({
  padding: 40,
  width: 300,
  height: 26,
  
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      display: 'flex',
      textAlign: 'center',
      top: '50%',
      transform: 'translateY(-120%)',
      width: '50%',
    },
    '&:before': {
      borderRadius: 22 / 2,
      content: '"Toute la journée"',
      display: 'flex',
      backgroundColor: fr.colors.decisions.background.alt.grey.active,
      color: fr.colors.decisions.text.actionHigh.blueFrance.default,
      paddingLeft: 12
    },
    '&:after': {
      borderRadius: 22 / 2,
      content: '"Nuit"',
      display: 'flex',
      backgroundColor: fr.colors.decisions.background.alt.grey.active,
      color: fr.colors.decisions.text.actionHigh.blueFrance.default,
      right: -12
    },
  },
  '& .MuiSwitch-thumb': {
    borderRadius: 22 / 2,
    color:  fr.colors.decisions.background.actionLow.blueFrance.default,
    boxShadow: 'none',
    hover:'none',
    display: 'flex',
    boxSizing: 'border-box',
    width : 150,
    height:26
  },
  '& .MuiSwitch-switchBase': {
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(100%)',
    },

  },
}));