import React from 'react'
import RightEducation from './RightEducation'
import RightExperience from './RightExperience'
import RightHeader from './RightHeader'
import RightSkill from './RightSkill'
import '../rightStyle.css';
import { useTranslate } from 'react-redux-multilingual'

function Paper() {
  
    const t = useTranslate()
    return (
        <div className="paper">
            <div style={{ size: 'A4' }}>  
                <RightHeader />
                <RightEducation />
                <RightExperience />
                <RightSkill />
          
            </div>
        </div>
    )
}

export default Paper
