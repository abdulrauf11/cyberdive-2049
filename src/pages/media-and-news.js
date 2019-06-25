import React, { useState, useEffect } from "react"
import Layout from "../components/DefaultLayout.js"
import fetch from "isomorphic-unfetch"
import { TweenMax } from "gsap"
import Loader from "../components/Loader.js"

const MediaAndNews = () => {
  const [loaded, setLoaded] = useState(false)
  const [feed, setFeed] = useState(null)
  const postElements = []
  let timeout

  useEffect(() => {
    TweenMax.staggerTo(postElements, 0.75, { y: 0, opacity: 1 }, 0.3)
  }, [postElements])

  useEffect(() => {
    insta()
    return function cleanup() {
      clearTimeout(timeout)
    }
  }, [])

  async function insta() {
    const res = await fetch(
      "https://api.instagram.com/v1/users/self/media/recent/?access_token=6148790221.f4a30c6.f296d24ee8174b5e97b09684ad271f3e"
    )
    const data = await res.json()
    console.log(`Show data fetched. Count: ${data.data.length}`)
    setFeed(data.data.map(entry => entry))
    timeout = setTimeout(() => setLoaded(true), 1000)
  }

  if (!loaded) return <Loader />

  return (
    <Layout>
      <main>
        <div className="heading-wrapper">
          <h1>MEDIA & NEWS</h1>
        </div>

        <ul className="grid">
          {feed &&
            feed.slice(0, 12).map((post, index) => (
              <li key={post.id} ref={li => (postElements[index] = li)}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={post.link}
                  className="post"
                  style={{
                    backgroundImage: `url(${post.images.standard_resolution.url})`,
                    color: "transparent",
                  }}
                >
                  InstaPost
                </a>
              </li>
            ))}
        </ul>
      </main>
      <style jsx>{`
        main {
          width: 70%;
          margin: 0 auto;
        }
        .heading-wrapper h1 {
          text-align: center;
          width: 100%;
        }
        .heading-wrapper h1:before {
          content: "MEDIA & NEWS";
          width: 100%;
          text-align: center;
        }

        .grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 5rem;
        }
        .grid li {
          opacity: 0;
          transform: translateY(15px);
          width: 20vmax;
          height: 20vmax;
          margin: 1rem;
          border: 1px solid var(--pink);
          overflow: hidden;
        }
        .post {
          width: 100%;
          height: 100%;
          display: block;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease-in-out;
        }
        .grid li:hover .post,
        .grid li:focus .post {
          transform: scale(1.05);
        }

        a:hover {
          opacity: 1;
        }

        @media only screen and (max-width: 600px) {
          main {
            width: 100%;
          }
          .grid li {
            margin: 0rem;
            height: 30vmax;
            flex: 1 1 50%;
          }
        }
      `}</style>
    </Layout>
  )
}

export default MediaAndNews
