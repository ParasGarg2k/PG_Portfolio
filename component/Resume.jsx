import React from 'react'
import './resume.css';
import { TextPlugin } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(TextPlugin)

const Resume = () => {
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
        stagger: 0.2
      })
      })
    return (
        <>
            <div className="content" >
                <div className="about">
                    <header>
                        <h1 className='heading'>Resume</h1>
                    </header>
                </div>
                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h1 className="h3">Education</h1>
                    </div>

                    <div className='line'>
                        <div className='real-line'></div>
                        <ol className="timeline-list">

                            <li className="timeline-item">

                                <h4 className="h4 timeline-item-title">Dr. B. R. Ambedkar National Institute of Technology, Jalandhar</h4>

                                <span>2022 — 2026</span>

                                <p className="timeline-text para-animation">
                                    B.Tech-Bachelor's of Technology in Computer Science and Engineering
                                </p>

                            </li>

                            <li className="timeline-item">

                                <h4 className="h4 timeline-item-title">Senior Secondary</h4>

                                <span>2020 — 2022</span>

                                <p className="timeline-text para-animation">
                                    Govt. Sr. Sec. Smart School, Civillines, Patiala
                                </p>

                            </li>

                            <li className="timeline-item">

                                <h4 className="h4 timeline-item-title">School</h4>

                                <span>2008 — 2020</span>

                                <p className="timeline-text para-animation">
                                    Spring Dale Public High School, Patiala
                                </p>
                            </li>
                        </ol>
                    </div>
                    <button className='resume-btn' ><a href="https://drive.google.com/file/d/1278sUGuUuD4u5JUjJrBKEd-QU1SVZdyr/view?usp=sharing"><p>Resume</p></a></button>
                    <h1 >My Skills</h1>

                    <div className='skills'>
                        <li className='skill-item'>JavaScript</li>
                        <li className='skill-item'>ReactJs</li>
                        <li className='skill-item'>HTML</li>
                        <li className='skill-item'>CSS</li>
                        <li className='skill-item'>Bootstrap</li>
                        <li className='skill-item'>TailwindCss</li>
                        <li className='skill-item'>Node Js</li>
                        <li className='skill-item'>Express.Js</li>
                        <li className='skill-item'>Mongodb</li>
                        <li className='skill-item'>Redux</li>
                    </div>

                    <div className='skills'>
                        <li className='skill-item'>C</li>
                        <li className='skill-item'>C++</li>
                        <li className='skill-item'>Java</li>
                        <li className='skill-item'>Python</li>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Resume