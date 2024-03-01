import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div class="container-fluid">
            <form class="mx-auto">
                <h4 class="text-center">Signup</h4>
                <div class="mb-3 mt-5">
                  <label for="exampleInputEmail1" class="form-label">User Name</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3 mt-5">
                  <label for="exampleInputEmail1" class="form-label">Password</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                  <div id="emailHelp" class="form-text mt-3">Forget password ?</div>
          
                </div>
              
                <button type="submit" class="btn btn-primary mt-5">Signup</button>
              </form>
        </div>
  );
};

export default Signup;
