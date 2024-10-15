import "../../styles/main.css";

const Newsletter = () => {
    return (
        <section className="join-section">
            <div className="join-wrap container-fluid">
                <div className="join-letter">
                    <h1>Join Our Newsletter</h1>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                </div>
                <div className="join-form">
                    <form action="#" className="form-action">
                        <input type="email" name="email" id="email" required="" />
                        <button type="submit" className="subscribe">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
