import React, { Component } from "react";
import Nav from "../Nav";
import * as filestack from 'filestack-js';
import "./style.css";
import axios from "axios";



class FileUploader extends Component {
  state = {
    url: "",
    image: "",
    selectedFile: null,
    loaded: 0

  }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
    console.log(event.target.files[0]);
  }

  handleUpload = () => {
    const filename = this.state.selectedFile;

    console.log(filename);

    axios
    .post("/userprofile", filename).then(res => {
      console.log(res.statusText)
    })
    // const data = new FormData()

    // data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    // console.log(data)
    // axios
    //   .post("/userprofile", data, {
    //     onUploadProgress: ProgressEvent => {
    //       this.setState({
    //         loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
    //       })
    //     },
    //   })
    //   .then(res => {
    //     console.log(res.statusText)
    //   })
  }


  handleFileClick = function (event) {
    console.log("filestack", filestack)
    var pickerOptions = { accept: 'image/*', }
    var apiKey = 'AyOZiuxpTGaWR1y2npYnNz';
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
              <img id="filestack-pic" className="img-responsive" src="http://placehold.it/450x250?text=Upload+a+Photo" />
              <div className="caption">
                <p>Must be JPEG</p>
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="text-center">


            <div className="App">
              <input type="file" name="" id="" onChange={this.handleselectedFile} />
              <button onClick={this.handleUpload}>Upload</button>

            </div>


          </div>
        </div>
      </div>


    )
  }
};


export default FileUploader;







