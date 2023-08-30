import React from 'react'
import PropTypes from "prop-types";
import {Box, Container, Typography} from '@mui/material'

const Copyright= ()=>{
    return (
        <Typography variant='body2' align='center' color="text.secondary">
            {"Copyright © "}
            BuddyForYou {new Date().getFullYear()}
        </Typography>
    )
}

const Footer = ({title,description}) => {
  return (
    <>
        <Box component="footer" sx={{bgcolor:'background.paper',py:6,}}>
            <Container maxWidth="lg" >
                <Typography varient="h6" align='center' gutterBottom>
                    {title}
                </Typography>
                <Typography varient="subtitle1" align='center' component='p' color="text.secondary">
                    {description}
                </Typography>
                <Copyright/>
            </Container>
        </Box>
    </>
  )
}

Footer.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

export default Footer
