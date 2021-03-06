import { Context } from 'contexts/context';
import React, { useContext} from 'react'

function RightEducation() {
    const {control, content , contentFake} = useContext(Context);
    let contentUse;
    if(control){
        contentUse = contentFake;
    }else {
        contentUse = content;
    }
    let title;
    console.log(contentUse.education);
    if(Object.keys(contentUse.education).length < 3){
        title =  '';

    }else{
        title = (
            <h5>Education</h5>
        )
    }
    return (
        <div className="rightExperence">
            <div className="">
                <h6> {title}</h6>
                <p>{contentUse.education.institition}</p>
                <p>{contentUse.education.city}</p>
                <p>{contentUse.education.major}</p>
                <p>{contentUse.education.gradution}</p>
                <p>{contentUse.education.add}</p>
            </div>
        </div>
    )
}

export default RightEducation;
