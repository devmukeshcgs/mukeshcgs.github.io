import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSPlugin from "gsap/CSSPlugin"
import { useLayoutEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin);
}

const HomeNew = () => {
  let elRefWrapper = useRef(null);
  let elRef = useRef(null);
  let elRef2 = useRef(null);

  useEffect(() => {
    const elWrapper = elRefWrapper.current;
    const el = elRef.current;
    const el2 = elRef2.current;

    // REFERANCE CODE
    // gsap.utils.toArray('section.skills').forEach((section, index) => {
    //   const w = section.querySelector('.wrapper');
    //   // const w = elWrapper;
    //   // console.log("W", section.sc)
    //   const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [section.scrollWidth * -1, 0];
    //   gsap.fromTo(elWrapper, { x }, {
    //     x: xEnd,
    //     scrollTrigger: {
    //       trigger: section,
    //       scrub: 0.5
    //     }
    //   });
    // });

    gsap.fromTo("#soft-wrapper",
      { x: el.scrollWidth },
      {
        x: [el.scrollWidth * -1, 0],
        scrollTrigger: {
          trigger: "#soft-wrapper",
          scrub: 0.5
        }
      }
    );
    // gsap.fromTo("#soft-wrapper2",
    //   { x: 0 },
    //   {
    //     x: ["100%", (el2.scrollWidth - elRef2.offsetWidth) * -1],
    //     scrollTrigger: {
    //       trigger: "#soft-wrapper2",
    //       scrub: 0.5
    //     }
    //   }
    // );
  }, []);
  return (<>
    <section className="">
      <div className="my-name">
        <h1>
          mukesh thankar
        </h1>
        <p>
          designer
          <span>|</span>
          developer
        </p>

      </div>
    </section>
    <section className="">
      <div>
        <div className="page-heading"><span className="overlay22"></span>Me</div>
        <div className="wow fadeInUp"
          data-wow-delay="0.3s">
          <p>I am <span className="mt">Mukesh Thankar</span>, a graphic designer and web developer living
            in Mumbai, India. I am primarily focused on web design, and development but love taking
            on any good design/development challenge. I love getting to collaborate with clients to
            find a strategic and creative solution for any and all of their design needs. When I am
            not designing, you can find me drawing, playing games.</p>
        </div>
      </div>
    </section>
    <section className="skills" ref={elRefWrapper}>
      <div className="wrapper" id="soft-wrapper" ref={elRef}>
        <div>Adobe Photoshop</div>
        <div>Coral Draw</div>
        <div>Adobe Illustrator</div>
        <div>HTML5</div>
        <div>CSS3+</div>
        <div>Javascript</div>
        <div>React JS</div>
        <div>Stimulus JS</div>
      </div>
    </section>
    {/* <section className="skills" ref={elRefWrapper}>
      <div className="wrapper" id="soft-wrapper2" ref={elRef2}>
        <div>Adobe Photoshop</div>
        <div>Coral Draw</div>
        <div>Adobe Illustrator</div>
        <div>HTML5</div>
        <div>CSS3+</div>
        <div>Javascript</div>
        <div>React JS</div>
        <div>Stimulus JS</div>
      </div>
    </section> */}
    <section>
      <div className="work-experience">
        <h1>Work Experience
        </h1>
        <ul className="work-exp">
          <li>
            <div className="skill-name">Navneet Futuretech Ltd.</div>
            <div className="skill-type">Front-end Developer</div>
            <div className="skill-time">Jan 2022 - Present</div>
          </li>
          <li>
            <div className="skill-name">Coinlock LLC</div>
            <div className="skill-type">Front-end Developer</div>
            <div className="skill-time">Apr 2021 - Jan 2022</div>
          </li>
          <li>
            <div className="skill-name">McCann World group</div>
            <div className="skill-type">Front-end Developer</div>
            <div className="skill-time">Sept 2018 - Aug 2020</div>
          </li>
          <li>
            <div className="skill-name">Astrika Infotech Pvt. Ltd.</div>
            <div className="skill-type">Front-end Developer</div>
            <div className="skill-time">Jully 2014 - Sept 2018</div>
          </li>
          <li>
            <div className="skill-name">Hotels &amp; More Pvt. Ltd.</div>
            <div className="skill-type">Web
              Designer &amp; Developer</div>
            <div className="skill-time">May 2013 - June 2014</div>
          </li>
          <li>
            <div className="skill-name">Black Ant Pvt. Ltd.</div>
            <div className="skill-type">Graphic
              Designer</div>
            <div className="skill-time">Nov 2007 - May 2013</div>
          </li>
        </ul>
      </div>
    </section>
  </>
  );
};

export default HomeNew;
