import { Button, makeStyles, Select, TextField } from '@material-ui/core'
import { Context } from '../../contexts/context';
import React, { useContext} from 'react'
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';
import { useTranslate } from 'react-redux-multilingual'

const style = {
    marginTop: 12,
    
   
}
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}))

function Header() {
    const t = useTranslate()
    const { content, updateHeaderData, removeData, setContent } = useContext(Context);
    const { register, handleSubmit, errors, onBlur } = useForm();
    const classes = useStyles() ;
    const onSubmit = (data) => {
        removeData();
        updateHeaderData(data);
    };
    const handleDeleteHeader = (event) => {
        event.preventDefault();
        setContent({ ...content, header: {} });
        window.location.reload();
    }
   
    return (
        <div className="">
            <h4>{t('header')}</h4>
            <form
                className='form'
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label= {t('name')}
                    name="name"
                    variant="outlined"
                    onBlur={onBlur}
                    defaultValue={content.header.name}
                    inputRef={register({ required: true, maxLength: 100 })}
                    style={style}
                    onChange={handleSubmit(onSubmit)}
                />
                <select class="browser-default"  
                        name='gender'
                        onChange={handleSubmit(onSubmit)}
                        ref={register}
                        >
                    <option value="" disabled selected>{t('option')}</option>
                    <option value={t('male')}>{t('male')}</option>
                    <option value={t('female')}>{t('female')}</option>
                    <option value={t('other')}>{t('other')}</option>
                </select>

                <TextField
                    id="outlined-basic"
                    label={t('email')}
                    name="email"
                    placeholder="bluebill1049@gamil.com"
                    variant="outlined"
                    defaultValue={content.header.email}
                    inputRef={register({ required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                    style={style}
                    onChange={handleSubmit(onSubmit)}
                />
                {errors.email && errors.email.type === "required" && (<p>This is required</p>)}
                {errors.email && errors.email.type === "pattern" && (<p>Email is not valid, please re-enter your email</p>)}
                <TextField
                    id="outlined-basic"
                    label={t('phone')}
                    name="phone"
                    variant="outlined"
                    defaultValue={content.header.phone}
                    inputRef={register({ required: true, pattern: /^\d{10,11}$/ })}
                    style={style}
                    onChange={handleSubmit(onSubmit)}
                />
                {errors.phone && errors.phone.type === "required" && (<p>This is required</p>)}
                {errors.phone && errors.phone.type === "pattern" && (<p>Phone number must be 10 - 11 digits long</p>)}
                <TextField
                    id="outlined-basic"
                    label={t('address')}
                    name="address"
                    variant="outlined"
                    defaultValue={content.header.address}
                    inputRef={register({ required: true })}
                    style={style}
                    onChange={handleSubmit(onSubmit)}
                />
                {errors.address && errors.address.type === "required" && (<p>This is a required</p>)}
                <TextField
                    id="outlined-basic"
                    label={t('city')}
                    variant="outlined"
                    name="city"
                    defaultValue={content.header.city}
                    inputRef={register({ required: true })}
                    style={style}
                    onChange={handleSubmit(onSubmit)}
                />
                {errors.city && errors.city.type === "required" && (<p>This is a required</p>)}

                <Button variant="contained" style={style} to="/project/basic/education" component={Link}>{t('next')}</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteHeader}
                    style={style} >{t('delete')}</Button>
            </form>
        </div>
    )

}

export default Header;
