import React from 'react';
import Main from '../components/Menu';
import FlashSales from '../components/Flash-Sales';
import Categories from '../components/categories';
import Bestproduct from '../components/Bestproduct';
import ProductCards from '../components/Product-Cards';
import Offercard from '../components/offer-card';
import OurProducts from '../components/our-products';
import Arrival from '../components/Arrival';
import Service from '../components/Service';
import Footer from '../components/Footer';


const Home = () =>{
  return (
    <>
    <Main/>
    <FlashSales/>
    <ProductCards/>
    <Categories/>
    <Bestproduct/>
    <Offercard/>
    <OurProducts/>
    <Arrival/>
    <Service/>

    </>
  );
};

export default Home
