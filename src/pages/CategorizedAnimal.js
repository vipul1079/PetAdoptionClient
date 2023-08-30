import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux'
import { fetchAllPets, fetchPetsByCategory } from '../redux/actions/pets';
import { Grid } from '@mui/material';
import FeaturedPet from '../Components/FeaturedPet';

const CategorizedAnimal = () => {
    const {category}=useParams();
    const dispatch=useDispatch();
    const allPets = useSelector((state)=> state.pets.allPets);

    // useEffect(()=>{
    //     fetchPetsByCategory({dispatch,payload:{category}})
    // },[dispatch,category])

    useEffect(()=>{
        fetchAllPets({dispatch});
      },[dispatch]);

    

  return (
    <Grid container spacing={4}>
        {
            allPets?.filter((pet)=>pet.category._id===category).map((pet,index)=>(
                <FeaturedPet key={index} pet={pet} />
            ))
        }

    </Grid>
  )
}

export default CategorizedAnimal
