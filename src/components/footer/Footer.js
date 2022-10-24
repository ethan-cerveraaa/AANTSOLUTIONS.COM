import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
             <h1>AANTsolutions.</h1>
             <p>We create solutions. We build community.</p>
           </div>
           <div className="footer-contact">
               <h3>In creation</h3>  
               <p>In process</p>   
        </div>
        <div className="footer-sns">
            <div className="design-by">
                Ethan Cervera  
            </div>
            <div className="sns-links">
                <a href="https://github.com/" target="_blank" rel="noopener">
                    <i className="fab fa-github github"></i>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener">
                    <i className="fab fa-youtube youtube"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                    <i className="fab fa-facebook facebook"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}
