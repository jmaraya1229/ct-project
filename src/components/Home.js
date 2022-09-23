import React from "react";

function Home({ currentPage, handlePageChange }) {
    return (
      <nav>
  
        <a
          onClick={() => handlePageChange('Quiz')}
          className={currentPage === 'Quiz' ? 'nav-link active' : 'nav-link'}
        >
          Start the quiz!
        </a>
  
<br />

        <a
          onClick={() => handlePageChange('Comments')}
          className={currentPage === 'Comments' ? 'nav-link active' : 'nav-link'}
        >
          View the comments!
        </a>
      </nav>
    );
  }
  
  export default Home;