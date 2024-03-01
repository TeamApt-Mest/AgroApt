import React from 'react'
import Navbarforseller from './navbarforseller';
import "../dashboard/sidebar.css"
const Homeforseller = ({ Toggle }) => {
        return (
          <div className="px-3">
            {" "}
            <Navbarforseller Toggle={Toggle} />{" "}
            <div className="container-fluid">
              {" "}
              <div className="row g-3 my-2">
                {" "}
                <div className="col-md-3 p-1">
                  {" "}
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    {" "}
                    <div>
                      {" "}
                      <h3 className="fs-2">230</h3> <p className="fs-5">Products</p>{" "}
                    </div>{" "}
                    <i className="bi bi-cart-plus p-3 fs-1"></i>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-3 p-1">
                  {" "}
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    {" "}
                    <div>
                      {" "}
                      <h3 className="fs-2">2450</h3> <p className="fs-5">Sales</p>{" "}
                    </div>{" "}
                    <i className="bi bi-currency-dollar p-3 fs-1"></i>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-3 p-1">
                  {" "}
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    {" "}
                    <div>
                      {" "}
                      <h3 className="fs-2">2250</h3> <p className="fs-5">Delivery</p>{" "}
                    </div>{" "}
                    <i className="bi bi-truck p-3 fs-1"></i>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-3 p-1">
                  {" "}
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    {" "}
                    <div>
                      {" "}
                      <h3 className="fs-2">20%</h3> <p className="fs-5">Increase</p>{" "}
                    </div>{" "}
                    <i className="bi bi-graph-up-arrow p-3 fs-1"></i>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <table class="table caption-top bg-white rounded mt-2">
              {" "}
              <caption className="text-white fs-4">Recent Orders</caption>{" "}
              <thead>
                {" "}
                <tr>
                  {" "}
                  <th scope="col">#</th> <th scope="col">First</th>{" "}
                  <th scope="col">Last</th> <th scope="col">Handle</th>{" "}
                </tr>{" "}
              </thead>{" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th scope="row">1</th> <td>Starr</td> <td>Tema</td> <td>@akpene</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th scope="row">2</th> <td>Jacob</td> <td>Accra</td>{" "}
                  <td>@fat</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th scope="row">3</th> <td>Larry</td> <td>Dansoman</td>{" "}
                  <td>@milkshake</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th scope="row">4</th> <td>Barbara</td> <td>East Legon</td>{" "}
                  <td>@twitter</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th scope="row">5</th> <td>Tracy</td> <td>Ada</td>{" "}
                  <td>@footer</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <th scope="row">6</th> <td>Navbarman</td> <td>Nowhere</td>{" "}
                  <td>@navbar</td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
          </div>
        );
      }
  


export default Homeforseller