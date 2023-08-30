import React, { useEffect } from 'react'
import MainFeaturedPost from '../Components/MainFeaturedPost'
import { Grid } from '@mui/material'
import { mainFeaturedPost } from '../data'
import FeaturedPet from '../Components/FeaturedPet'
import { fetchAllPets } from '../redux/actions/pets'
import { useDispatch , useSelector} from 'react-redux'

const Homepage = () => {

    const dispatch = useDispatch();
    const pets = useSelector((state)=>state.pets.allPets);
    useEffect(()=>{
        fetchAllPets({dispatch});
      },[dispatch]);
  return (
    <>
        <MainFeaturedPost mainFeaturedPost={mainFeaturedPost}/>
        <Grid container spacing={4}>
          {pets.map((pet)=>(
            <FeaturedPet key={pet._id} pet={pet} />
          ))}
          
        </Grid>
    </>
  )
}

export default Homepage
