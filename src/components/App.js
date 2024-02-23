import NavBar from "./Navbar";
import Summary from "./Summary";
import ProfileSection from "./profileComponent";
import ServicesProviding from "./MyServices";
import SkillSection from "./SkillSection";
import ResumeSection from "./ResumeSection";
import ContactMeSection from "./ContactSection";
import FooterSection from "./FooterSection";

function App() {
  return (
    <div>
      <NavBar />
      <ProfileSection />
      <Summary />
      <hr className="divider" />
      <ServicesProviding />
      <hr className="divider" />
      <SkillSection />
      <hr className="divider" />
      <ResumeSection />
      <hr className="divider" />
      <ContactMeSection />
      <hr className="divider" />
      <FooterSection />
    </div>
  );
}

export default App;