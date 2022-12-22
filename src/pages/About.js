import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br />
              <span className="span-tag body">{'<body>'}</span>
              <br />
              <span className="span-tag content">{'<h1>'}</span>
              <h1 className="title-about">Hi,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br />
              <span className="span-tag content">{'<p>'}</span>
              <p className="text-about">
                My name is <span className="span-highlight">Sam (Usama Tufail)</span> and I love to solve problems through codes. I had a degree in Mechanical Engineering but then switched careers around about 5 years ago and learned Web App Development, currently I am working as a <span className="span-highlight">Full Stack Web Developer.</span>
              </p>
              <p className="text-about">
                My focus is to be able to help improve people's lives by developing applications that are <span className="span-highlight">accessible and functional</span>. My Experience includes troubleshooting and testing, working in teams, and using agile/scrum.
              </p>
              <p className="text-about last">
                My relevant skills include: <span className="span-highlight">Html, CSS, JavaScript, Git/Github, React, Redux, ContextAPI, Hooks, Nest.js, Express.js, MySQL, MongoDB, Node.js, and Jest etc.</span>
              </p>
              <span className="span-tag content">{'</p>'}</span>
              <br />
              <span className="span-tag body">{'</body>'}</span>
              <br />
              <span className="span-tag html">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;