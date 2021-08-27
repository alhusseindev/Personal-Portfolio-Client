import React from 'react';
import HeaderSection from "./HeaderSection/HeaderSection";
import NavBar from "./NavBar/NavBar";
import  DescriptionSection  from "./DescriptionSection/Section";
import StackSection from "./StackSection/StackSection";
import ContactFormSection from './ContactFormSection/ContactFormSection';
import Footer from "./Footer/Footer";
import './App.scss';

function App(){
    return(
        <main className="app">
            <NavBar/>
            <HeaderSection/>
            <DescriptionSection/>
            <StackSection/>
            <ContactFormSection/>
            <Footer/>
        </main>

    );
}

export default App;
