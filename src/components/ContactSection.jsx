import React from "react";

function ContactMeSection() {
  return (
    <div>
      <h1 id="section-heading">Contact Me</h1>
      <div className="form-container">
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="">Email:</label>
          <input type="text" id="email" name="email" required />

          <label htmlFor="">Message:</label>
          <textarea name="message" id="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMeSection;
