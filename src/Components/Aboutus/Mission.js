import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons'


function Mission() {
    return (
        <div className="row mt-3">
            <div className="col-2">
                <p> To be the best! <FontAwesomeIcon icon={faCrown} /></p>
                

           
            </div>       
            <div className="col-5">
            <img src="https://thumbs.dreamstime.com/b/cat-american-dollars-paws-lying-sofa-concept-success-wealth-cat-american-dollars-paws-lying-175331464.jpg" className="d-block w-100" alt="..." />
                
           
            </div>       
    
    
        </div>
    )
}

export default Mission;