import './App.css';
import React, {useState} from 'react';
import Quiz from "./components/Quiz";
import Comments from "./components/Comments";
import Home from "./components/Home";


function App() {

  const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Quiz') {
            return <Quiz />;
        }
        if (currentPage === 'Comments') {
            return <Comments />;
        }
        return <Home />;
    }

    const handlePageChange = (page) => setCurrentPage(page);


  return(

  <div>
    <Home currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
  </div>
    
  )
  

};

export default App;
