import TechTag from "./TechTag";
import "./recentProjects.css";
import { useNavigate } from "react-router";


export default function RecentProjects({ projects,page="work" }) {
  // THIS PAGE WOULD BE BUILD DINAMICALLY WE WILL SEND IN AN ARRAY OF OBJECTS CONTAINING DETAILS ABOUT THE PROJETCS AND THERE WOULD BE A PROP THAT WOULD BE USED TO DESTINCT FROM WHERE THE PAGE HAVE BEEN CALLED FOR EG(HOMEPAGE, WORKPAGE)
   const navigate = useNavigate();
  const handleClick = () => {
     navigate('my-work');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    // window.open('https://example.com', '_blank');
  };
  return (
    <>
      <h1>Recent projects</h1>
      {projects.map((item) => {
        return (
          <div id="projects">
            <h2>{item.heading}</h2>
            {item.date && <p className="dateProjects">{item.date}</p>}
            <p>{item.desc}</p>
            <img src={item.picture} alt={item.alt} />
            <div>
              {item.techs.map((tech) => {
                return (
                  <TechTag name={tech.name} img={tech.img} alt={tech.alt} />
                );
              })}
            </div>
            {item.url && (
              <button
                className="button"
                onClick={() => {
                  window.open(item.url);
                }}
              >
                <i class="fa-solid fa-link"></i> Visit Site <i class="fa-solid fa-arrow-right"></i>
              </button>
            )}
          </div>
        );
      })}

      {page === "home" && 
      <div className="moreProjects">
        <p>Want to see more?</p>
        <button className="button " onClick={handleClick}>View all projects <i class="fa-solid fa-arrow-right"></i></button>
      </div>}
    </>
  );
}
