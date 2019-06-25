import React, { useState, useEffect } from "react";
import Button from "./Button";
import all_jobs from "../models/jobs.json";
import { CSSTransition } from "react-transition-group";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function JobForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [resume, setResume] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [inProp, setInProp] = useState(false);

  const handleSubmit = e => {
    let state = { name, email, phone, position, resume, message };
    fetch("/careers", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "job", ...state })
    })
      .then(() => {
        console.log("Success!");
        setInProp(true);
        setButtonText("Thank you!");
        setName("");
        setEmail("");
        setPhone("");
        setPosition("");
        setResume("");
        setMessage("");
      })
      .catch(error => {
        console.log(error);
        setInProp(true);
        setButtonText("Try Again!");
      });
    e.preventDefault();
  };

  useEffect(() => {
    if (buttonText === "Send") {
      setInProp(false);
    }
    let timeout = setTimeout(() => {
      setButtonText("Send");
    }, 2000);
    return function cleanup() {
      clearTimeout(timeout);
    };
  }, [buttonText]);

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
              <option key={job.id} value={job.id}>
                {job.title}
              </option>
            ))}
          </select>
        </div>

        <div className="group-item">
          <input
            placeholder="Link to your resume*"
            type="text"
            name="resume"
            required
            value={resume}
            onChange={e => setResume(e.target.value)}
          />
        </div>

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
              // required
              value={filename}
              onChange={e => {
                setFilename(e.target.value);
                setResume(e.target.files[0]);
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

        .file-upload-wrapper {
          position: relative;
          height: 35px;
        }
        .file-upload-wrapper:after {
          content: attr(data-text);
          position: absolute;
          font-size: 0.8rem;
          color: var(--white);
          width: 100%;
          height: 100%;
          background: transparent;
          outline: none;
          padding: 0.5rem;
          border: 1px solid var(--white);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .file-upload-wrapper:before {
          display: flex;
          align-items: center;
          content: "Upload";
          position: absolute;
          font-size: 0.7rem;
          font-weight: 600;
          top: 0;
          right: 0;
          padding: 0 1rem;
          background: var(--blue);
          border-left: 1px solid var(--white);
          height: 100%;
          z-index: 20;
        }

        input[type="file"] {
          opacity: 0;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 99;
          margin: 0;
          padding: 0;
          cursor: pointer;
          width: 100%;
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
  );
}

export default JobForm;
