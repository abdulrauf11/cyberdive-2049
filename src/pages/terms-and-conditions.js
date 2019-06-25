import React from "react"
import Layout from "../components/DefaultLayout.js"

const TermsAndConditions = () => {
  return (
    <Layout>
      <main>
        <div className="heading-wrapper">
          <h1>TERMS & CONDITIONS</h1>
        </div>
        <div className="text">
          <p>
            If you continue to browse and use this website, you are agreeing to
            comply with and be bound by the following terms and conditions of
            use. The following terms apply to your use of the Groovrick website
            located at https://groovrick.com, as owned and operated by Groovrick
            Inc. These terms and conditions apply whenever you access
            Groovrick's content, on whatever device. By using this website you
            are deemed to have accepted the following conditions. The term
            ‘Groovrick’ or ‘us’ or ‘we’ refers to the owner of the website,
            Groovrick Inc. Registered in Pakistan. The term ‘You’ or ‘Your’
            means any person or entity using the Site.
          </p>
          <p>
            The following Terms and Conditions of Use (the “Terms” or “Terms of
            Use”) apply to the access and use of our website, located at
            https://groovrick.com (collectively, the “Site”) including any
            content, functionality, services and premium services offered on the
            Site or any content or information provided as part of these
            services (collectively, the “Services”). The Terms of Use and the
            privacy policy constitute a legally-binding agreement between
            Groovrick and You. By accessing, registering for and/or using the
            Site and Services, you agree that you are bound by the terms and
            conditions of this Agreement, and you represent and warrant that you
            have full power, authority and legal capacity to enter into these
            Terms of Use. Also, by subscribing to any of our email services, you
            are deemed to have accepted these terms and conditions. If you
            register with Groovrick website, you should read our Privacy Policy.
            If you are using the Site or Services on behalf of a legal entity,
            you are individually bound by these Terms of Use even if your
            company has a separate agreement with us. If You do not agree to
            these Terms, please don’t use the Site. Groovrick has the right, but
            is not obligated, to strictly enforce the Terms through moderation,
            investigation, litigation and prosecution.
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
          content: "TERMS & CONDITIONS";
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

export default TermsAndConditions
