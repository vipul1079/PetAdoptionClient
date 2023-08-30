import React, { useEffect } from 'react'
import {createTheme, ThemeProvider} from "@mui/material/styles"
import  {CssBaseline,Container,Grid}  from '@mui/material'
import Header from './Components/Header'
import MainFeaturedPost from './Components/MainFeaturedPost'
import {mainFeaturedPost} from './data'
import FeaturedPet from './Components/FeaturedPet'
import Footer from './Components/Footer'
import { useDispatch , useSelector} from 'react-redux'
import {fetchAllCategories} from './redux/actions/categories'
import { BrowserRouter } from 'react-router-dom'

import Router from './router'
import './App.css'
import SnackbarComponent from './Components/SnackbarComponent'

const sections = [{title:"All Pets", url: "/"}];

const theme = createTheme({
  fontFamily:'"Trebuchet MS","Helvetica","Arial","sans-serif"',
  fontSize:14,
  fontWeightLight: 300,
  fontWeightRegular:400,
  fontWeightMedium:500,
})

const App = () => {

  const dispatch = useDispatch();
  const allCategories = useSelector((state)=>state.categories.allCategories);
  
  useEffect(()=>{
    fetchAllCategories({dispatch});
  },[dispatch]);
  return( 
  
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Container maxWidth="lg">
        <Header sections={[
          ...sections,
          ...allCategories.map((category)=>({
            title:category?.name,
            url:`/${category?._id}`,
          }))]}/>
        <SnackbarComponent/>
        <Router/>
      </Container>
      <Footer title="Pet Adoption Center" description = "A buddy for everybuddy" />
    </BrowserRouter>

  </ThemeProvider>)}

export default App




