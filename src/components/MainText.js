import React from "react"

function MainText() {
  return (
    <section className="main-text">
      <h3 className="main-text-heading">WE ARE IMMORTALIZING CREATIVITY</h3>
      <p className="main-text-paragraph">
        We ignite next-generation digital experiences and help businesses evolve
        for tech-revolution 4.0 with our immersive services curated to drive
        engagement and growth.
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
