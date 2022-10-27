// import React from 'react';
// import './App.css';
// // import Navigation from './components/Navbar';
// import Routes from './Routes';

// function App() {
//   return (
//     <div className="App">
//       {/* <Navigation /> */}
//       <Routes />
//     </div>
//   );
// }

// export default App;











import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        {/* ErrorPage must be the last Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
