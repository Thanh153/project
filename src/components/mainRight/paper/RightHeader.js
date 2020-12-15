import { Context } from 'contexts/context';
import React, { useContext} from 'react';
import '../rightStyle.css';

function RightHeader() {
    const {control, content , contentFake} = useContext(Context);
    
    let contentUse ;
    if(control){
        contentUse = contentFake;
    }else {
        contentUse = content;
    }
    let divider;
    console.log(contentUse.header);
    if (Object.keys(contentUse.header).length > 0) {
        divider = <hr className='dividerRight' />;
    } else {
        divider = "";
    }
    return (
        <div>
            <div className="headerR">
                <div className="contentHeader">
                    <div className="row">
                        <div className="col s12">
                            <h4 className="h1Name">{contentUse.header.name}</h4>
                            <p>
                                {contentUse.header.gender} <br />
                                {contentUse.header.email} <br/>
                                {contentUse.header.phone} <br />
                                {contentUse.header.address} <br />
                                {contentUse.header.city} <br />
                            </p>
                        </div>
                    </div>
                    <hr className="hrrr"></hr>
                </div>
            </div>
        </div>
    )
}

export default RightHeader;
