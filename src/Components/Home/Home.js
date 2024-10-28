import React from 'react'
import Images from '../Images/Images'
import './Home.css'

function Home() {
  return (
    <section className='home'>
      <div className='intro'>
        <h1>Gradient Color</h1>
        <p>Welcome to GradientGenius, your ultimate destination for creating stunning gradients with ease! Whether you’re a designer looking to enhance your projects or a creative mind seeking inspiration, our intuitive tool empowers you to generate beautiful color blends in just a few clicks. With options to choose from various gradient types, customizable sliders, and an instant preview feature, you can effortlessly experiment and find the perfect palette. Join our vibrant community of creators, explore an inspiring gallery of user-submitted gradients, and elevate your designs to a whole new level. Dive in and unleash your creativity today!</p>
      </div>
      <div className='intro-image'>
      <Images src={"./assets/logo.png"} alt={"Logo"} />   
      </div>
    </section>
  )
}

export default Home