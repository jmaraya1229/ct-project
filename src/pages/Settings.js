import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { error, loading } = useAxios({ url: "/api/v1/questions?apiKey=lO6AWe9K6faBneDIMSY28g4R5qja5vzsdcX6hwiC" });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const tagOptions = [
    { id: "HTML", name: "HTML" },
    { id: "MYSQL", name: "MYSQL" },
    { id: "Javascript", name: "Javascript" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };

  return (
    <>
    <Typography variant="h2" fontWeight="bold" data-testid="title">
      Code Quiz
    </Typography>

    <form onSubmit={handleSubmit} data-testid="settings-form">
        <SelectField 
          required
          options={difficultyOptions} 
          label="Difficulty"  
          />
        <SelectField 
          required
          options={tagOptions} 
          label="Tag" 
           />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Settings;