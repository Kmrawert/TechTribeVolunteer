import React, { Component } from "react";
import "../UserProfile/style.css"
import FileUploader from "../FileUploader"
import Password from "../Password"


class UserProfile extends Component {
   render() {
      return (
         <div id="user">
            <div className="container">





                        <div className="row">
                           <div className="col-lg-6">
                              <figure>
                                 <FileUploader />
                              </figure>
                           </div>

                           <div className=" col-lg-6">
                              <ul className="list-group">
                                 {/* <Login/> */}
                                 <li className="list-group-item" contentEditable="false" input type="text" id="username" name="username">Username: </li>
                                 <li className="list-group-item" contentEditable="true" input type="password" id="pass" nred ><button type="button" className="btn btn-primary btn-sm" onclick="Function();"><Password/></button></li>
                                 
                             
                              </ul>
                           </div>
                        </div>
                   
             



               <div className="row">
                  <div className="col-lg-6">
                     <div className="bs-callout bs-callout-danger">
                        <h4>Current Events</h4>
                        <table className="table table-hover" >
                           <thead>
                              <tr>
                                 <th scope="col">Title</th>
                                 <th scope="col">Location</th>
                                 <th scope="col">Date</th>
                                 <th scope="col">Number of Volunteers</th>
                                 <th scope="col">Get details</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">Pups R Us</th>
                                 <td>Chicago, Il</td>
                                 <td>1/1/2020</td>
                                 <td>15</td>
                                 <td> <button type="button" className="btn btn-primary btn-sm">Details</button></td>
                              </tr>
                              <tr>
                                 <th scope="row">Pups R Us</th>
                                 <td>Chicago, Il</td>
                                 <td>1/1/2020</td>
                                 <td>15</td>
                                 <td> <button type="button" className="btn btn-primary btn-sm">Details</button></td>
                              </tr>
                              <tr>
                                 <th scope="row">Pups R Us</th>
                                 <td>Chicago, Il</td>
                                 <td>1/1/2020</td>
                                 <td>15</td>
                                 <td> <button type="button" className="btn btn-primary btn-sm">Details</button></td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>


                  <div className="col-lg-6">
                     <div className="bs-callout bs-callout-danger">
                        <h4>Past Events</h4>

                        <table className="table table-hover">
                           <thead>
                              <tr>
                                 <th scope="col">Title</th>
                                 <th scope="col">Location</th>
                                 <th scope="col">Date</th>
                                 <th scope="col">Number of Volunteers</th>
                                 <th scope="col">Get details</th>
                              </tr>
                           </thead>
                           <tbody>

                              <tr>
                                 <th scope="row">Pups R Us</th>
                                 <td>Chicago, Il</td>
                                 <td>1/1/2020</td>
                                 <td>15</td>
                                 <td> <button type="button" className="btn btn-primary btn-sm">Details</button></td>
                              </tr>
                              <tr>
                                 <th scope="row">Pups R Us</th>
                                 <td>Chicago, Il</td>
                                 <td>1/1/2020</td>
                                 <td>15</td>
                                 <td> <button type="button" className="btn btn-primary btn-sm">Details</button></td>
                              </tr>
                              <tr>
                                 <th scope="row">Pups R Us</th>
                                 <td>Chicago, Il</td>
                                 <td>1/1/2020</td>
                                 <td>15</td>
                                 <td> <button type="button" className="btn btn-primary btn-sm">Details</button></td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>



            </div>
         </div>









      )
   }

}

export default UserProfile; 