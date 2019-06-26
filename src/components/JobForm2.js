import React from "react"
import all_jobs from "../models/jobs.json"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
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
      body: encode({ "form-name": "job-post", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>File Upload</h1>
        <form
          name="job-post"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field-new2"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field-new2" onChange={this.handleChange} />
            </label>
          </p>

          {/* <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              File:
              <br />
              <input
                type="file"
                name="attachment"
                onChange={this.handleChange}
              />
            </label>
          </p> */}
          <div className="group">
            <div className="group-item">
              <input
                type="text"
                name="name"
                required
                onChange={this.handleChange}
                placeholder="Full Name*"
              />
            </div>
            <div className="group-item">
              <input
                type="email"
                name="email"
                required
                onChange={this.handleChange}
                placeholder="Email*"
              />
            </div>
            <div className="group-item">
              <input
                type="text"
                name="phone"
                required
                onChange={this.handleChange}
                placeholder="Phone*"
              />
            </div>
            <div className="group-item">
              <select name="position" onChange={this.handleChange}>
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
                name="message"
                onChange={this.handleChange}
                placeholder="Tell us what inspires you to join Groovrick"
              />
            </div>
          </div>

          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    )
  }
}
