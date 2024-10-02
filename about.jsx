
//about.jsx Luca Distefano 301357231 sept 26,2024

import BBG from '../src/assets/BBG.jfif';
import ux from '../src/assets/uxui.jpg';
import web from '../src/assets/web1.png';
import app from '../src/assets/app1.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/about.css';

export default function About() {
    return (
        <>
            <section id="skill" style={{ backgroundColor: 'limegreen' }}>
                <span className="skillTitle">What I do</span>
                <span className="skillDesc">
                    I am a student that is still learning to design websites and I am currently learning React and trying to do my best.
                </span>
                <div className="skillBar">
                    <img src={ux} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={web} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p></p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={app} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p></p>
                    </div>
                </div>
            </section>
        </>
    );
}
