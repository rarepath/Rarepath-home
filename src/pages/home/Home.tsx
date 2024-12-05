import Team from "./sections/Team";
import Faq from "./sections/faq";
import AboutUs from "./sections/AboutUs";
import Closer from "./sections/Closer";
import Pdf from "./sections/Pdf";
import GridBg from "./sections/GridBg";
import CallToActionWithAnnotation from "./sections/CallToActionWithAnnotation";
import Companies from "./sections/Companies";
import Features from "./sections/Features";

const Home = () => {
  return (
    <>
      <GridBg />
      <CallToActionWithAnnotation />
      <Companies />
      <AboutUs />
      <Features />
      <Faq />
      <Team />
      <Pdf />
      <Closer />
    </>
  );
};

export default Home;
