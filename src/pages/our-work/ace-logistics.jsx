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
        title="Ace Logistics"
        work="BRANDING"
        cover="/img/portfolio/projects/ace-logistics/cover.jpg"
      />
      <ProjectDetailsIntroduction 
        description="Ace Logistics is a licensed and bonded freight shipping and trucking company running freight hauling business from Houston, Texas."
        client="ACE Logistics"
        date="2022"
        skills="Logo, Branding"
      />
      <ProjectDetailsImages 
        client="ace-logistics"
      />
      <ProjectDetailsDescription 
         description="Our client wanted a logo with boldness and strong presence for his company. We created a minimalist logo that combined the ace with a more sutile style to create the feel of a responsible and professional company."
      />
      
      <NextProject
        nextproject="/img/portfolio/projects/onesweat/cover.jpg"
        projecturl="/our-work/onesweat"
        projectTitle="NEXT PROJECT."
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
