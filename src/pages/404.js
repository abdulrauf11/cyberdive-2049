import React from "react"

function ErrorPage() {
  return (
    <div className="wrapper">
      <h1 className="heading">ERROR 404</h1>
      <p className="message">Page not found!</p>
      <style jsx>{`
        .wrapper {
          height: 100vh;
          background: var(--black);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .heading {
          color: var(--blue);
          font-size: 7vmax;
          animation: glow 1s infinite alternate;
          margin: 0;
        }

        .message {
          color: var(--pink);
          font-size: 1vmax;
          margin: 0;
        }

        @keyframes glow {
          to {
            text-shadow: 0 0 10px var(--blue);
          }
        }
      `}</style>
    </div>
  )
}

export default ErrorPage
