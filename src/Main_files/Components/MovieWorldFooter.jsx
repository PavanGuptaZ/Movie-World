import React from 'react';
import styles from './Components.module.css'
import Logo from '../Data/Logo.png'
import { UiStyle02 } from './ComponentsStyled.jsx';
import { Link } from 'react-router-dom';

export const MovieWorldFooter = () => {
  return (
    <footer style={{ backgroundColor: "#0F2133" }}>
      <div className={styles.containar}>
        <div className={styles.footerBox}>
          <img src={Logo} alt="" style={{ width: "150px" }} />
          <UiStyle02>
            <li><Link to="/">Home</Link></li>
            <li><Link to="Popular" >Popular</Link></li>
            <li><Link to="TopRating" >Top Rating</Link></li>
            <li><Link to="Upcoming" >Upcoming</Link></li>
          </UiStyle02>
        </div>
      </div>
      <div className={styles.footernote}>All Right are Recieved</div>
    </footer>
  )
}
