import RecentProjects from "../components/RecentProjects";
import TechTag from "../components/TechTag";
import "./home.css";
import cmis from "../assets/workWebsite/Cedric.png";
import reactNative from "../assets/symbols/icons8-react-48.png";
import ContactMe from "../components/ContactMe";
import{techIknow} from "../data/techIknow"
export default function Home() {
  const porjObj = [
    {
      heading: "CMIS",
      date: "12/12/41",
      desc: "It was an react native project focused for the delivery drivers and their operation",
      picture: cmis,
      alt: "cmis poject",
      techs: [
        { name: "React Native", img: reactNative, alt: "reactnative" },
        { name: "React Native", img: reactNative, alt: "reactnative" },
      ],
      url: "https://www.cedricmillar.com/",
    },
    {
      heading: "CMIS",
      date: null,
      desc: "It was an react native project focused for the delivery drivers and their operation",
      picture: cmis,
      alt: "cmis poject",
      techs: [
        { name: "React Native", img: reactNative, alt: "reactnative" },
        { name: "React Native", img: reactNative, alt: "reactnative" },
      ],
      url: null,
    },
  ];
  return (
    <>
      <section id="about-me">
        <div className="PictureCard">
          <h3>ABOUT ME</h3>
          <h1>Hey, I'm Geetansh</h1>

          <p>
            Full Stack dev from Jaipur transforming coffee into fast, sleek
            apps. 3+ years of being awesome with React, Vue, Node.js & beyond. I
            combine logic, design, and a pinch of magic to make real problems
            look stunning. Always coding, always learning, always pushing pixels
            and possibilities.
          </p>
          <div>
            <h3>🚀 MY MISSION</h3>
            <p>
              To merge the art of design with the science of development —
              creating user-first applications that perform as great as they
              look. I believe in clean code, smooth UX, and delivering results
              that speak. Keep building. Keep learning. Never settle. 🛠️✨
            </p>
          </div>
        </div>
        {/* TOOD: Add logic for the orignal data from github*/}
        <div className="GitHubData">
          <a href="">
            <i class="fa-solid fa-star"></i> 0 stars
          </a>
          <a href="">
            <i class="fa-solid fa-code-fork"></i> 0 repositories forks
          </a>
          <a href="">
            <i class="fa-solid fa-code-branch"></i> 0 commits{" "}
          </a>
          <a href="">
            <i class="fa-solid fa-users"></i> 0 Github followers
          </a>
        </div>

        <div className="aboutContent">
          <h1>About me .</h1>
          <div>
            <div className="paras">
              <p>
                My journey began with curiosity and a stubborn Google search,
                “how to build a website.” What started as basic HTML and CSS
                turned into late-night experiments and an increasing obsession
                with how things work behind the scenes.
              </p>
              <p>
                As my passion grew, so did my skills. I explored JavaScript and
                mastered frameworks like React and Vue. I also worked with
                Node.js. Each bug, build, and breakthrough taught me something
                new; I learned about clean architecture and performance
                optimization.
              </p>
              <p>
                Now, with over 3 years of experience, I focus on creating apps
                that are not only functional but also enjoyable. Whether I’m
                designing smooth UIs or writing logic that simply works, I’m
                still learning, still building, and still just getting started.
              </p>

              <div>
                <button className="gitHubButton button">
                  <i class="fa-brands fa-github"></i> View my Github{" "}
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
                <button className="contactMeButton button">
                  <i></i>Contact Me <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="flashCard">
              <h3>
                <i class="fa-solid fa-file-code codefile"></i> MY STUDIO
              </h3>
              <p>
                Hey there! 👋 I'm Geetansh welcome to my digital playground.
                More than just a portfolio, this is where creativity, code, and
                curiosity collide. Dive in and explore my journey.
              </p>
              <button>Download CV</button>

              <div>
                <div className="smallCard">
                  <i class="fa-solid fa-laptop-code codefile"></i>
                  <h4>Web Development</h4>
                  <p>
                    Building high-performance websites with clean code and
                    strong SEO fundamentals.
                  </p>
                </div>

                <div className="smallCard smallMargin">
                  <i class="fa-solid fa-paintbrush codefile"></i>
                  <h4>UI / UX</h4>
                  <p>
                    Crafting modern, intuitive user interfaces that engage and
                    convert users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecentProjects projects={porjObj} page="home" />
      <div className="sectionSkills">
        <h1>Technologies I use.</h1>
        <p>
          Over the years, I have worked with a variety of technologies. Here are
          some of the technologies I have experience with:
        </p>
        <div id="TechDiv">
          {techIknow.map((tech,index)=>{
            return <TechTag name={tech.name} img={tech.img} alt={tech.alt} key={index} />
          })}
        </div>
        <p className="centerpara">...and many more</p>
      </div>
      <ContactMe />
    </>
  );
}
