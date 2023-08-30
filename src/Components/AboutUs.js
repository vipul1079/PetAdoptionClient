import React,{useState} from "react";
import {
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  FormControl,
  Modal,
  Box,

} from "@mui/material";
import ContactUsForm from "./ContactUsForm";


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

const AboutUs = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography paragraph>Welcome to BuddyForEveryBuddy.</Typography>
            <Typography paragraph>
              We provide spay/neuter and veterinary health services for stray or
              community animals,adoption programs as well as responsible pet
              ownership education in india.
            </Typography>

            <Typography paragraph>
              We believe that pets bring immense joy and companionship to our
              lives, and adopting a pet is a lifelong commitment. We provide
              guidance and resources to help you make informed decisions about
              pet ownership and provide post-adoption support to ensure a smooth
              transition for both you and your new furry friend.
            </Typography>
            <Typography paragraph>
              Our goal is to make smaller and healthier street and community
              animal population in India.
            </Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Contact Us
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <Box sx={{ width: 400, ...style }}>
                <Typography variant="h5">Contact Us</Typography>
                <ContactUsForm
                  closeModal={() => setOpen(false)}
                />
              </Box>
            </Modal>
            <Typography>
              If you have any questions or would like to learn more about our
              adoption process, please don't hesitate to contact us. Our
              friendly team is here to assist you.
            </Typography>
            <Typography>Phone: (123) 456-7890</Typography>
            <Typography>Email: info@petadoptionwebsite.com</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/AboutUsPic.jpg"
              alt="Dog"
              style={{ width: "100%", borderRadius: 4 }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutUs;
