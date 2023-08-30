import {Box, Grid , Typography , Paper} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const MainFeaturedPost = ({mainFeaturedPost}) => {
  return (
    <Paper
    sx={{
        position:'relative',
        backgroundColor:'grey.800',
        color:'#fff',
        mb:4,
        backgroundSize:'cover',
        backGroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundImage:`url(${mainFeaturedPost.image})`
    }}
    >
        <Box
        sx={{
            // position:'absolute',
            top:0,
            bottom:0,
            left:0,
            right:0,
            backgroundColor:"rgba(0,0,0,.3)"
        }}>
            <Grid container>
                <Grid item md={6}>
                    <Box
                    sx={{
                        position:'relative',
                        p:{xs:3,md:6},
                        pr:{md:0}
                    }}>
                        <Typography component="h1" fontSize="50px" varient="h3" color="inherit">
                            {mainFeaturedPost.title}
                        </Typography>
                        <Typography component="h5" fontSize="20px" color="inherit">
                            {mainFeaturedPost.description}
                        </Typography>
                    </Box>

                </Grid>

            </Grid>

        </Box>

    </Paper>
  )
}


export default MainFeaturedPost
