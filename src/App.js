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
    axios.get('https://cors-anywhere.herokuapp.com/https://ironhorsestudio.herokuapp.com/api')
    .then(data => this.setState({ isLoaded: true, data: data.data}))
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer qeFH5UPL9KU6OyCNvfeb6lkRxBrHvDY-HQ0uGH9nqH7PCTOO7IE9Vk-K4PYAGyNqq3IChAcFu35PbKhw4D9003qmSQhicplRzn_YKFzJH7hCi7xsOl9KhJzJLQvAYHYx");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.yelp.com/v3/businesses/iron-horse-studio-fairfax/reviews", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  render(){
    return (
      (this.state.isLoaded)?
      <div className="App">
        <Header data={this.state.data.header}/>
        <Nav />
        <About data={this.state.data.about}/>
        <ProjectsGallery data={this.state.data.project_pics}/>
        <WoodGallery data={this.state.data.wood_pics}/>
        <Yelp />
        <Contacts data={this.state.data.contact}/>
        <Footer />
      </div> 
      : <div className="App"></div>
    );
  }
}

export default App;

