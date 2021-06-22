import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class WoodGallery extends Component {

  state = {
    images: [],
    loadMore: false
  }

  componentDidMount() {
    if(this.props.data){
      this.setState({images: this.props.data});
    }
  }

  loadMoreImages() {
    document.getElementById('wood-gal').remove()
    this.setState({
      ...this.state,
      loadMore: true
    })
    window.scrollBy(0, 1); // scrolls page by 1 pixel to get css update to the rest of the images
  }

  renderImages() {
    return(
      <>
        <p className="category">Our Wood</p>
       {(this.state.loadMore)?
        <DztImageGalleryComponent images={this.state.images.map(e => ({ url: e.url, thumbUrl: e.url, title: e.desc }))} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/>:
        <DztImageGalleryComponent images={this.state.images.slice(0,4).map(e => ({ url: e.url, thumbUrl: e.url, title: e.desc }))} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/>}
          <div id="wood-gal" style={{textAlign: 'center', fontSize: '18px', color: '#858484', textDecoration: 'underline'}}
          onClick={() => this.loadMoreImages()}>
          <ExpandMoreIcon />
        </div>
      </>
    )
  }

  render() {
   
    return (
      <div id="wood">
        {this.renderImages()}
      </div>
    );
  }
}

export default WoodGallery;