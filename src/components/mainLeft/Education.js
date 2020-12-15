import { Button, makeStyles, TextField } from '@material-ui/core';
import { Context } from 'contexts/context';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Route, Switch , Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';
const style = {
    marginTop: 12,
    marginLeft: 8,
    marginRight: 8
}
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
function Education() {
    const {content, updateEducationData, removeData ,setContent} = useContext(Context);
    const classes = useStyles();
    const [Text, setText] = useState('add')
    const {register, handleSubmit,onBlur} = useForm();
    const onSubmit = (data) => {
        updateEducationData(data);
        setText('update')   
        removeData();
    }
    const handleDeleteEducation = (event) =>{
        event.preventDefault() ;
        setContent({...content, education: {}});
        window.location.reload();
    }
    return (
        <div className="education">
            <h4>Education</h4>
            <form 
                 className='form' 
                noValidate 
                autoComplete="off"
                onSubmit = {handleSubmit(onSubmit)}
            >
                <TextField 
                id="outlined-basic" 
                label="Institution" 
                name="institition"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.institition}
                />
                 <TextField 
                id="outlined-basic" 
                label="City/State/Country" 
                name="city"
                variant="outlined" 
                onBlur={onBlur} 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.city}
                />
                 <TextField 
                id="outlined-basic" 
                label="Major" 
                name="major"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.major}
                />
                 <TextField 
                id="outlined-basic" 
                label="Gradution Year" 
                name="gradution"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.gradution}
                />
                 <TextField 
                id="outlined-basic" 
                label="Additional Info" 
                name="add"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.add}
                />
                 <Button  
                type="submit" 
                variant="contained" 
                color="secondary" 
                disableElevation
                style={style}>
                   {Text}

                </Button>
                <Button variant="contained" style={style} to= "/project/basic/experience" component={Link}>Next</Button>  
                <Button  
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}  
                onClick={handleDeleteEducation}  
                style={style} >Delete</Button>

            </form>
        </div>
    )
}

export default Education
