import React from "react";
import Shopbird from './../components/Shopbird/Shopbird'
import Recapzzz from './../components/Recapzzzz/Recapzzz'
import Clownyara from "./../components/Clownyara/Clownyar";
import ImageSlider from "./../components/Slider/ImageSlider";
import Lastone from "./../components/Lastone/Lastone";
import News from "./News/News";
import Footer from "../components/Footer/Footer";
import NewsBtn from "../components/NewsBtn/NewsBtn";

const Main = () => {

    return(
        <>
        <Shopbird/> 
        <Recapzzz />
        <ImageSlider/>
        <Clownyara />
        <Lastone />
        <NewsBtn/>
        {/* <Footer/> */}
        </>
    )
}

export default Main