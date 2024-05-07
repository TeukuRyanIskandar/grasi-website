import Hero from "../components/Hero";
import AboutHome from "../components/AboutHome";
import "./Home.css";
import PageWrapper from "../components/UI/PageWrapper";

const Home = () => {
  /** I comment out your implementation as reference */
  /* return (
        <div className="home-container">
            //
            <header>
                <Hero />
            </header>
            <main>
                <AboutHome />
            </main>
        </div>
    ); */

  return (
    <PageWrapper>
      <header>
        <Hero />
      </header>
      <main>
        <AboutHome />
      </main>
    </PageWrapper>
  );
};

export default Home;
