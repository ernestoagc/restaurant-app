import React from 'react'
import { TextField } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    }
  }));

export default function Input(props) {
    const classes = useStyles();

    const { name, label, value,error=null, onChange, ...other } = props;
    return (
        <TextField 
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
