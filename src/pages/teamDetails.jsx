import MainHeader from "../components/mainHeader";
import TeamSection from "../sections/TeamDetailSection/teamSection";
import TeamDetail from "../sections/TeamDetailSection/teamDetail";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";

const TeamDetails = () => {
  const teamMembers = ["Team", "Team Members"];
  return (
    <>
      <Preloader />
      <MainHeader props1={teamMembers[0]} props2={teamMembers[1]} />
      <TeamSection />
      <TeamDetail />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamDetails;
