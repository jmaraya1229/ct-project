// import "../App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Typography, TextField, Box, Stack } from '@mui/material';


export default function Add(props) {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      addComment(data);
      reset();
    };
  
    // function to make a POST req to the server to insert data to MySQL db
    // heroku: https://jmaraya-code-quiz.herokuapp.com/comments
    // local: http://localhost:3000/comments
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
              required
              type="text" 
              label="Name"
              data-testid = "comment_name"
              {...register('comment_name', { required: true, maxLength: 20 })}
              />
            <TextField 
              required
              type="text"
              label="Message" 
              data-testid = "comment_message"
              {...register('comment_message', { required: true, maxLength: 450 })}  
              />
            <TextField 
            required
            type="number"
            data-testid = "comment_rating"
            InputProps={{ inputProps: { min: 0, max: 5 } }}
            label="Rating (0-5)"
            {...register('comment_rating', { required: true, max: 5, min: 0 })} 
            />
          <br />
           </Stack>

           <Button variant="contained" id="btn" type="input">Submit</Button>
        </form>
      </Box>
     
    );

  }
  