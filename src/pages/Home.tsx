import Hero from "../components/Hero";
import AboutHome from "../components/AboutHome";
import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <Hero />
            </header>
            <main>
                <AboutHome />
            </main>
        </div>
    );
}

export default Home;