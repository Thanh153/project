import Tooltip from '@material-ui/core/Tooltip';
import Avatar from "@material-ui/core/Avatar";
import { Link } from '@material-ui/core';
import { Context } from 'contexts/context'
import React, { useContext } from 'react'
import Paper from './paper/Paper';
import { makeStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import ClearIcon from '@material-ui/icons/Clear';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PdfContainer from 'components/SavePDF/PdfContainer'
import { savePDF } from "@progress/kendo-react-pdf";
import {useDispatch, useSelector} from "react-redux"
import {changeLanguage} from "../../translation/translationSlice"
import GTranslateIcon from '@material-ui/icons/GTranslate';

const useStyles = makeStyles((theme) => ({
  root: {
    display :'flex' ,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

function Right() {
  const currentLanguage = useSelector(state => state.Intl)
  const dispatch = useDispatch()
  const { setContent } = useContext(Context);
  const classes = useStyles();

  const handleDeleteDate = (event) => {
    event.preventDefault();
    localStorage.clear();
    setContent({
      header: {},
      experience: { descrition: ['', '', ''], descrition2: ['', ''] },
      education: {},
      skill: []
    });
  };
  const createPdf  = (html) => {
    savePDF(html, { 
      paperSize: 'A4',
      fileName: 'form.pdf',
    })
}
const handleChangeClick = () =>{
  dispatch(changeLanguage(currentLanguage.locale === "en" ? "vi" : "en"))
}
  // const handleSaveToPDF = (event) => {
  //   event.preventDefault();
  //   window.print();
  // }
  return (
    <div className="right">
      <div className={classes.root}>
        <Link href="#" onClick={handleDeleteDate}>
          <Tooltip title="Delete All Data" placement="left-start">
            <Avatar className={classes.pink}>
              <ClearIcon />
            </Avatar>
          </Tooltip>
        </Link>
        <Link href="/project" >
          <Tooltip title="view" placement="right-start">
            <Avatar className={classes.green}>
              <VisibilityIcon />
            </Avatar>
          </Tooltip>
        </Link>
        <Avatar className={classes.pink} onClick={()=>handleChangeClick()}>
            <GTranslateIcon  />
        </Avatar>
        <PdfContainer createPdf={createPdf}>
                <Paper />
        </PdfContainer>
      </div>
    </div>
  )
}

export default Right
