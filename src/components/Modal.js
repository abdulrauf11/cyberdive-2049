import React, { useState, useEffect, useRef } from "react"
import { TimelineMax, Elastic } from "gsap/all"
import Button from "./Button"
import ButtonClose from "./ButtonClose"

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false)
  const modalContainer = useRef(null)
  const cardContainer = useRef(null)
  var t1 = new TimelineMax({ paused: false })
  var t2 = new TimelineMax({
    paused: false,
  })

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    t2.to(cardContainer.current, 0.5, { x: -100, opacity: 0 })
      .to(modalContainer.current, 0.3, { opacity: 0 })
      .add(() => setIsOpen(false))
  }

  useEffect(() => {
    if (!modalContainer.current && !cardContainer.current) return
    t1.to(modalContainer.current, 0.3, { opacity: 1 }).to(
      cardContainer.current,
      2,
      { ease: Elastic.easeOut, x: 0, opacity: 1 }
    )
  }, [t1])

  return (
    <>
      <span onClick={handleOpen}>
        <Button>{props.tag}</Button>
      </span>
      {isOpen && (
        // ReactDOM.createPortal(
        <section className="modal-content" ref={modalContainer}>
          <div className="card" ref={cardContainer}>
            <div className="close-wrapper" onClick={handleClose}>
              <ButtonClose />
            </div>
            <div className="body">{props.children}</div>
          </div>
        </section>
      )
      // ,document.body)
      }
      <style jsx>{`
        .close-wrapper {
          position: absolute;
          right: 0.5rem;
          top: 1rem;
        }

        .modal-content {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 10000;
          transform: translateZ(0);
          background-color: rgba(0, 0, 0, 0.9);
          opacity: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          position: fixed;
          -webkit-overflow-scrolling: touch;
          overflow-y: auto;
          width: 40%;
          max-width: 700px;
          border: 1px solid var(--pink);
          transform: translateX(-100px);
          opacity: 0;
          background: var(--black);
        }

        .body {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 200px;
          padding: 0rem 2rem;
        }

        @media only screen and (max-width: 600px) {
          .card {
            width: 90%;
          }
          .body {
            padding: 0;
          }
          .close-wrapper {
            right: 0rem;
            top: 0.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default Modal
