import '../App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import AddComment from "./AddComment";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function AllComments() {

  const [comments, setComments] = useState([]);

  // heroku: https://jmaraya-code-quiz.herokuapp.com/comments
  // local: http://localhost:3000/comments
  const getComments = () => {
      axios.get("http://localhost:3000/comments").then((res) => {
        setComments(res.data);
      });
  };

  useEffect(() => {
      getComments();
  }, [comments]);

  return(
    <div className="App">

      <AddComment comments={comments} setComments={setComments} />

      <TableContainer sx={{ maxHeight:350 }} component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {item.comment_name}
              </TableCell>
              <TableCell >{item.comment_rating}</TableCell>
              <TableCell >{item.comment_message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default AllComments;