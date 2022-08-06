import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import ProjectDetailsIntroduction from "../../components/Project-details-introduction";
import ProjectDetailsImages from "../../components/Project-details-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsHeader from "../../components/Project-details-header";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";
const ProjectDetailsDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetailsHeader 
        title="Onesweat"
        work="WEB DESIGN"
        cover="/img/portfolio/projects/onesweat/cover.jpg"
      />
      <ProjectDetailsIntroduction 
        description="SWEAT concept is unique in that it offers treadmill users the ability to have a great workout, in a class environment, book your class now."
        client="Onesweat"
        date="2021"
        skills="Web Design, Web Development, Integrations"
      />
      <ProjectDetailsImages 
        client="onesweat"
      />
      <ProjectDetailsDescription 
        description="We design custom wireframes for this website. Once approved we moved into production staged and develop the website along with dynamic sections and booking system integration."
      />
      
      <NextProject
        nextproject="/img/portfolio/projects/range/cover.jpg"
        projecturl="/our-work/range"
        projectTitle="NEXT PROJECT."
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
