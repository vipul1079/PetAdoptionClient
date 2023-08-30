import React , { useRef } from 'react'
import { useDispatch } from 'react-redux';
import {yupResolver} from "@hookform/resolvers/yup";
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button, FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { createContactUs } from '../redux/actions/contactus';


const schema= yup.object({
    firstName:yup.string().required(),
    email:yup.string().required().email("Please enter a valid email"),
    message:yup.string(),

}).required();

const ContactUsForm = ({closeModal}) => {
    const form = useRef();

    const dispatch=useDispatch();
    const{
        handleSubmit,
        control,
        formState: {errors},
        reset
    }= useForm({
        defaultValues: {
            firstName: "",
            email:"",
            message:"",
        },
        resolver:yupResolver(schema)
    });

    const onSubmit=(data)=>{
        

        createContactUs({dispatch,payload:data});

        closeModal();
    }


  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} >
        <FormControl fullWidth sx={{m:1}}>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Controller
            name="firstName"
            control={control}
            rules={{required:true}}
            render={({field}) => (
                <OutlinedInput 
                error={!!errors.firstName} 
                id="firstName" 
                label="FirstName" 
                {...field}/>
            )}
            />
        </FormControl>
        <FormControl fullWidth sx={{m:1}}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Controller
            name="email"
            control={control}
            rules={{required:true}}
            render={({field}) => (
                <OutlinedInput 
                error={!!errors.email} 
                id="email" 
                label="Email" 
                {...field}/>
            )}
            />
        </FormControl>
        
        <FormControl fullWidth sx={{ m: 1 }}>
        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={!!errors.message}
              id="message"
              label="Message"
              multiline
              rows={4}
              {...field}
            />
          )}
        />
      </FormControl>
        <FormControl fullWidth sx={{m:1}}>
            <Button variant="contained" color="success" type="submit">Send</Button>
        </FormControl>
        <FormControl fullWidth sx={{m:1}}>
            <Button variant="contained" color="warning" onClick={closeModal}>Cancel</Button>
        </FormControl>
    </form>
  )
}

export default ContactUsForm
