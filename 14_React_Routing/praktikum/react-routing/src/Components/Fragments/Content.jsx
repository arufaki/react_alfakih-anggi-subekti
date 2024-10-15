import "../../styles/main.css";

const Content = () => {
    return (
        <section className="hero-section">
            <div className="hero-wrap container-fluid max-content">
                <div className="hero-content">
                    <h2>Better Solutions For Your Business</h2>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                    <div className="hero-interaction">
                        <button>Get Started</button>
                        <a href="#">Watch Video</a>
                    </div>
                </div>
                <div className="hero-banner">
                    <img src="src/assets/hero-img.png" alt="technological development" />
                </div>
            </div>
        </section>
    );
};

export default Content;
