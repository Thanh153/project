import { Button, makeStyles, TextField } from '@material-ui/core';
import { Context } from 'contexts/context';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Route, Switch ,Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css'
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
function Experience() {
    const {content, updateExperienceData, removeData, setContent} = useContext(Context);
    const classes = useStyles();
    const [Text, setText] = useState('Add');
    const {register , handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        updateExperienceData(data);
        removeData();
        setText('Update')
    }
    const handleDeleteExperience = (event) => {
        event.preventDefault();
        setContent({...content, experience: {}})
        window.location.reload();
    }
    return (
        <div className="experience">
            <h4>Professional Experience</h4>
            <form
                className='form'
                noValidate
                autoComplete="off"
                onSubmit = {handleSubmit(onSubmit)}
            >
                <h5>Company 1</h5>
                <TextField
                    id="outlined-basic"
                    label="Company"
                    name="company"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.company}

                />
                <TextField
                    id="outlined-basic"
                    label="City/State/Country"
                    name="city"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.city}
                />
                <TextField
                    id="outlined-basic"
                    label="Position"
                    name="position"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.position}
                />
                <TextField
                    id="outlined-basic"
                    label="Start MM/YYYY"
                    name="start"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.start}
                />
                <TextField
                    id="outlined-basic"
                    label="End MM/YYYY"
                    name="end"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.end}
                />
                <TextField
                    id="outlined-basic"
                    label="Descrition"
                    name="descrition[0]"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.descrition[0]}
                />
                <TextField
                    id="outlined-basic"
                    label="Descrition"
                    name="descrition[1]"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.descrition[1]}
                />
                <hr />

                <h5>Company 2</h5>

                <TextField
                    id="outlined-basic"
                    label="Company"
                    name="company2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.company2}
                />
                <TextField
                    id="outlined-basic"
                    label="City/State/Country"
                    name="city2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.city2}
                />
                <TextField
                    id="outlined-basic"
                    label="Position"
                    name="position2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.position2}
                />
                <TextField
                    id="outlined-basic"
                    label="Start MM/YYYY"
                    name="start2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.start2}
                />
                <TextField
                    id="outlined-basic"
                    label="End MM/YYYY"
                    name="end2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.end2}
                />
                <TextField
                    id="outlined-basic"
                    label="Descrition"
                    name="descrition2[0]"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.descrition2[0]}
                />
                <TextField
                    id="outlined-basic"
                    label="Descrition"
                    name="descrition2[1]"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.descrition2[1]}
                />
                <Button  
                type="submit" 
                variant="contained" 
                color="secondary" 
                disableElevation
                style={style}>
                 {Text}

                </Button>
                <Button variant="contained" style={style} to= "/project/basic/addittional" component={Link}>Next</Button>
                <Button  
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}   
                onClick={handleDeleteExperience}  
                style={style} >Delete</Button>
            </form>
        </div>
    )
}

export default Experience;
