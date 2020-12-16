import { Button, makeStyles, TextField } from '@material-ui/core'
import { Context } from 'contexts/context';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import DeleteIcon from '@material-ui/icons/Delete';
import { useTranslate } from 'react-redux-multilingual'
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
  
function Skill() {
    const t = useTranslate()
    const {content , updateSkillData, removeData, setContent} = useContext(Context);
    const classes = useStyles();
    const [Text, setText] = useState("Add")
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        removeData();
        updateSkillData(data)
        setText('Update');
    }
    const handleDeleteSkill = (event) => {
        event.preventDefault();
        setContent({...content, skill: Object.values ({})})
        window.location.reload();
    }
    return (
        <div className="skill">
            <h4>{t('skill')}</h4>
            <form 
                className='form'
                noValidate 
                autoComplete="off"
                onSubmit = {handleSubmit(onSubmit)}
            >
                <TextField 
                id="outlined-basic" 
                label="" 
                name="skill1"
                defaultValue = {content.skill[0]}
                variant="outlined" 
                inputRef ={register}
                style={style}
               
                />
                 <TextField 
                id="outlined-basic" 
                label="" 
                name="skill2"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.skill[1]}
                />
                 <TextField 
                id="outlined-basic" 
                label="" 
                name="skill3"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.skill[2]}
                />
                 <TextField 
                id="outlined-basic" 
                label="" 
                name="skill4"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.skill[3]}
                />
                <Button  
                type="submit" 
                variant="contained" 
                color="secondary" 
                disableElevation
                style={style}>
                    {Text}

                </Button>
                <Button  variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}   
                onClick={handleDeleteSkill}  
                style={style} >Delete</Button>
            </form>
        </div>
    )
}

export default Skill
