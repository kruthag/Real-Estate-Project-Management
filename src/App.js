// // import logo from './logo.svg';
// import React from "react";

// import {Routes, Route} from "react-router-dom";
// import { BrowserRouter as Router} from 'react-router-dom';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Home from "./pages/Home";
// // import Banner from "./components/Banner";

// function App() {
//   return (
  
//     <div className="max-w-[1440px] mx-auto bg-white ">  
//        <Header/>
//        <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/signup" element={<Signup/>} />
//        </Routes>
//        <Footer/>
//     </div>
  
//   );
// }

// export default App;
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from "./pages/Home";

function App() {
    return (
        <UserProvider>
            
                <div className="max-w-[1440px] mx-auto bg-white">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                    <Footer />
                </div>
            
        </UserProvider>
    );
}

export default App;

