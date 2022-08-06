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
        title="Maistro App"
        work="UI DESIGN"
        cover="/img/portfolio/projects/maistro-app/cover.jpg"
      />
      <ProjectDetailsIntroduction 
        description="lorem impusuausfasfasasf"
        client="MAISTRO APP"
        date="2022"
        skills="UI DESIGN"
      />
      <ProjectDetailsImages 
        client="maistro-app"
      />
      <ProjectDetailsDescription 
        description=" We design custom wireframes for this website. Once approved we moved into production staged and develop the website along with dynamic sections and booking system integration."

      />
      
      <NextProject
        nextproject="/img/portfolio/projects/ace-logistics/cover.jpg"
        projecturl="/our-work/ace-logistics"
        projectTitle="NEXT PROJECT."
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
