import React from "react"

function MainText() {
  return (
    <section className="main-text">
      <h3 className="main-text-heading">WE ARE GROOVRICK</h3>
      <p className="main-text-paragraph">
        We believe in the power of 'what if' and we exist to create a better
        future with you.
      </p>
      <style>{`
        .main-text {
            width: 70%;
            margin: 15rem auto;
        }
        .main-text-heading {
            color: var(--blue);
            font-size: 2rem;
        }
        .main-text-paragraph {
            font-size: 1rem;
            width: 50%;

        }
        @media only screen and (max-width: 600px) {
            .main-text {
                width: 85%;
                margin: 8rem auto;
            }
        .main-text-paragraph {
            width: 100%;
        }
           
        }
    `}</style>
    </section>
  )
}

export default MainText
