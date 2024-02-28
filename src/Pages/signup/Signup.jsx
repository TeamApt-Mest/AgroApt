import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div class="container">
      <div class="title">Sign Up</div>
      <form action="rsult.html" method="get">
        <div class="user-info">
          <div class="input-box">
            <span class="info">Full Name</span>
            <input type="text" placeholder="Name" required />
          </div>
          <div class="input-box">
            <span class="info">Username</span>
            <input type="text" placeholder="Username" required />
          </div>
          <div class="input-box">
            <span class="info">Email</span>
            <input type="email" placeholder="abc@mail.com" required />
          </div>
          <div class="input-box">
            <span class="info">Phone Number</span>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div class="input-box">
            <span class="info">Password</span>
            <input
              type="password"
              placeholder="Password"
              autocomplete="current-password"
              required
              minlength="8"
              maxlength="128"
            />
          </div>
          <div class="input-box">
            <span class="info">Confirm Password</span>
            <input
              type="password"
              autocomplete="current-password"
              required
              minlength="8"
              maxlength="128"
            />
          </div>
        </div>
        <div class="gender-info">
          <span class="gender-title">Gender</span>
          <div class="category">
            <label>
              <input type="radio" name="gender" value="Male" />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" />
              Female
            </label>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Sign up" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
