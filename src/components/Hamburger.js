import React from "react"
const Hamburger = ({ isActive }) => (
  <div className={isActive ? "hamburger is-active" : "hamburger"}>
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
    <style jsx>{`
      .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        position: fixed;
        top: 2.6rem;
        right: 4rem;
        z-index: 1000;
      }
      .bar {
        display: block;
        height: 2px;
        background: #f6f6f6;
        margin: 4px 0;
        transition: all 0.3s ease-in-out;
        transform-origin: 0%;
      }
      .bar:nth-child(1) {
        width: 30px;
        transition-delay: 0.2s;
      }
      .bar:nth-child(2) {
        width: 27px;
      }
      .bar:nth-child(3) {
        width: 20px;
        transition-delay: 0.1s;
      }
      .hamburger:hover .bar {
        background: var(--pink);
      }
      .hamburger:hover .bar:nth-child(1) {
        transform: scaleX(0.7);
      }
      .hamburger:hover .bar:nth-child(2) {
        transform: scaleX(1.1);
      }
      .hamburger:hover .bar:nth-child(3) {
        transform: scaleX(1.3);
      }
      .hamburger.is-active .bar {
        width: 30px;
        transform: scaleX(1);
        transform-origin: 50%;
      }
      .hamburger.is-active .bar:nth-child(2) {
        opacity: 0;
      }
      .hamburger.is-active .bar:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
      }
      .hamburger.is-active .bar:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
      }

      @media only screen and (max-width: 600px) {
        .hamburger {
          right: 2rem;
        }
      }
    `}</style>
  </div>
)

export default Hamburger
