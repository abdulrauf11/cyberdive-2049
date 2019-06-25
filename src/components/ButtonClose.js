import React from "react"
function ButtonClose() {
  return (
    <div className="cross">
      <span className="bar" />
      <span className="bar" />
      <style jsx>{`
        .cross {
          cursor: pointer;
          padding: 1rem 0.5rem;
        }

        .cross .bar {
          display: block;
          height: 2px;
          width: 30px;
          background-color: var(--pink);
          margin: 0px 0;
          transition: all 0.3s ease-in-out;
        }
        .cross .bar:nth-child(1) {
          transform: rotate(45deg) translateY(1.5px);
        }
        .cross .bar:nth-child(2) {
          transform: rotate(-45deg) translateY(-1.5px);
        }
      `}</style>
    </div>
  )
}

export default ButtonClose
