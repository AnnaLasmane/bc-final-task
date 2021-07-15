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
                <h5> Register</h5>
            </div>
            <form class="row g-3 mt-3">
            <div className="row">
                <div class="col-4 mb-3">

                    <input type="text" class="form-control" id="validationDefault01" placeholder="Username*" required />
                </div>
                </div>
              <div className="row">
                <div class="col-4 mb-3">

                    <input type="password" class="form-control" id="validationDefault02" placeholder="Password*" required />
                </div>
                </div>
                <div className="row">
                <div class="col-4 mb-3">
                    <input type="password" class="form-control" id="validationDefault02" placeholder="Retype password*" required />
                </div>
                </div>
                <div className="row">
                <div class="col-4 mb-3">
                    <input type="text" class="form-control" id="validationDefault03" placeholder="First name" required />
                </div>
                </div>
                <div className="row">
                <div class="col-4 mb-3">
                <input type="text" class="form-control" id="last-name" placeholder="Last Name" /> 
                </div>
                </div>
                <div className="row">
                <div class="col-4 mb-3">
                <select class="form-select" id="select-country" name="selectcountry" required>
                    <option selected disabled>Country*</option>
                    <option>Latvia</option>
                    <option>Lithuania</option>
                    <option>Estonia</option>
                    <option>Other</option>
                </select>
                </div>
                </div>
                <div className="row">
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
      </label>
                    </div>
                </div>
                </div>
                <div className="row mt-2">
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Register</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Register;