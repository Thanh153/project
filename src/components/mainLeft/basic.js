import { Button, makeStyles } from '@material-ui/core'
import { Context } from 'contexts/context'
import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Education from './Education'
import Experience from './Experience'
import Header from './Header'
import Skill from './Skill'
import logo from 'asset/logoCV.jpg';
import { useTranslate } from 'react-redux-multilingual/lib/context';

const useStyles = makeStyles({
  rootAdd: {
    background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #F2F3F4",
    color: "white",
    height: 30,
    textAlign: "center",
    fontSize: 10,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },
  rootRemove: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    textAlign: "center",
    minWidth: 130,
    fontSize: 10,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },

  headerLink: {
    color: "#0298B8 ",
  },
});


function Basic() {
  const t = useTranslate()
  const { control, addFakeData, removeData } = useContext(Context)
  const classes = useStyles();
  function useFakeData(e) {
    e.preventDefault();
    addFakeData()
  }
  function clearFakeData(e) {
    e.preventDefault();
    removeData();
  }
  let expData;
  if (control) {
    expData = (
      <Button
        color="secondary"
        onClick={clearFakeData}
        className={classes.rootRemove}
      >
        {t('remove')}
      </Button>
    );
  } else {
    expData = (
      <Button
        color="primary"
        onClick={useFakeData}
        className={classes.rootAdd}

      >
        {t('example')}
      </Button>
    );
  }

  return (

    <div className="basic">
      <div className="left">
        <div className='headerTop'>
          <div styles={{ flexGrow: 2 }}>
            <Link to="/project" style={{ textAlign: "left" }}>
              <img src={logo} alt="logo" className="img2" />
            </Link>
          </div>
          <div styles={{ flexGrow: 1 }}>{expData}</div>
        </div>
        <Router>
        <div>
            <div className="topLeft">
            <Button
              className="headerLeft"
              component={Link}
              to="/project/basic/header"
            >
              {t('headerLink')}
            </Button>
            <Button
              className="headerLeft"
              component={Link}
              to="/project/basic/education"
            >
              {t('educationLink')}
            </Button>
            <Button
              className="headerLeft"
              component={Link}
              to="/project/basic/experience"
            >
              {t('experienceLink')}
            </Button>
            <Button
              className="headerLeft"
              component={Link}
              to="/project/basic/addittional"
            >
              {t('skillLink')}
            </Button>
          </div>
        </div>
          <hr className="hr" />
          <div className="formsSection">
            <Switch>
              <Route path='/project/basic/header'>
                <Header />
              </Route>
              <Route path='/project/basic/experience'>
                <Experience />
              </Route>
              <Route path='/project/basic/education'>
                <Education />
              </Route>
              <Route path='/project/basic/addittional'>
                <Skill />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default Basic
