import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Facts.css'
import {
  TextField,
  Autocomplete,
  Card,
  CardMedia,
  CardContent,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function Facts() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breedInfo, setBreedInfo] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [categ,setCateg]=useState("dog");
  const [image,setImage]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.the${categ}api.com/v1/breeds`, {
        headers: {
          "x-api-key":(categ==='dog')?
            "live_rLRkWXexQFRFmrzbfFIeHavmQfeva0hKZus4nt09Yte9ACLe47yMJugxoSX5mVfP":"live_lZjl6Ey3KDBGlqob5xfirjmjRGaby3dWiqcoxO8RhQqkJ281BNIdBfWetE0eBQ2Q",
        },
      });
      setBreeds(result.data);
    };
    fetchData();
  }, [categ]);

  


  const handleBreedSelect = async (value) => {
    setSelectedBreed(value);
    
    const result = await axios.get(
      `https://api.the${categ}api.com/v1/breeds/search?q=${value}`,
      {
        headers: {
            "x-api-key":(categ==='dog')?
            "live_rLRkWXexQFRFmrzbfFIeHavmQfeva0hKZus4nt09Yte9ACLe47yMJugxoSX5mVfP":"live_lZjl6Ey3KDBGlqob5xfirjmjRGaby3dWiqcoxO8RhQqkJ281BNIdBfWetE0eBQ2Q",
        },
      }
    )

    

    if(categ==='cat')setBreedInfo(result.data[0]);
    else{
      let reference=result?.data?.length === 0;
      reference= (!reference)? result?.data[0]?.reference_image_id :"";
      const res2=await axios.get(
        `https://api.thedogapi.com/v1/images/${reference}`,{
          headers: {
            "x-api-key":
            "live_rLRkWXexQFRFmrzbfFIeHavmQfeva0hKZus4nt09Yte9ACLe47yMJugxoSX5mVfP",
          },
        }
      );
      setBreedInfo(res2.data);

    }
  };

  const handleSearchInputChange = (event, value) => {
    setSearchInput(value);
  };

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container">
      <Autocomplete
        options={filteredBreeds}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        onChange={(event, value) => handleBreedSelect(value?.name)}
        onInputChange={handleSearchInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label= {(categ==='dog')?"Search for Dog Breed":"Search for Cat Breed"}
            variant="outlined"
          />
        )}
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="dog"
          name="radio-buttons-group"
          row
          onChange={(e)=>{
            setCateg(e.target.value);
            setBreedInfo(null);
            }}
        >
          <FormControlLabel value="dog" control={<Radio />} label="Dog" />
          <FormControlLabel value="cat" control={<Radio />} label="Cat" />
        </RadioGroup>
      </FormControl>
      {breedInfo && categ==='cat' && (
        <Card style={{ maxWidth: 500, marginTop: 20 }}>
          <CardMedia
            component="img"
            height="300"
            image={breedInfo?.image?.url}
            loading="lazy"
            alt={breedInfo?.name}
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {breedInfo.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {breedInfo.temperament}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {breedInfo.origin}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {breedInfo.description}
            </Typography>
          </CardContent>
        </Card>
      )}

      {breedInfo && categ==='dog' && breedInfo?.breeds && (
        <Card style={{ maxWidth: 500, marginTop: 20 }}>
        <CardMedia
          component="img"
          height="300"
          loading="lazy"
          image={breedInfo?.url}
          alt={breedInfo?.breeds[0]?.name}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {breedInfo.breeds[0].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {breedInfo?.breeds[0]?.temperament}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {breedInfo?.breeds[0]?.origin}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {breedInfo?.breeds[0]?.description}
          </Typography>
        </CardContent>
        </Card>
      )}
      
      
    </div>
  );
}

export default Facts;
