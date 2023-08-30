import { Grid ,Card, Typography , CardContent, CardMedia} from '@mui/material';
import React from 'react';
import { BACKEND_URI } from '../utils/constants';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const FeaturedPet = ({ pet }) => {
    const navigate=useNavigate();
  return (
    <>
    <Grid item xs={12} md={6}>
        <Card sx={{display:"flex"}}
            onClick={()=>navigate(`/${pet?.category?._id}/${pet?._id}`)}
            style={{cursor:"pointer"}}
        >
            <CardContent sx={{flex:1}}>
                <Typography component="h2" variant="h5">
                    {pet?.name}
                </Typography>
                <Typography variant="sub-title1" color="text.secondary">
                    Breed-{pet?.breed}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Category-{pet?.category?.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Age-{pet?.age}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Color-{pet?.color}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                    {pet?.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    View details...
                </Typography>

            </CardContent>
            <CardMedia component="img" 
            sx={{
                width:160
            }}
            image={BACKEND_URI+"//"+ pet?.image}
            alt='image'
            />
        </Card>

    </Grid>
    </>
  )
}



export default FeaturedPet
