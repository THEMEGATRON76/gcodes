import RecentProjects from "../components/RecentProjects";
import cmis from "../assets/workWebsite/Cedric.png";
import reactNative from "../assets/symbols/icons8-react-48.png";

export default function Work() {
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
      <button className="gitHubButton button">
        <i class="fa-brands fa-github"></i> View my Github{" "}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </>
  );
}
