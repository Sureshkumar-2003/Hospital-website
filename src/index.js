import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './header';
import Home from './home';
import About from './about';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from './service';
import Doctor from './doctor';
import Contact from './contact';
import Footer from './footer';


AOS.init();




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <About/>
    <Service/>
    <Doctor/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
