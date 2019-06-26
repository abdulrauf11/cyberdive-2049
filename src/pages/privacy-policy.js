import React from "react"
import Layout from "../components/DefaultLayout.js"
import SEO from "../components/SEO"

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO title="Groovrick | Privacy Policy" />
      <main>
        <div className="heading-wrapper">
          <h1>Privacy Policy</h1>
        </div>
        <div className="text">
          <p>
            Groovrick is committed to protecting your privacy on the Internet,
            and here we will explain our privacy policies regarding what
            information we collect, how we use it and how we keep it secure.
          </p>
          <p>
            We maintain this website to provide information about our company to
            clients, potential clients, partners, and anyone else interested in
            learning more about Groovrick. Our website also provides information
            of general interest to the advertising/content development/creative
            industry and community.
          </p>
          <p>
            For our internal use only, we may collect and store general
            information about what pages you access, the date and time of your
            visit, the number of times you visit, the average time spent on the
            site, your IP address and the name of the domain from which you
            accessed our site, the name of the Internet address of the web site
            from which you directly linked to our site and other similar data
            about how you and our other visitors use our site.
          </p>
          <p>
            On the Groovrick's website, we collect names and email addresses
            from visitors who wish to contact us and voluntarily provide us with
            their personal information. We also receive resumes and creative
            submissions that contain personal information. We use this
            information for internal purposes only and do not share it with
            other organizations. We do not send unsolicited emails to anyone who
            provides us with their email through our site.
          </p>
          <p>
            Our websites contains "links" to many other sites, and we make every
            effort to only link to sites that share our high standards and
            respect for privacy. However, we are not responsible for the content
            or the privacy practices employed by other sites.
          </p>
          <p>
            For complaints, you can contact us directly at{" "}
            <a href="mailto:contact@groovrick.com">contact@groovrick.com</a>.
          </p>
        </div>
      </main>
      <style jsx>{`
        main {
          width: 70%;
          margin: 0 auto 4rem auto;
        }
        .heading-wrapper {
          margin-bottom: 0;
        }
        .heading-wrapper h1 {
          width: 100%;
        }
        .heading-wrapper h1:before {
          content: "Privacy Policy";
          width: 100%;
        }
        a {
          color: var(--pink);
        }

        @media only screen and (max-width: 600px) {
          main {
            width: 85%;
          }
        }
      `}</style>
    </Layout>
  )
}

export default PrivacyPolicy
