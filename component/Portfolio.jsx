import React from 'react'
// import img from '../assets/image.png'
import data from './data.json'
import './portfolio.css'

const Portfolio =  () =>  {
  
  return (
    <>
    <div className='content'>
      <div className="about">
        <header>
          <h1 className="heading">Portfolio</h1>
        </header>
        <p className='para'>All</p>
        <div className='card-wrapper'>
          {data.projects.map((project) => {
            return (
          <div className="card">
            <div className='card-img-hover'>
            <a href={project.previewLink} className="click-icon" target='blank'><ion-icon name="eye-outline" ></ion-icon></a>
            <a href={project.gitHubLink} className="click-icon" target='blank'><ion-icon name="logo-github"></ion-icon></a>
            </div>
            <div className="img-wrapper">
            <img src={project.imgLink} className='card-img' alt="Card image cap" loading='lazy' />
            </div>
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
          )}
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio