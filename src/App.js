import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Contacts from './components/Contacts';
import WoodGallery from './components/WoodGallery';
import ProjectsGallery from './components/ProjectsGallery';
import React from 'react'
import axios from 'axios';
import Yelp from './components/Yelp';
class App extends React.Component {

  state = {
    isLoaded: false,
    data: []
  }

  componentDidMount() {
    axios.get('https://www.ironspringsroad.com//api')
      .then(data => this.setState({ isLoaded: true, data: data.data }))
  }

  render() {
    return (
      (this.state.isLoaded) ?
        <div className="App">
          <Header data={this.state.data.header} />
          <Nav />
          <About data={this.state.data.about} project_pic={this.state.data.project_pics[5]} wood_pic={this.state.data.wood_pics[5]}/>
          <ProjectsGallery data={this.state.data.project_pics} />
          <WoodGallery data={this.state.data.wood_pics} />
          <Yelp data={this.state.data.yelp} />
          <Contacts data={this.state.data.contact} />
          <Footer />
        </div>
        : <div className="App"></div>
    );
  }
}

export default App;

