import React from "react"
import Button from "./Button"
import all_jobs from "../models/jobs.json"
// import { CSSTransition } from "react-transition-group"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

class JobForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    if (e.target.files) {
      this.setState({ [e.target.name]: e.target.files[0] })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleSubmit = e => {
    console.log(this.state)
    fetch("/careers", {
      method: "POST",
      body: encode({ "form-name": "application", ...this.state }),
    })
      .then(() => {
        console.log("Success!")
      })
      .catch(error => alert(error))
    e.currentTarget.reset()

    e.preventDefault()
  }
  render() {
    return (
      <form
        name="application"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field-application"
        onSubmit={this.handleSubmit}
      >
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field-application" onChange={this.handleChange} />
          </label>
        </p>

        <div className="group">
          <div className="group-item">
            <input
              placeholder="Full Name*"
              type="text"
              name="name"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="group-item">
            <input
              placeholder="Email*"
              type="email"
              name="email"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="group-item">
            <input
              placeholder="Phone*"
              type="text"
              name="phone"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="group-item">
            <select
              name="position"
              defaultValue={
                this.props.defaultPosition ? this.props.defaultPosition : ""
              }
              onChange={this.handleChange}
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

          <div className="group-item">
            <label className="file-upload">
              Upload resume:
              <span>
                <input
                  type="file"
                  name="attachment"
                  onChange={this.handleChange}
                />
              </span>
            </label>
          </div>

          <div className="group-item">
            <textarea
              placeholder="Tell us what inspires you to join Groovrick"
              name="message"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="button-wrapper">
          <Button>
            {/* <CSSTransition in={inProp} timeout={200} classNames="button-text">
              <div>{buttonText}</div>
            </CSSTransition> */}
            <div>Send</div>
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
            font-size: 0.8rem;
          }
          .file-upload input {
            width: 100%;
            margin: 1rem 0;
            border: 1px solid var(--blue);
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
}

export default JobForm
