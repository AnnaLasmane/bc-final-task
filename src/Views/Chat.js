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
        </div>
    )
}

export default Chat;