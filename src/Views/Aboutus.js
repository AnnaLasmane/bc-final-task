import Breadcrumbs from '../Components/Breadcrumbs';
import Employees from '../Components/Aboutus/Employees';
import Vacancies from '../Components/Aboutus/Vacancies';
import Mission from '../Components/Aboutus/Mission';
import {useState} from 'react';




function Aboutus() {
    const [activeTab, setActiveTab] = useState('employees');
    const employees = [
        {image: 'https://www.placecage.com/200/200',  name: 'Nicolas'},
        {image: 'https://www.stevensegallery.com/200/200',  name: 'Steven' },
        {image: 'https://placebeard.it/200x200', name: 'This guy'},
    ];

   
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'About us' },
    ]

    let tabContent = '';
    if (activeTab === 'employees') {
        tabContent = <Employees  employees={employees}/>
    } else if (activeTab === 'vacancies') {
        tabContent = <Vacancies />
    } else if (activeTab === 'mission') {
        tabContent = <Mission />
    }

    
    return (
        <div className="container">
            <div className="row">
            <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>About us</h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'employees' ? ' active' : '')} onClick={() => setActiveTab('employees')}>Employees</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'vacancies' ? ' active' : '')} onClick={() => setActiveTab('vacancies')}>Vacancies</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'mission' ? ' active' : '')} onClick={() => setActiveTab('mission')}>Mission</button>
                        </li>
                    </ul>
                    {tabContent}
                </div>
            </div>
 
        </div>
      
    )
}

export default Aboutus;