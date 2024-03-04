import React from "react";
import "./sellnow.css";
import { Link } from "react-router-dom";

const SellNow = () => {
  return (
    <div class="container-fluid">
      <form class="mx-auto">
        <h4 class="text-center">Login</h4>
        <div class="mb-3 mt-5">
          <label for="exampleInputEmail1" class="form-label">
            User Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 mt-5">
          <label for="exampleInputEmail1" class="form-label">
            Password
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <Link to="./Sellerdashboard">
          <button type="submit" class="btn btn-primary mt-5">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SellNow;
