import React, {Component} from 'react';
import AboutCard from './AboutCard';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

class About extends Component {

  state ={
    slideNumber: 0,
    pics: [
      this.props.data.about_image,
      this.props.wood_pic,
      this.props.project_pic,
    ]
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

  moveToPreviousSlide = () => {
    this.state.slideNumber === 0 ?
    this.setState({slideNumber: 2})
    :
    this.setState(prevstate => ({ slideNumber: prevstate.slideNumber - 1}))
  }

  kickOffCarousel = () => {
      setInterval(this.moveToNextSlide, 4500)
  }

  resetCarousel = () => {
    clearInterval(this.kickOffCarousel)
    this.setState({slideNumber: 0})
  }


  slides = [
    {image: this.state.pics[0], text:`Thanks for stopping by! We are a small, full service, family-
    owned wood business based in Fairfax, California. We specialize in
    custom, reclaimed wood projects from sustainable, local sources. It is a
    blessing to live in Northern California, with such a wide variety of species.`},
    {image: this.state.pics[1], text:`We also specialize in esoteric species from around the world. All of our
    wood is one hundred percent reclaimed, and handpicked by our
    specialists; only the top twenty percent making the cut. Most of our
    projects are custom; created to the client's specification, and completely
    tailored to your liking!`},
    {image: this.state.pics[2], text:`We always have a nice, rotating inventory as well if
    you would like to do your own project. We are a full-service wood mill,
    and offer planing, sanding, and milling services; collaborating with a local
    Master Metalsmith if needed. Feel free to reach out, and let's talk about
    your next project!`},
  ]

  render(){
    return (
      <div id="about" >
          <p className='about-text-welcome'>Welcome!</p>
          <AboutCard data={this.slides[this.state.slideNumber]}></AboutCard>
          <IconButton className='slide-button'>
            <NavigateBeforeRoundedIcon onClick={() => this.moveToPreviousSlide()}></NavigateBeforeRoundedIcon>
          </IconButton>
          <IconButton className='slide-button'>
            <NavigateNextRoundedIcon onClick={() => this.moveToNextSlide()}></NavigateNextRoundedIcon>
          </IconButton>
      </div>
    )
  };
}

export default About;
