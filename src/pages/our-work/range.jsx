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
        title="Range Counselors"
        work="WEB DESIGN"
        cover="/img/portfolio/projects/range/cover.jpg"
      />
      <ProjectDetailsIntroduction 
        description="Range Counselors is a group of attorneys who help clients to establish, expand and divest their businesses through strategic, value-added consulting and legal services, combining specialist know-how, connections, local partners and execution expertise."
        client="RANGE COUNSELORS"
        date="2022"
        skills="Web Design, Web Development"
      />
      <ProjectDetailsImages 
        client="range"
      />
      <ProjectDetailsDescription 
        description="Range approach to us looking for a clean, simple and easy to navegate website. They wanted to highlight their international expertise in oil and gas counseling. We included team sections, contact forms, mobile responsiveness and a world view to showcase their business around the world."
      />
      
      <NextProject
        nextproject="/img/portfolio/projects/maistro-app/cover.jpg"
        projecturl="/our-work/maistro-app"
        projectTitle="NEXT PROJECT."
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
