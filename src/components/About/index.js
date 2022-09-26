import React from "react";
import headshot from "../../assets/images/headshot.png";

// ABOUT COMPONENT
function About() {
  return (
    <section className="sections">
      <h2>About Me</h2>
      <div className="section-content">
        <div className="about-me">
          <img src={headshot} alt="Selfie style headshot of Abby Graves subtly smiling." />
          <p>
            Welcome! My name is Abby. I live in St. Paul, MN and I am currently
            a student in the coding and web development bootcamp through the
            University of Minnesota. I love creative projects that involve using
            your imagination along with crititcal thinking. I consider my
            creativty to be one of my most influential strengths that will aid
            in my success to becoming a developer and for the rest of my career.
            Not only am I very creative, but also very analytical. Problem
            solving and challenges are what drive me.
            <br />
            <br />
            I have a strong interest in UI/UX Design. I am an artist and I
            have spent years learning the in's and out's of programs such as
            Adobe Photoshop and other photo/video editing softwares as well.
            These skills have taught me a lot of what goes into digital art and
            design and gives me a great foundation to work off of. I'm very
            passionate about learning and finding new ways to challenge myself
            in my work. I look forward to all the new experiences and
            opportunities that lie ahead!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
