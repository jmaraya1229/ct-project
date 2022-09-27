import "../App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Typography, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


export default function Add(props) {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      addComment(data);
      reset();
    };
  
    // function to make a POST req to the server to insert data to MySQL db
    const addComment = (data) => {
      axios.post("https://jmaraya-code-quiz.herokuapp.com/comments", data).then(() => {
        props.setComments([...props.comments, {data}]);
      });
    };

    return (
      <Box>
        <form className="add-comment" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4" m={2}>Add a Comment!</Typography>
          <Stack spacing={2}>
            <TextField 
              type="text" 
              label="Name"
              {...register('comment_name', { required: true, maxLength: 20 })}
              />
            <TextField 
              type="text"
              label="Message" 
              {...register('comment_message', { required: true, maxLength: 450 })}  
              />
            <TextField 
            type="number"
            InputProps={{ inputProps: { min: 0, max: 5 } }}
            label="Rating (0-5)"
            {...register('comment_rating', { required: true, max: 5, min: 0 })} 
            />
          <br />
           </Stack>

           <Button variant="outlined" id="btn" type="input">Submit</Button>
        </form>
      </Box>
     
    );

  }
  