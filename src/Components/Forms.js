import React from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const onSubmit = data => console.log(data);

    
    

    return (
      <div className="container">

          <form class="row g-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
              <div class="col-8 mb-3">

                  <input type="text" class="form-control" id="validationDefault01" placeholder="Username*" required />
              </div>
              </div>
            <div className="row">
              <div class="col-8 mb-3">

              <input {...register("Password", {
                    required: '  Password is required',
                    minLength: {
                        value: 8,
                        message: 'Passwords must be at least 8 characters in length'
                    }
                })} type="password" name="Password" placeholder="Password*" className="form-control" />
                {errors.Password?.message}
              </div>
              </div>
              <div className="row">
              <div class="col-8 mb-3">
              <input {...register("PasswordRepeat", {
                    required: 'Please confirm password!',
                    validate: {
                        matchesPreviousPassword: (value) => {
                            const { Password } = getValues();
                            return Password === value || 'Passwords do not match!';
                        },
                    }
                })} type="password" placeholder="Repeat Password*" className="form-control" />
                {errors.PasswordRepeat?.message}
              </div>
              </div>
              <div className="row">
              <div class="col-8 mb-3">
                  <input type="text" class="form-control" id="validationDefault03" placeholder="First name" required />
              </div>
              </div>
              <div className="row">
              <div class="col-8 mb-3">
              <input type="text" class="form-control" id="last-name" placeholder="Last Name" /> 
              </div>
              </div>
              <div className="row">
              <div class="col-8 mb-3">
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
                  <button class="btn btn-danger" type="submit">Register</button>
              </div>
              </div>
          </form>
     
      </div>
      
  )
}


export default RegisterForm;