//Home.jsx Luca Distefano 301357231 sept 26,2024

import BBG from '../src/assets/peely.jfif';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';

export default function Home() {
    return (
        <>
            <header style={{ backgroundColor: 'purple', padding: '1em', color: 'white' }}>
                <h1>Hello,</h1>
            </header>

            <section id="intro" style={{ backgroundColor: 'orange' }}>
                <div className="introContent">
                    <span className="introText">
                        My name is <span className="introName">Luca Distefano</span>
                        <img
                            src={BBG}
                            alt="profile"
                            className="bbg"
                            width="750"
                            height="750"
                            align="right"
                        />
                        <br />
                        Website Designer
                    </span>
                    <p className="introPara">
                        I am a student at Centennial College studying software engineering.
                    </p>
                </div>
            </section>
        </>
    );
}
