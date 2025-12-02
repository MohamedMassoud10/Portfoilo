import React, { Fragment } from "react";
import Head from "next/head";
import Hero from "./component/UI/Hero";
import Services from "./component/UI/Services";
import "remixicon/fonts/remixicon.css";
import About from "./component/UI/About";
import Header from "../pages/component/Header/Header";
import Footer from "../pages/component/Footer/Footer";
import Portfolio from "./component/UI/Portfolio";
import Contact from "./component/UI/Contact";
import Experience from "./component/UI/Experience";
import Education from "./component/UI/Education";
import Languages from "./component/UI/Languages";
import ScrollToTop from "./component/UI/ScrollToTop";

const Home = () => {
  const siteUrl = "https://massoud-one.vercel.app";
  const siteImage = `${siteUrl}/images/potfolio.jpg`;
  const description = "Mohamed Massoud - Software Engineer (Full-Stack + Mobile Developer). Passionate about building scalable and user-friendly applications with React, Node.js, React Native, and AI-powered tools.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Massoud",
    "jobTitle": "Software Engineer",
    "description": description,
    "url": siteUrl,
    "image": siteImage,
    "sameAs": [
      "https://github.com/MohamedMassoud10",
      "https://www.linkedin.com/in/mohamed-one/",
      "https://www.facebook.com/profile.php?id=100009364761197&mibextid=ZbWKwL"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zagazig",
      "addressRegion": "Sharkia",
      "addressCountry": "Egypt"
    },
    "email": "mohameddmassoud@gmail.com",
    "telephone": "+201117590703"
  };

  return (
    <Fragment>
      <Head>
        <title>Mohamed Massoud - Software Engineer | Full-Stack & Mobile Developer</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Mohamed Massoud, Software Engineer, Full-Stack Developer, Mobile Developer, React, Node.js, React Native, TypeScript, MERN Stack" />
        <meta name="author" content="Mohamed Massoud" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Mohamed Massoud - Software Engineer" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content="Mohamed Massoud - Software Engineer" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={siteImage} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <link rel="canonical" href={siteUrl} />
      </Head>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
};

export default Home;
