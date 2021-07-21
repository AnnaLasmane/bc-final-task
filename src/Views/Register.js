import Breadcrumbs from '../Components/Breadcrumbs';
import React from "react";
import Forms from '../Components/Forms';


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
                <h5> Register</h5>
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
