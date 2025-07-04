import RecentProjects from "../components/RecentProjects";
import {porjObj} from "../data/myWorkData"
import "./work.css"

export default function Work() {
  function handdleClick(){
    window.open("https://github.com/THEMEGATRON76","_blank")
  }
  return (
    <>
      <h1>My Work.</h1>
      <p>
        🚀I’ve been coding for 3+ years. I build cool things, break them (on
        purpose 😎), and learn a lot. 💻Below are some of my latest ✨ projects.
        If you want to see more, feel free to dig through my GitHub treasure
        chest!🧑‍💻📦
      </p>
      <RecentProjects projects={porjObj} page="work" />
      <p>
        Want to see more? Check out my GitHub profile for more projects and
        contributions.
      </p>
      <button className="workgitHubButton button" onClick={handdleClick}>
        <i class="fa-brands fa-github"></i> View my Github{" "}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </>
  );
}
