import React, { Component } from "react";
// import Nav from "../Nav";
import "../UserProfile/style.css";
import FileUploader from "../FileUploader";
import * as axios from 'axios'

class UserProfile extends Component {

   state = {
      username: []
   }

   componentDidMount() {
      axios.get('/api/users')
        .then(res => {
          const username = res.data
          this.setState({ username })
          console.log(username)
        })
        .catch(err => {
          console.error(err)
        })
    }


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
                        <div className="image"></div>
                        <figure>
                          <FileUploader />
                        </figure>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-8">
                      <ul className="list-group">
                        {/* <li className="list-group-item">Name: </li> */}
                        <li className="list-group-item" >
                           {/* {/* <UserProfile> */}
                        {this.state.username}
                        {/* {this.state.username && this.state.username.map(event => 
                        <UserProfile user={usern.title} eventDate={isoToLocaleDate(event.eventdate)} />)} */}
                           {/* </UserProfile> */}
                          {" "}
                        </li>

                        <li className="list-group-item">
                          <i className="fa fa-phone"></i> 000-000-0000{" "}
                        </li>
                        <li className="list-group-item">
                          <i className="fa fa-envelope"></i> john@example.com
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-xs-12 social-btns">
                              <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                <a
                                  href="#"
                                  className="btn btn-social btn-block btn-google"
                                >
                                  <i className="fa fa-google"></i>{" "}
                                </a>
                              </div>
                              <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                <a
                                  href="#"
                                  className="btn btn-social btn-block btn-facebook"
                                >
                                  <i className="fa fa-facebook"></i>{" "}
                                </a>
                              </div>
                              <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                <a
                                  href="#"
                                  className="btn btn-social btn-block btn-twitter"
                                >
                                  <i className="fa fa-twitter"></i>{" "}
                                </a>
                              </div>
                              <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                <a
                                  href="#"
                                  className="btn btn-social btn-block btn-linkedin"
                                >
                                  <i className="fa fa-linkedin"></i>{" "}
                                </a>
                              </div>
                              <div className="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                <a
                                  href="#"
                                  className="btn btn-social btn-block btn-github"
                                >
                                  <i className="fa fa-github"></i>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Pups R Us</th>
                          <td>Chicago, Il</td>
                          <td>1/1/2020</td>
                          <td>15</td>
                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Pups R Us</th>
                          <td>Chicago, Il</td>
                          <td>1/1/2020</td>
                          <td>15</td>
                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
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
                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Church Event</th>
                          <td>Chicago, Il</td>
                          <td>12/12/2019</td>
                          <td>10</td>
                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Volunteer at Soup Kitchen</th>
                          <td>Chicago, Il</td>
                          <td>9/10/2019</td>
                          <td>8</td>
                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
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
    );
  }
}

export default UserProfile;
