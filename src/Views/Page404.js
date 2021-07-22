import { NavLink } from 'react-router-dom';
import back from '../Assets/Images/back.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Page404() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 text-center">
                    <h1>Whoops...</h1>
                    <h2>Something went wrong</h2>
                    <p className="text-muted"> Something went wrong while surfing through our page </p>
                    <div>
                    <NavLink class="btn btn-primary" to="/" role="button">Go Back <div>
                                    <FontAwesomeIcon icon={faHome} />
                                </div></NavLink>
                    </div>
                    <div className="col-6 mt-5 offset-3 text-center"> <img className="img-fluid w-75" src={back} alt="back" /></div>
                </div>
            </div>
        </div>
    )
}

export default Page404;