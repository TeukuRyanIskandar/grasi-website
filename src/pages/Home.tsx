import Hero from "../components/Hero";
import AboutHome from "../components/AboutHome";
import PageWrapper from "../components/UI/PageWrapper";
import OurWorkHome from "../components/OurWorkHome";
import Footer from "../components/Footer";

import "./Home.css";

const Home = () => {

  return (
    <PageWrapper>
      <header>
        <Hero />
      </header>
      <main>
        <AboutHome />
        <OurWorkHome />
      </main>
      <footer>
        <Footer />
      </footer>
    </PageWrapper>
  );
};

export default Home;
