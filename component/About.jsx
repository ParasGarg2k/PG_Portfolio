import React from 'react'
import firstIcon from "../assets/icon-design.svg"
import avatar from "../assets/avatar.jpg"
import css from "../assets/skills/css.png"
import expressjs from "../assets/skills/expressjs.png"
import github from "../assets/skills/github.jpeg"
import html from "../assets/skills/html.png"
import js from "../assets/skills/js.png"

import mongodb from "../assets/skills/mongodb.png"

import nodejs from "../assets/skills/node-js.png"
import reactjs from "../assets/skills/reactjs.png"
import redux from "../assets/skills/redux.png"
import tailwind from "../assets/skills/tailwind.png"

import { TextPlugin } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(TextPlugin)

import './about.css'

const About = () => {

  useGSAP(()=>{
    gsap.to("#text", {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,
    })
 
    gsap.fromTo('.para-animation',{
      opacity: 0,
      y: 20
    },
  {
    opacity: 1,
    y:0,
    delay:1,
    stagger: 0.1
  })
  })
    const backgroundFunc =(element)=>{
        const btn = document.querySelectorAll(".tech-btn");
        const techbox = document.querySelectorAll(".techbox");
        
        if(element === 0){
          btn.forEach((item, index)=>{
            ((index === 1 || index === 2 || index === 3))  ? item.classList.remove('btn-background') : item.classList.add('btn-background');
          })
          techbox.forEach((item, index)=>{
            ((index === 1 || index === 2|| index === 3))  ? item.classList.remove('enable-icon') : item.classList.add('enable-icon'); 
          })
        }
        if(element===1){
          btn.forEach((item,index)=>{
            (index===0 || index === 2|| index === 3)? item.classList.remove('btn-background') : item.classList.add('btn-background');
          })
          techbox.forEach((item, index)=>{
            ((index === 0 || index === 2|| index === 3))  ? item.classList.remove('enable-icon') : item.classList.add('enable-icon'); 
          })
        }
        if(element===2){
          btn.forEach((item,index)=>{
            (index===0 || index === 1|| index === 3)? item.classList.remove('btn-background') : item.classList.add('btn-background');
          })
          techbox.forEach((item, index)=>{
            ((index === 0 || index === 1|| index === 3))  ? item.classList.remove('enable-icon') : item.classList.add('enable-icon'); 
          })
        }
        if(element===3){
          btn.forEach((item,index)=>{
            (index===0 || index === 1|| index === 2)? item.classList.remove('btn-background') : item.classList.add('btn-background');
          })
          techbox.forEach((item, index)=>{
            ((index === 0 || index === 1|| index === 2))  ? item.classList.remove('enable-icon') : item.classList.add('enable-icon'); 
          })
        }
    
      }
  return (
    <>
    <div className="content" >
            <div className="about">
              <header>
                <h1 className='heading' id="text">About Me</h1>
              </header>
              <div className='my-box'>

                <div className='text-box'>
                  <h1 className='hi' id="text">Hey</h1>
                  <h1 className='me' id="text">I am Paras Garg</h1>
                  <div className='wrapper'>
                    <h1 className='me' id="text">I'm into &nbsp; </h1>
                    <ul className="dynamic-text">
                      <li><span> Full Stack Development</span></li>
                      <li><span> Machine Learning and AI</span></li>
                    </ul>
                  </div>
                </div>

                <div className='avatar'>
                  <div className='avatar-box'>
                    <img src={avatar} className='my-img' alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className='my-lines'>
              <p className='p1 para-animation'>My job is to build your website so that it is functional and user-friendly, while also being visually attractive. I combine clean design with seamless usability, ensuring that your product is both eye-catching and intuitive. Moreover, I add a personal touch to every project to reflect your unique identity and message in the most creative way. Leveraging the power of Machine Learning and Artificial Intelligence, I integrate smart features that enhance user experience, personalize content, and drive meaningful interactions—making your website not just a platform, but an intelligent digital experience.</p>
            </div>

            <div className="about-box1">
              <h1 id="text">What I'm doing</h1>
              <div className='contentitems'>
              <div className='content1'>
                <div className="icons">
                  <img className='img1' src={firstIcon} alt="" />
                </div>
                <div className="content1-text">
                  <h1 className='texth' id="text">Web Development</h1>
                  <p className='textp para-animation'>High-quality development of websites at the professional level.</p>
                </div>
              </div>
              <div className='content1'>
                <div className="icons">
                  <img className='img1' src={firstIcon} alt="" />
                </div>
                <div className="content1-text">
                  <h1 className='texth' id="text">Data Structure and Algorithms</h1>
                  <p className='textp para-animation'>Transforming complex challenges into elegant solutions.</p>
                </div>
              </div>
              <div className='content1'>
                <div className="icons">
                  <img className='img1' src={firstIcon} alt="" />
                </div>
                <div className="content1-text">
                  <h1 className='texth' id="text">Machine Learning</h1>
                  <p className='textp para-animation'>High-quality implementation of Machine Learning and AI solutions at a professional level.</p>
                </div>
              </div>
              </div>
            </div>

            <div className='tech-knowledge'>
              <h1>Tech Stack</h1>
              <div className='Tech-buttons'>
                <button className='tech-btn btn-background' onClick={()=> backgroundFunc(0)}>Frontend</button>
                <button className='tech-btn' onClick={()=> backgroundFunc(1)}>Backend</button>
                <button className='tech-btn' onClick={()=> backgroundFunc(2)}>Programming</button>
                <button className='tech-btn' onClick={()=> backgroundFunc(3)}>Others</button>
              </div>
              <div className="techStack-icons">
                <div className="techbox enable-icon">
                  <div className='skill-box'>
                    <img src={reactjs} className='skill-icon' alt="" />
                    <h1 className='skill-h'>ReactJs</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={js} className='skill-icon' alt="" />
                    <h1 className='skill-h'>JavaScript</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={redux} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Redux</h1>
                  </div>
                                 
                  <div className='skill-box'>
                    <img src={html} className='skill-icon' alt="" />
                    <h1 className='skill-h'>HTML</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={css} className='skill-icon' alt="" />
                    <h1 className='skill-h'>CSS</h1>
                  </div>
                  <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP.maKe3jXsLd8flovNsX2_3QAAAA?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>TypeScript</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={tailwind} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Tailwind Css</h1>
                  </div> 
                  <div className='skill-box'>
                    <img src="data:image/jpeg;base64,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" className='skill-icon' alt="" />
                    <h1 className='skill-h'>Bootstrap</h1>
                  </div> 
                  
                </div>

                <div className="techbox ">
                <div className='skill-box'>
                    <img src={nodejs} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Node Js</h1>
                  </div>
                <div className='skill-box'>
                    <img src={expressjs} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Express</h1>
                  </div>
                <div className='skill-box'>
                    <img src={mongodb} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Mongodb</h1>
                  </div>
                <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP._f7r2jhr7HHcNDqJL1652wHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>NextJS</h1>
                  </div>
                </div>
                
                <div className="techbox ">
                <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP.F6r9QQCelEOLZDL9vn74DwHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>C</h1>
                </div>
                <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP.c9BbPNmGFrhbXYTdOTG6FAAAAA?w=256&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>C++</h1>
                </div>
                <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP.lZHtgsqo0gww25bLcpjTqQHaHZ?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>Python</h1>
                </div>
                <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP.jap_cRszSOiPk-lu65mFLwHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>Java</h1>
                </div>
                </div>

                <div className="techbox ">
                <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP.8SVgggxQcO5L6Dw_61ac4QHaEK?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>Github</h1>
                </div>
                <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP.1Z-8lMw49LOJH4Vsrax8mgHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>Linux</h1>
                </div>
                <div className='skill-box'>
                    <img src="https://th.bing.com/th/id/OIP.PyfR9Nsmhd8sYZcjmyd-pgHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='skill-icon' alt="" />
                    <h1 className='skill-h'>Git</h1>
                </div>
                <div className='skill-box'>
                    <img src="https://th.bing.com/th?id=OIP.Ppjp4ggi4QqjaD5-i4jkfwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='skill-icon' alt="" />
                    <h1 className='skill-h'>SQL</h1>
                </div>
                </div>
              </div>
            </div>

          </div>
          </>
  )
}

export default About