import Header from '../Header'
import Education from '../Education'
import TechnicalSkills from '../TechnicalSkills'
import Projects from '../Projects'
import ProfessionalExperience from '../ProfessionalExperience'

import './index.css'
const Resume=()=>{
    return(
        <div className="resumeContainer">
            <div className="sideNav">
                <a href="#education" className="a">Education</a>
                <a href="#technicalSkills" className="a">Technical Skills</a>
                <a href="#projects" className="a">Projects</a>
                <a href="#professionalExperience" className="a">Professional Experience</a>
            </div>
        <div className="resumeContentContainer">
            <Header />
            <Education />
            <TechnicalSkills />
            <Projects />
            <ProfessionalExperience />
        </div>
        </div>
    )
}

export default Resume