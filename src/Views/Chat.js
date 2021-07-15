import Breadcrumbs from '../Components/Breadcrumbs';

function Chat() {

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Chat' },
    ]





    return (
        <div className="container">
            <div className="row">
            <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
            <div className="col mt-3 mb-3">
                    <h5> Chat</h5>
                </div>
            </div>
            <ul id="chat-window" class="bg-light fw-bold overflow-auto">
            <li>
                <div class="card bg-light text-secondary my-1">
                    <div class="card-header fs-6 text-dark">
                        <span id="name" class="me-5">Anna L.</span>
                        <span id="date">22.07.2021 18:30</span>
                    </div>
                    <div class="card-body m-0 fs-6">
                        <div class="">
                            <p>Hello! If you have any question, please write in the message box below!
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    
        </div>
    )
}

export default Chat;