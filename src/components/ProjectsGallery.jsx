
import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";

class ProjectsGallery extends Component {

  state = {
    images: []
  }

  componentDidMount() {
    if(this.props.data){
      this.setState({images: this.props.data});
    }
  }

  render() {
    let backupData = [
      {
        url:
          "https://live.staticflickr.com/65535/51201125973_52a75abe1e_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51201125973_c79569ea0d_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51201700654_5d2bcfa4ca_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51201700654_2e911e8cff_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51201985930_6abecffe59_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51201985930_3a1f476566_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51200923141_8ddd319221_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51200923141_8474032c67_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51200922946_616f3ca665_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51200922946_2bb92e5def_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51201985795_7134134c65_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51201985795_52fab5e744_m.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51200922681_33e92b2410_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51200922681_0b9c662fb5_m.jpg"
      }
    ];

    return (
      <div id="projects">
        <p className="category">Projects</p>
        {(this.props.data)?
        <DztImageGalleryComponent images={this.state.images.map(e => ({ url: e, thumbUrl: e }))} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/> : 
        <DztImageGalleryComponent images={backupData} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/> }
      </div>
    );
  }
}

export default ProjectsGallery;
