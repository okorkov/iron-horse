
import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class ProjectsGallery extends Component {

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
    document.getElementById('projects-gal').remove()
    this.setState({
      ...this.state,
      loadMore: true
    })
    window.scrollBy(0, 1); // scrolls page by 1 pixel to get css update to the rest of the images
  }

  renderImages() {
    return(
      <>
      <p className="category">Projects</p>
      {(this.state.loadMore)?
      <DztImageGalleryComponent images={this.state.images.map(e => ({ url: e, thumbUrl: e }))} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/>:
      <DztImageGalleryComponent images={this.state.images.slice(0,4).map(e => ({ url: e, thumbUrl: e }))} hideRotate hideDownload hideZoom imageBackgroundColor='#e4e4e8'/> }
      <div id="projects-gal" style={{textAlign: 'center', fontSize: '18px', color: '#858484', textDecoration: 'underline'}}
        onClick={() => this.loadMoreImages()}>
        <ExpandMoreIcon />
      </div>
      </>
    )
  }

  render() {

    return (
      <div id="projects">
        {this.renderImages()}
      </div>
    );
  }
}

export default ProjectsGallery;

