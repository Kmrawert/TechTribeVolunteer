import React, { Component } from "react";

var ProfileContainer = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileHeader {...this.props} />
        <ProfileCollection {...this.props} />
      </div>
    );
  }
});

 

var ProfileHeader = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePicContainer {...this.props} />
        <ProfileNameContainer {...this.props} />
        <ProfileBioContainer />
        <EditProfileButtonContainer />
      </div>
    );
  }
});



var ProfileCollection = React.createClass({
  render: function () {
    return (
      <h1>Collection Container</h1>
    );
  }
});



var ProfilePicContainer = React.createClass({
  getInitialState: function () {
    return {
      image: this.props.user.userImage
    }
  },
  render: function () {
    return (
      <ProfilePic {...this.props} />
    );
  }
});

var ProfilePic = React.createClass({
    render: function () {
      return (
        <img src={this.props.user.userImage} alt="profile-picture" />
      );
    }
 });

 

 var ProfileNameContainer = React.createClass({
    getInitialState: function () {
      return {
        name: this.props.user.userName
      }
    },
    render: function () {
      return (
        <ProfileName {...this.props} /> 
      );
    }
 });

 var ProfileName = React.createClass({
    render: function () {
      return (
        <h2>{this.props.user.userName}</h2> 
      );
    }
 });

 

 var ProfileBioContainer = React.createClass({
    getInitialState: function () {
      return {
        bioText: ""
      }
    },
    render: function () {
      return (
        <ProfileBio bioText={this.state.bioText} />
      );
    }
 });

 var ProfileBio = React.createClass({
    render: function () {
      return (
        <p>{this.props.bioText}</p> 
      );
    }
 });


 var user = {
   userName: "Maxwell Gover",
   userImage: "https://addons.cdn.mozilla.net/user-media/userpics/0/0/45.png?modified=1447324257"
 };

 ReactDOM.render(<ProfileContainer user={user} />, document.getElementById('content'));
 