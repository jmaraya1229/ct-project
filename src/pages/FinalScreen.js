import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import Comments from "./Comments";

const FinalScreen = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);
  const { amount_of_question } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    navigate("/");
  };

  return (
    <Box>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score} / {amount_of_question}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Back to the start!
      </Button>
      <Comments />
    </Box>
  );
};

export default FinalScreen;