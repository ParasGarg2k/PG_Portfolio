import React, { useState } from 'react'
import './App.css'
import Sidebar from '../component/Sidebar'
import About from '../component/About'
import Resume from '../component/Resume.jsx'
import Portfolio from '../component/Portfolio.jsx'



function App() {
  const [activeComponent, setActiveComponent] = useState('About');

  const activateBtn = (element) => {
    const btn = document.querySelectorAll(".navbar-link");
    if (element === 0) {
      btn.forEach((item, index) => {
        ((index === 1 || index === 2 )) ? item.classList.remove('activate') : item.classList.add('activate');
      })
    }
    if (element === 1) {
      btn.forEach((item, index) => {
        ((index === 0 || index === 2 )) ? item.classList.remove('activate') : item.classList.add('activate');
      })
    }
    if (element === 2) {
      btn.forEach((item, index) => {
        ((index === 1 || index === 0 )) ? item.classList.remove('activate') : item.classList.add('activate');
      })
    }
    // if (element === 3) {
    //   btn.forEach((item, index) => {
    //     ((index === 1 || index === 2 || index === 0)) ? item.classList.remove('activate') : item.classList.add('activate');
    //   })
    // }
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      // case 'Contact':
      //   return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <main className='main-box'>
        <Sidebar />
        <div className="container-box">
          <div className='nav'>
            <nav className="navbar">

              <ul className="navbar-list">

                <li className="navbar-item"  >
                  <a href='#' className="navbar-link activate" onClick={() => {
                    setActiveComponent('About')
                    activateBtn(0)
                  }}>About</a>
                </li>

                <li className="navbar-item">
                  <a href='#' className="navbar-link" onClick={() => {
                    setActiveComponent('Resume')
                    activateBtn(1)
                  }}>Resume</a>
                </li>

                <li className="navbar-item">
                  <a href='#' className="navbar-link" onClick={() => {
                    setActiveComponent('Portfolio')
                    activateBtn(2)
                  }}>Portfolio</a>
                </li>

                {/* <li className="navbar-item">
                  <a href='#' className="navbar-link" onClick={() => {
                    setActiveComponent('Contact')
                    activateBtn(3)
                  }}>Contact</a>
                </li> */}

              </ul>

            </nav>
          </div>
          {/* <About/> */}
          {renderComponent()}

        </div>
      </main>
      <div className="bottom-navbar">
            <a href='#' className="bottom-navbar-link active" onClick={() => {
              setActiveComponent('About')
              activateBtn(0)
            }}>About</a>
            <a href='#' className="bottom-navbar-link" onClick={() => {
              setActiveComponent('Resume')
              activateBtn(1)
            }}>Resume</a>
            <a href='#' className="bottom-navbar-link" onClick={() => {
              setActiveComponent('Portfolio')
              activateBtn(2)
            }}>Portfolio</a>
            {/* <a href='#' className="bottom-navbar-link" onClick={() => {
              setActiveComponent('Contact')
              activateBtn(3)
            }}>Contact</a> */}
      </div>
    </>
)
}

export default App