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
      setInterval(this.moveToNextSlide, 12000)
  }

  resetCarousel = () => {
    clearInterval(this.kickOffCarousel)
    this.setState({slideNumber: 0})
  }


  slides = [
    {image: this.props.data.about_image, text: this.props.data.about_text.slice(0,278)},
    {image: this.props.wood_pic, text: this.props.data.about_text.slice(278,538)},
    {image: this.props.project_pic, text: this.props.data.about_text.slice(538,this.props.data.about_text.length) },
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
