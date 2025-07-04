import { NavLink } from 'react-router'
import './fotter.css'
export default function Fotter(){
    return(
        <footer id="fotter">
            <hr />
            <p>@made with ❤️ Gcodes</p>
            <div>
                <div>
                    <h3>Important Links</h3>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="my-work">My Work</NavLink>
                    <a href='/#about-me'>About Me</a>
                </div>
                <div>
                    <h3>Social</h3>
                    <a href="https://github.com/THEMEGATRON76" target="_blank">Github</a>
                    <a href='https://www.instagram.com/rathoregeetansh/'target="_blank">Instagram</a>
                    <a href='https://www.linkedin.com/in/geetansh-rathore-078579140/' target="_blank">LinkedIn</a>
                </div>
                <div>
                    <h3>Other</h3>
                    <a href="">What I use</a>
                    <NavLink to="contact-me">Contact</NavLink>
                    <a href='/#recentProjects'>Recent projects</a>
                </div>
            </div>
        </footer>
    )
}