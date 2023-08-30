import { Toolbar,Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'

const Header = (props) => {
  const { sections, title } = props;
  const location = useLocation();
  return (
    <React.Fragment>
         <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
        >
          <Link to='/'>
            <img src="/images/logo.png" width="200"/>
          </Link>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections?.map((section) => (
          <Link
            to={section.url}
            key={section.url}
            className={location.pathname === section.url ? 'activeNavLink' : ''}
          >
            {section.title}
          </Link>
        ))}
        <Link  className={(location.pathname==='/AboutUs')?"activeNavLink":""} to="/AboutUs">AboutUs</Link>
        <Link  className={(location.pathname==='/Facts')?"activeNavLink":""} to="/Facts">Facts</Link>
        
      </Toolbar>

        
    </React.Fragment>
  )
}


export default Header
