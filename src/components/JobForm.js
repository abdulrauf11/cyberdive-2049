import React, { useState, useEffect } from "react"
import Button from "./Button"
import all_jobs from "../models/jobs.json"
import { CSSTransition } from "react-transition-group"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function JobForm(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [position, setPosition] = useState("")
  const [resume, setResume] = useState("")
  const [message, setMessage] = useState("")
  const [buttonText, setButtonText] = useState("Send")
  const [inProp, setInProp] = useState(false)

  const handleSubmit = e => {
    let state = { name, email, phone, position, resume, message }
    console.log(state)
    fetch("/careers", {
      method: "POST",
      body: encode({ "form-name": "job-post-new", ...state }),
    })
      .then(() => {
        console.log("Success!")
        setInProp(true)
        setButtonText("Thank you!")
        setName("")
        setEmail("")
        setPhone("")
        setPosition("")
        setResume("")
        setMessage("")
      })
      .catch(error => {
        console.log(error)
        setInProp(true)
        setButtonText("Try Again!")
      })
    e.preventDefault()
  }

  useEffect(() => {
    if (buttonText === "Send") {
      setInProp(false)
    }
    let timeout = setTimeout(() => {
      setButtonText("Send")
    }, 2000)
    return function cleanup() {
      clearTimeout(timeout)
    }
  }, [buttonText])

  return (
    <form
      method="post"
      name="job-post-latest"
      action="#"
      data-netlify="true"
      data-netlify-honeypot="bot-field-latest"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field-latest" />
      <input type="hidden" name="form-name" value="job-post-latest" />

      <div className="group">
        <div className="group-item">
          <input
            placeholder="Full Name*"
            type="text"
            name="name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="group-item">
          <input
            placeholder="Email*"
            type="email"
            name="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="group-item">
          <input
            placeholder="Phone*"
            type="text"
            name="phone"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="group-item">
          <select
            name="position"
            defaultValue={props.defaultPosition ? props.defaultPosition : ""}
            onChange={e => setPosition(e.target.value)}
          >
            <option value="" disabled>
              Select position
            </option>
            {all_jobs.map(
              job =>
                job.title !== "INTERN" && (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                )
            )}
          </select>
        </div>

        <div className="group-item">
          <input
            placeholder="Link to your resume"
            type="text"
            name="resume"
            value={resume}
            onChange={e => setResume(e.target.value)}
          />
        </div>

        <div className="group-item">
          <textarea
            placeholder="Tell us what inspires you to join Groovrick"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="button-wrapper">
        <Button>
          <CSSTransition in={inProp} timeout={200} classNames="button-text">
            <div>{buttonText}</div>
          </CSSTransition>
        </Button>
      </div>
      <style jsx>{`
        form {
          margin: 2rem 0;
          position: relative;
          width: 80%;
          max-height: 90%;
        }
        .group {
          margin: 2rem 0;
        }
        .group-item {
          margin: 2rem 0;
        }
        input[type="text"],
        input[type="email"],
        select {
          height: auto;
        }
        input[type="text"],
        input[type="email"],
        textarea,
        select {
          font-size: 1rem;
          color: var(--white);
          width: 100%;
          background: transparent;
          transition: all 0.3s ease-in-out;
          outline: none;
          padding: 0.5rem;
          border: 1px solid var(--white);
        }

        select option {
          background: var(--black);
          font-size: 0.8rem;
          display: block;
          padding: 1rem;
          text-transform: uppercase;
        }

        select {
          padding-left: 0.3rem;
          text-transform: uppercase;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus,
        select:focus {
          box-shadow: 0px 0px 5px 0px var(--blue);
          border: 1px solid var(--blue);
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          border: 1px solid var(--white);
          -webkit-text-fill-color: var(--white);
          -webkit-box-shadow: none;
          padding: 0.5rem;
          font-family: "Montserrat", sans-serif;
          transition: background-color 5000s ease-in-out 0s;
        }

        .button-wrapper {
          margin: 2rem 0 0 0;
          display: flex;
          justify-content: flex-end;
        }

        .button-text-enter {
          opacity: 0;
        }
        .button-text-enter-active {
          opacity: 1;
          transition: all 500ms;
        }
        .button-text-exit {
          opacity: 1;
        }
        .button-text-exit-active {
          opacity: 0;
          transition: all 500ms;
        }

        @media only screen and (max-width: 600px) {
          input[type="text"],
          input[type="email"],
          select {
            height: auto;
          }

          .group-item {
            margin: 1.5rem 0;
          }
        }

        @media only screen and (min-width: 2500px) {
          input[type="text"],
          input[type="email"],
          select {
            height: 50px;
          }
          textarea {
            height: 200px;
          }
        }
      `}</style>
    </form>
  )
}

export default JobForm
