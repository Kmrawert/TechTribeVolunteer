import React, { Component } from "react";
import Nav from "../Nav";
import * as filestack from 'filestack-js';




class FileUploader extends Component {


    handleFileClick = function (event) { 
        console.log("filestack", filestack)
        var pickerOptions={ accept: 'image/*',  }
        var apiKey='AyOZiuxpTGaWR1y2npYnNz';
        var client = filestack.init(apiKey);
        const options = {
            maxFiles: 20,
            uploadInBackground: false,
            onOpen: () => console.log('opened!'),
            onUploadDone: (res) => console.log(res),
          };
          client.picker(options).open();
      
        
     
        


    }












    render() {
        return (



            <div className="container">

                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="thumbnail">
                            <img id="filestack-pic" className="img-responsive" src="http://placehold.it/800x600?text=Upload+a+Photo" />
                            <div className="caption">
                                <p></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="text-center">
                        <button type="button" id="upload-btn" className="btn btn-filestack"  onClick={this.handleFileClick}>

                            <i className="glyphicon glyphicon-upload"></i> Upload
          </button>
                    </div>
                </div>


            </div>


        )
    }
};

export default FileUploader;







