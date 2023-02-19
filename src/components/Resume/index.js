import Header from '../Header'
import Education from '../Education'
import TechnicalSkills from '../TechnicalSkills'
import Projects from '../Projects'
import ProfessionalExperience from '../ProfessionalExperience'

import './index.css'
const Resume=()=>{
    return(
        <div className="resumeContainer">
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