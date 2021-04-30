import {useState} from 'react'
import { makeStyles } from "@material-ui/core";


export const useForm = ( initialState = {}, validateOnChange = false, validate) => {
    
    const[values,setValues] =useState(initialState);
    const [errors, setErrors] = useState({});

    const resetForm =()=>{
        setValues(initialState);
        setErrors({});
    }

    const loadForm =(data)=>{
        setValues(data);
        setErrors({});
    }

    const handleInputChange=(e)=>{

        const { name, value } = e.target;
        setValues({
            ...values,
            [name]:value
            });
            if (validateOnChange)
            validate({ [name]: value });

    }
    
    return {values,setValues,errors,setErrors,handleInputChange,resetForm,loadForm}
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '96%',
            margin: theme.spacing(1),
        }
    }
}))


export function Form(props) {
    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}