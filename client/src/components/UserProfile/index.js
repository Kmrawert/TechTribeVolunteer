import React, { Component } from "react";
import Nav from "../Nav";
import "./style.css";
import FileUploader from "../FileUploader"

class UserProfile extends Component {
   render() {
      return (
         <div id="user">







            <div className="container">
               <div className="row">

                  <div className="col-sm-12">

                     <div className="panel panel-default">
                        <div className="panel-heading resume-heading">
                           <div className="row">
                              <div className="col-lg-12">
                                 <div className="col-xs-12 col-sm-4">
                                    <figure>
                                       
                                       <FileUploader/>
                                    </figure>

                                 </div>
                                 <div className="col-xs-12 col-sm-8">
                                    <ul className="list-group">
                                       <li className="list-group-item">Name: John Doe</li>
                                       <li className="list-group-item">Username: Engineer</li>

                                       <li className="list-group-item"><i className="fa fa-phone"></i> 000-000-0000 </li>
                                       <li className="list-group-item"><i className="fa fa-envelope"></i> john@example.com</li>
                                       <li className="list-group-item"><div className="row">
                                          <div className="col-xs-12 social-btns">
                                             <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                                <a href="#" className="btn btn-social btn-block btn-google">
                                                   <i className="fa fa-google"></i> </a>
                                             </div>
                                             <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                                <a href="#" className="btn btn-social btn-block btn-facebook">
                                                   <i className="fa fa-facebook"></i> </a>
                                             </div>
                                             <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                                <a href="#" className="btn btn-social btn-block btn-twitter">
                                                   <i className="fa fa-twitter"></i> </a>
                                             </div>
                                             <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                                <a href="#" className="btn btn-social btn-block btn-linkedin">
                                                   <i className="fa fa-linkedin"></i> </a>
                                             </div>
                                             <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                                <a href="#" className="btn btn-social btn-block btn-github">
                                                   <i className="fa fa-github"></i> </a>
                                             </div>
                                             <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                                <a href="#" className="btn btn-social btn-block btn-stackoverflow">
                                                   <i className="fa fa-stack-overflow"></i> </a>
                                             </div>
                                          </div>


                                       </div></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="container">
                           <div className="interests">
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                 <label className="form-check-label" for="inlineRadio1">1</label>
                              </div>
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                 <label className="form-check-label" for="inlineRadio2">2</label>
                              </div>
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                 <label className="form-check-label" for="inlineRadio2">3</label>
                              </div>
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                 <label className="form-check-label" for="inlineRadio2">4</label>
                              </div>
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                 <label className="form-check-label" for="inlineRadio2">5</label>
                              </div>
                           </div>
                           <button type="button" className="btn btn-primary btn-sm">Save Interests</button>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-lg-6">
                           <div className="bs-callout bs-callout-danger">
                              <h4>Current Events</h4>
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


            </div>
         </div>





      )
   }

}

export default UserProfile; 