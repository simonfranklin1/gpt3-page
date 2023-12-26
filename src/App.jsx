import './App.css'

/*
import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import CTA from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'
*/

import {Article, Brand, CTA, Feature, NavBar} from './components';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'

function App() {

  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
