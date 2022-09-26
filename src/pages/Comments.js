import '../App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import AddComment from "./AddComment";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AllComments() {

  const [comments, setComments] = useState([]);

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

      <TableContainer component={Paper}>
      <Table aria-label="simple table">
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