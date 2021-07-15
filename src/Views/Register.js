import Breadcrumbs from '../Components/Breadcrumbs';

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
            </div>
            </div>
    )
}

export default Register;