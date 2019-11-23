import React, { Component } from "react";
import * as filestack from 'filestack-js';
import "./style.css";



class FileUploader extends Component {

    constructor(){
      super();
      this.state = {
        profileImage : "http://placehold.it/450x250?text=Upload+a+Photo"
      };

      this.handleFileClick = this.handleFileClick.bind(this);

    }


    handleFileClick = function (event) { 
        console.log("filestack", filestack)
        var pickerOptions={ accept: 'image/*',  }
        var apiKey='AyOZiuxpTGaWR1y2npYnNz';
        var client = filestack.init(apiKey);
        const options = {
            maxFiles: 20,
            uploadInBackground: false,
            onOpen: () => console.log('opened!'),
            onUploadDone: (res) => {
              console.log(res)
              this.setState({
                profileImage : res.filesUploaded[0].url
              })
            },
          };

          client.picker(options).open()


    }



    render() {
        return (



            <div className="container">

                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="thumbnail">
                            <img id="filestack-pic" className="img-responsive" src={this.state.profileImage} />
                            <button type="button" id="upload-btn" className="btn btn-filestack"  onClick={this.handleFileClick}>
                            <i className="glyphicon glyphicon-upload"></i> Upload </button>
                        </div>
                    </div>

                </div>
               
                    <div className="text-center">
                        
                    
                </div>

            </div>


        )
    }
};

export default FileUploader;


