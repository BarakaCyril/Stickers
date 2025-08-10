
import stickers from "./assets/sticker-pack.png"
import posters from "./assets/poster-pack.png"

import "./about.css"

function About (){
    return (
        <>
            <div className="about-container">
                {/* */}
                <svg
                    viewBox="0 0 1440 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,80 C480,200 960,0 1440,80 L1440,0 L0,0 Z"
                        fill="#f8b259ff" // Change to match your about-container background
                    />
                </svg>

                <h1 className="about-title">WHAT I DO </h1>

                <div className="about-elements">
                    <img src={stickers} alt="stcikers images" className="sticker-pack" />

                    <div className="desc">
                        <p className="about-text">
                            I make high-quality, die-cut stickers designed
                            for journaling, decorating laptops, water bottles,
                            and more. Each set is themed and curated to
                            match a mood, idea, or aesthetic — easy to peel,
                            durable, and great for personalizing your space.
                        </p>
                        <button className="sticker-button">SEE MORE</button>
                    </div>
                </div>

                <div className="about-elements">
                    <div className="desc poster-desc">
                        <p className="about-text">
                            I make high-quality, die-cut stickers designed
                            for journaling, decorating laptops, water bottles,
                            and more. Each set is themed and curated to
                            match a mood, idea, or aesthetic — easy to peel,
                            durable, and great for personalizing your space. 
                        </p>

                        <button className="sticker-button">SEE MORE</button>
                    </div>
                    <img src={posters} alt="posters images" className="poster-pack"/>
                </div>

            </div>
        </>
    )
}

export default About;