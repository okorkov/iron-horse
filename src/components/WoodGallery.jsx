
import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";

class WoodGallery extends Component {

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
          "https://live.staticflickr.com/65535/51175791824_b657477398_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51175791824_7b332d4141_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51175227428_bb9c008d08_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51175227428_bb050976a8_n.jpg",
      },
      {
        url:
          "https://live.staticflickr.com/65535/51174328417_3e098cfb06_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51174328417_812e0fe2d5_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51175227438_34d651dc71_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51175227438_5d27097ccc_n.jpg"
      },
      {
        url:
          "https://live.staticflickr.com/65535/51175227383_c95e478f97_o.jpg",
        
        thumbUrl:
          "https://live.staticflickr.com/65535/51175227383_9a34940ffa_n.jpg"
      },
    ];

    return (
      <div id="wood">
        <p className="category">Our Wood</p>
        {(this.props.data)?
        <DztImageGalleryComponent images={this.state.images.map(e => ({ url: e, thumbUrl: e }))} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/>:
        <DztImageGalleryComponent images={backupData} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/>
        }
        
      </div>
    );
  }
}

export default WoodGallery;
