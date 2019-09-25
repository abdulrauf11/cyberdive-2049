import React from "react"
function Button(props) {
  return (
    <button disabled={props.disabled} type="submit">
      <div className="wrapper">{props.children}</div>
      <style jsx>{`
        .wrapper {
            transform: skewX(20deg);
        }
        button:disabled {
          cursor: wait;
        }

        button
        {
            display: block;
            transform: skewX(-20deg);
            font-family: "Montserrat", sans-serif;
            cursor: pointer;
            position: relative;
            padding: 0;
            background: transparent;
            color: var(--white);
            width: 90px;
            height: 35px;
            border: 1px solid var(--pink);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.7rem;
            transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
        }

        button:hover {
            background-color: transparent;
            text-shadow: nthree;
        }
        button:hover:before {
            left: 0%;
            right: auto;
            width: 100%;
        }
        button:before {
            display: block;
            position: absolute;
            top: 0px;
            right: 0px;
            height: 100%;
            width: 0px;
            z-index: -1;
            content: '';
            background: var(--pink);
            transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
        0s;
        }

        @media only screen and (min-width: 2500px) {
          button{
            width: 120px;
            height: 45px;
          }
        }
      `}</style>
    </button>
  )
}

export default Button
