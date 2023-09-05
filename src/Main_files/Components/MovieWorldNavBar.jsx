import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Logo from '../Data/Logo.png'
import styles from './Components.module.css'
import { UiStyle } from './ComponentsStyled.jsx';
import { SearchBox } from '.'

export const MovieWorldNavBar = () => {
  const [showElement, setShowElement] = useState({
    hamburgerIcon: false,
    closeIcon: false,
    navItems: true,
    opened: false
  })
  const openNav = () => {
    setShowElement({
      hamburgerIcon: false,
      closeIcon: true,
      navItems: true,
      opened: true
    })
  }
  const closeNav = () => {
    setShowElement({
      hamburgerIcon: true,
      closeIcon: false,
      navItems: false,
      opened: true
    })
  }
  const Adjust = () => {
    if (showElement.opened) {
      setShowElement({
        hamburgerIcon: true,
        closeIcon: false,
        navItems: false,
        opened: false
      })
    }
  }
  const handleResize = () => {
    setShowElement({
      hamburgerIcon: window.innerWidth < 900,
      closeIcon: false,
      navItems: window.innerWidth > 900,
      opened: window.innerWidth < 900
    });
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav style={{ backgroundColor: "#0F2133", width: "100%" }}>
      <div className={styles.containar}>
        <div className={styles.navBarBox}>
          {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav} className={styles.NavControlIcon} />}
          {showElement.closeIcon && <AiOutlineClose onClick={closeNav} className={styles.NavControlIcon} />}

          <div className="logo">
            <img src={Logo} alt="" style={{ width: "100px", userSelect: "none" }} />
          </div>
          {showElement.navItems &&
            <>
              <div >
                <UiStyle>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="Popular" >Popular</NavLink></li>
                  <li><NavLink to="TopRating" >Top Rating</NavLink></li>
                  <li><NavLink to="Upcoming" >Upcoming</NavLink></li>
                </UiStyle>
              </div>
              <SearchBox setShowElement={setShowElement} showElement={showElement} Adjust={Adjust}/>
            </>
          }
        </div>
      </div>
    </nav>
  )
}
