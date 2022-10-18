import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

// Handles numerical field amount of questions
const TextFieldComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          required
          variant="outlined"
          label="Question Amount 1-20"
          InputProps={{ inputProps: { min: 0, max: 20 } }}
          type="number"
          size="small"
          data-testid="amount"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;