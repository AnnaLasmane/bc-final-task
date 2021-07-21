import Breadcrumbs from '../Components/Breadcrumbs';
import React from "react";
import Forms from '../Components/Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'


function Register() {

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Register' },
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
                
                <div>
                
                <h5> <FontAwesomeIcon icon={faUserFriends} /> Register for Stallone Fan Club</h5>
                  </div>
            </div>
            
            <div className="row">
                <div className="col-8">
                    <Forms />
        </div>
        </div>
        </div>
        
    )
}

export default Register;
