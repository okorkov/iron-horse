import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Contacts from './components/Contacts';
import WoodGallery from './components/WoodGallery';
import ProjectsGallery from './components/ProjectsGallery';
import React from 'react'
import axios from 'axios';
class App extends React.Component {

  state = {
    isLoaded: false,
    data: []
  }

  componentDidMount() {
    axios.get('https://ironhorsestudio.herokuapp.com/api')
    .then(data => this.setState({ isLoaded: true, data: data.data}))
  }

  render(){
    return (
      <div className="App">
        <Header data={this.state.data.header}/>
        <Nav />
        <About data={this.state.data.about}/>
        <ProjectsGallery />
        <WoodGallery />
        <Contacts data={this.state.data.contact}/>
        <Footer />
      </div>
    );
  }
}

export default App;

