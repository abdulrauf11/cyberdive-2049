import React, { useState, useEffect } from "react";
import Button from "./Button";
import { CSSTransition } from "react-transition-group";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [inProp, setInProp] = useState(false);

  const handleSubmit = e => {
    let state = { name, email, phone, company, message };
    fetch("/connect", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state })
    })
      .then(() => {
        console.log("Success!");
        setInProp(true);
        setButtonText("Thank you!");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
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
      action="#"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <div className="group">
        <div className="group-item">
          <label>
            Your Name*
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="group-item">
          <label>
            Your Email*
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="group-item">
          <label>
            Your Contact No.
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </label>
        </div>
        <div className="group-item">
          <label>
            Your Company*
            <input
              type="text"
              name="company"
              value={company}
              required
              onChange={e => setCompany(e.target.value)}
            />
          </label>
        </div>
        <div className="group-item">
          <label>
            Tell us about your project
            <textarea
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </label>
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
          position: relative;
        }
        .group {
          margin: 2rem 0;
        }
        .group-item {
          margin: 2rem 0;
        }
        label {
          font-size: 0.8rem;
        }
        input[type="text"],
        input[type="email"] {
          height: 35px;
        }
        input[type="text"],
        input[type="email"],
        textarea {
          font-size: 0.8rem;
          color: var(--white);
          width: 100%;
          background: transparent;
          transition: all 0.3s ease-in-out;
          outline: none;
          padding: 0.5rem;
          margin-top: 1rem;
          border: 1px solid var(--white);
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus {
          box-shadow: 0px 0px 5px 0px var(--blue);
          padding: 0.5rem;
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

        @media only screen and (min-width: 2500px) {
          input[type="text"],
          input[type="email"] {
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

export default Contact;
