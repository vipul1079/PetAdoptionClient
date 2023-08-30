import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPetsById } from "../redux/actions/pets";
import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Modal,
  Typography,
  Card,
} from "@mui/material";
import { BACKEND_URI } from "../utils/constants";
import AdoptionForm from "../Components/AdoptionForm";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  backgroundColor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const PetProfilePage = () => {
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();
  const selectedPet = useSelector((state) => state.pets.selectedPet);

  useEffect(() => {
    fetchPetsById({ dispatch, payload: { id } });
  }, [dispatch, id]);
  const images = useMemo(
    () =>
      selectedPet?.additionalImages
        ? [
            BACKEND_URI + "//" + selectedPet?.image,
            ...selectedPet?.additionalImages.map(
              (image) => BACKEND_URI + "//" + image
            ),
          ]
        : [BACKEND_URI + "//" + selectedPet?.image],
    [selectedPet?.additionalImages, selectedPet?.image]
  );

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
          <Typography variant="h3" className="line_height_50">
            {selectedPet?.name}
          </Typography>
          <Typography
            variant="h4"
            color="text.secondary"
            className="line_height_50"
          >
            Breed - {selectedPet?.breed}
          </Typography>
          <Typography
            variant="h4"
            color="text.secondary"
            className="line_height_50"
          >
            Category - {selectedPet?.category?.name}
          </Typography>
          <Typography
            variant="h4"
            color="text.secondary"
            className="line_height_50"
          >
            Age - {selectedPet?.age}
          </Typography>
          <Typography
            variant="h4"
            color="text.secondary"
            className="line_height_50"
          >
            Color - {selectedPet?.color}
          </Typography>
          <Typography variant="subtitle1" paragraph className="line_height_40">
            {selectedPet?.description}
          </Typography>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Adopt
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={{ width: 400, ...style }}>
              <Typography variant="h5">AdpotionForm</Typography>
              <AdoptionForm pet={selectedPet._id} closeModal={() => setOpen(false)} />
            </Box>
          </Modal>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageList sx={{ height: 600 }} variant="masonry" cols={3} gap={8}>
            {images?.map((item, index) => (
              <ImageListItem key={index}>
                <Card
                  sx={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}

                >
                  <Zoom in={true} timeout={500}>
                    <img
                      src={item}
                      width="100%"
                      height="100%"
                      alt="img"
                      loading="lazy"
                    />
                  </Zoom>
                </Card>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        
      </Grid>
    </>
  );
};

export default PetProfilePage;
