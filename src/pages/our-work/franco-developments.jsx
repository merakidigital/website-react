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
        title="Franco Developments"
        work="BRANDING"
        cover="/img/portfolio/projects/franco-developments/cover.jpg"
      />
      <ProjectDetailsIntroduction 
        description="Franco Developments is a real estate development company in Houston, TX. They are currently working on several projects across the city and they specialize on luxury high end custom houses."
        client="Franco Developments"
        date="2022"
        skills="Logo, Branding"
      />
      <ProjectDetailsImages 
        client="franco-developments"
      />
      <ProjectDetailsDescription 
        description="Our focus with this projects was to create a stylish logo but also that represent the company statement. The logo had to be friendly but also inspire professionalism and high end services."
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
