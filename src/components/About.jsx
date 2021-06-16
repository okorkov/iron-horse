import React, {Component} from 'react';
import AboutCard from './AboutCard'



class About extends Component {

  state ={
    slideNumber: 0,
  }

  componentDidMount() {
    this.kickOffCarousel()
  }

  moveToNextSlide = () => {
    this.state.slideNumber === 2 ?
    this.resetCarousel()
    :
    this.setState(prevstate => ({ slideNumber: prevstate.slideNumber + 1}))
    }

  kickOffCarousel = () => {
      setInterval(this.moveToNextSlide, 4500)
  }

  resetCarousel = () => {
    clearInterval(this.kickOffCarousel)
    this.setState({slideNumber: 0})
  }


  slides = [
    {image: this.props.data.about_image, text:`Thanks for stopping by! We are a small, full service, family-
    owned wood business based in Fairfax, California. We specialize in
    custom, reclaimed wood projects from sustainable, local sources. It is a
    blessing to live in Northern California, with such a wide variety of species.`},
    {image: this.props.project_pic, text:`We also specialize in esoteric species from around the world. All of our
    wood is one hundred percent reclaimed, and handpicked by our
    specialists; only the top twenty percent making the cut. Most of our
    projects are custom; created to the client's specification, and completely
    tailored to your liking!`},
    {image: this.props.wood_pic, text:`We always have a nice, rotating inventory as well if
    you would like to do your own project. We are a full-service wood mill,
    and offer planing, sanding, and milling services; collaborating with a local
    Master Metalsmith if needed. Feel free to reach out, and let's talk about
    your next project!`},
    {image: this.props.data.about_image, text:`Thanks for stopping by! We are a small, full service, family-
    owned wood business based in Fairfax, California. We specialize in
    custom, reclaimed wood projects from sustainable, local sources. It is a
    blessing to live in Northern California, with such a wide variety of species.`}
  ]

  render(){
    return (
      <div id="about" >
          <AboutCard data={this.slides[this.state.slideNumber]}></AboutCard>
      </div>
    )
  };
}

export default About;
