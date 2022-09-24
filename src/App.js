import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings/>}>
            </Route>
            <Route path="/questions" element={<Questions/>} />
            <Route path="/score" element={<FinalScreen/>} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;