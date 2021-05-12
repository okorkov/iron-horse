
import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";

class ProjectsGallery extends Component {
  render() {
    let data = [
      {
        url:
          "https://live.staticflickr.com/65535/51176096225_d716485ec6_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51176096225_4837ff4194_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51176096120_1e537282ac_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51176096120_c74289056a_n.jpg"
      }
    ];

    return (
      <div id="projects">
        <p className="category">Projects</p>
        <DztImageGalleryComponent images={data} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/>
      </div>
    );
  }
}

export default ProjectsGallery;
