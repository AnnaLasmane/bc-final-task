import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons'

function Vacancies() {

    return (
        <div className="row mt-3">
            <div className="col">
                <p> Sorry, there are no positions available at this time <FontAwesomeIcon icon={faFrown} /></p>
            </div>       
    
        </div>
    )
}

export default Vacancies;