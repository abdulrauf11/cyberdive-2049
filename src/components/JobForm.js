import React, { useState, useEffect, useRef } from "react"
import Button from "./Button"
import all_jobs from "../models/jobs.json"
import { CSSTransition } from "react-transition-group"

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&")
// }

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

function JobForm(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [position, setPosition] = useState("")
  const [resume, setResume] = useState(null)
  const [message, setMessage] = useState("")
  const [buttonText, setButtonText] = useState("Send")
  const [inProp, setInProp] = useState(false)

  const fileUpload = useRef(null)
  const noFile = useRef(null)

  const handleSubmit = e => {
    let state = { name, email, phone, position, resume, message }
    console.log(state)
    fetch("/careers", {
      method: "POST",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "job", ...state }),
    })
      .then(() => {
        console.log("Success!")
        setInProp(true)
        setButtonText("Thank you!")
        setName("")
        setEmail("")
        setPhone("")
        setPosition("")
        setResume(null)
        setMessage("")
        fileUpload.current.classList.remove("active")
        noFile.current.textContent = "No file chosen..."
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
      name="job"
      data-netlify="true"
      data-netlify-honeypot="bot-field-job"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field-job" />
      <input type="hidden" name="form-name" value="job" />

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
            {all_jobs.map(job => (
              <option key={job.id} value={job.title}>
                {job.title}
              </option>
            ))}
          </select>
        </div>

        {/* <div className="group-item">
          <input
            placeholder="Link to your resume*"
            type="text"
            name="resume"
            required
            value={resume}
            onChange={e => setResume(e.target.value)}
          />
        </div> */}

        {/* <div className="group-item">
          <div
            className="file-upload-wrapper"
            data-text={
              !filename ? "Upload resume..." : filename.replace(/.*(\/|\\)/, "")
            }
          >
            <input
              name="resume"
              type="file"
              accept=".pdf,image/*,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              value={filename}
              onChange={e => {
                setFilename(e.target.value)
                setResume(e.target.files[0])
              }}
            />
          </div>
        </div> */}

        <div className="group-item">
          <input
            name="resume"
            type="file"
            onChange={e => {
              setResume(e.target.files[0])
            }}
          />
        </div>

        {/* <div className="file-upload" ref={fileUpload}>
          <div className="file-select">
            <div className="file-select-button" id="fileName">
              Choose File
            </div>
            <div className="file-select-name" id="noFile" ref={noFile}>
              No file chosen...
            </div>
            <input
              type="file"
              name="resume"
              // accept=".pdf,image/*,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={e => {
                let filename = e.target.value
                if (e.target.files[0].size > 1048576) {
                  alert("File size exceeds the maximum capacity!")
                  return
                }
                setResume(e.target.files[0])
                if (/^\s*$/.test(filename)) {
                  fileUpload.current.classList.remove("active")
                  noFile.current.textContent = "No file chosen..."
                } else {
                  fileUpload.current.classList.add("active")
                  noFile.current.textContent = filename.replace(
                    "C:\\fakepath\\",
                    ""
                  )
                }
              }}
            />
          </div>
        </div> */}

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
          height: 35px;
        }
        input[type="text"],
        input[type="email"],
        textarea,
        select {
          font-size: 0.8rem;
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
        }

        select {
          padding-left: 0.3rem;
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

        .file-upload {
          display: block;
          text-align: center;
          font-size: 0.8rem;
        }
        .file-upload .file-select {
          display: block;
          border: 1px solid var(--white);
          color: var(--white);
          cursor: pointer;
          height: 35px;
          line-height: 40px;
          text-align: left;
          background: transparent;
          overflow: hidden;
          position: relative;
          transition: all 0.2s ease-in-out;
        }
        .file-upload .file-select .file-select-button {
          background: var(--blue);
          color: var(--white);
          padding: 0 10px;
          display: inline-block;
          height: 35px;
          // line-height: 40px;
        }
        .file-upload .file-select .file-select-name {
          // line-height: 40px;
          display: inline-block;
          padding: 0 10px;
        }
        .file-upload .file-select:hover {
          border-color: var(--blue);
        }
        .file-upload.active .file-select {
          border-color: var(--blue);
          box-shadow: 0px 0px 5px 0px var(--blue);
        }
        // .file-upload .file-select:hover .file-select-button {
        //   background: ;
        //   color: #ffffff;
        //   transition: all 0.2s ease-in-out;
        // }
        // .file-upload.active .file-select .file-select-button {
        //   background: #3fa46a;
        //   color: #ffffff;
        // transition: all 0.2s ease-in-out;
        // }
        .file-upload .file-select input[type="file"] {
          z-index: 100;
          cursor: pointer;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          filter: alpha(opacity=0);
        }
        .file-upload .file-select.file-select-disabled {
          opacity: 0.65;
        }
        .file-upload .file-select.file-select-disabled:hover {
          cursor: default;
          display: block;
          border: 2px solid #dce4ec;
          color: #34495e;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          margin-top: 5px;
          text-align: left;
          background: #ffffff;
          overflow: hidden;
          position: relative;
        }
        .file-upload
          .file-select.file-select-disabled:hover
          .file-select-button {
          background: #dce4ec;
          color: #666666;
          padding: 0 10px;
          display: inline-block;
          height: 40px;
          line-height: 40px;
        }
        .file-upload .file-select.file-select-disabled:hover .file-select-name {
          line-height: 40px;
          display: inline-block;
          padding: 0 10px;
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
          select,
          .file-upload .file-select {
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
