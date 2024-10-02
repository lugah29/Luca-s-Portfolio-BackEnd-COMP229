//project.jsx Luca Distefano 301357231 sept 26,2024


import projectluca from '../src/assets/lucaproject.png';
import projectluca2 from '../src/assets/lucaproject2.png';
import projectluca3 from '../src/assets/lucaproject3.png';
import '../src/index.css';
import '../src/project.css';

export default function Project() {
    return (
        <div style={{ backgroundColor: '#d6a600', minHeight: '100vh', padding: '20px' }}>
            <section id="works">
                <h2 className="worksTitle">My Projects while studying at Centennial College</h2>
                <div className="worksImgs">
                    <img src={projectluca} alt="Project 1" className="worksImg" />
                    <img src={projectluca2} alt="Project 2" className="worksImg" />
                    <img src={projectluca3} alt="Project 3" className="worksImg" />
                </div>
            </section>
        </div>
    );
}
