import React from "react";
import NavBar from "./Navbar";
import ProfileSection from "./profileComponent";
import Summary from "./Summary";
const HomePage = () => {
  return (
    <div>
      <section id="Home">
        <NavBar/>
        <ProfileSection/>
        <Summary/>
      </section>
      <section id="Services">
        <h2>Section 2</h2>
        {/* Add your content for Section 2 */}
      </section>
      <section id="Skills">
        <h2>Section 3</h2>
        {/* Add your content for Section 3 */}
      </section>
      <section id="Resume">
        <h2>Section 4</h2>
        {/* Add your content for Section 4 */}
      </section>
      <section id="Contact">
        <h2>Section 5</h2>
        {/* Add your content for Section 4 */}
      </section>
    </div>
  );
};

export default HomePage;