import { useState } from "react";
import "./contactMe.css";
import Textbox from "./TextBox";
import insta from '../assets/symbols/icons8-instagram-logo-48.png'
import fb from '../assets/symbols/icons8-facebook-48.png'
import linkedIn from '../assets/symbols/icons8-linkedin-48.png'

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO:need to atach to API
    console.log("Form Data:", formData);
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Description:", formData.description);
  };

  return (
    <div id="ContactMe">
      <h1>Contact me .</h1>

      <p>
        I'm always ready for a new adventure 🚀. Whether it’s an interesting
        project 💻, a fun collaboration 🎨, or just a good chat ☕, I'm in. If
        you have something in mind, don’t hesitate to reach out; let’s create
        something great together!✨
      </p>
      <div className="formCard">
        <form onSubmit={handleSubmit}>
          <div className="TextboxesPlacement">
            <Textbox
              label="Name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleInputChange("name")}
            />

            <Textbox
              label="Email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange("email")}
              required
            />
          </div>

          <Textbox
            label="Description"
            type="textarea"
            placeholder="Enter your description here..."
            showCounter
            maxLength={500}
            value={formData.description}
            onChange={handleInputChange("description")}
            required
          />
          <button className="button " type="submit">
            <i class="fa-solid fa-paper-plane"></i> Send
          </button>
        </form>
      </div>
      <p>Or contcat me with ...</p>
      <div className="socilas">
        <button className="button"><i class="fa-solid fa-envelope"></i> Email <i class="fa-solid fa-arrow-right"></i></button>
        <button className="button"><img src={insta} width={30} />Intagram <i class="fa-solid fa-arrow-right"></i></button>
        <button className="button"><img src={fb} width={30} alt="" />Facebook <i class="fa-solid fa-arrow-right"></i></button>
        <button className="button"><img src={linkedIn} alt="" width={30} />LinkedIn <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
