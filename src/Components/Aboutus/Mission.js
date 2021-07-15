import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Mission() {
    return (
        <div className="row mt-3">
            <div className="col">
                <p> To be the best!</p>
                <button>
                <FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>       
    
        </div>
    )
}

export default Mission;