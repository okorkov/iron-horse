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
    isLoaded: true,
    data: {
      header: {
      header_text: "IRON HORSE STUDIO"
      },
      about: {
      about_text: "Thanks for stopping by! We are a small, full-service, family-owned wood business based in Fairfax, California. We specialize in custom, reclaimed wood projects from sustainable, local sources. It is a blessing to live in Northern California, with such a wide variety of species. We also specialize in esoteric species from around the world. All of our wood is one hundred percent reclaimed, and handpicked by our specialists. Most of our projects are custom; created to the client's specification, and completely tailored to your liking. We always have a nice, rotating inventory as well if you would like to do your own project. We are a full-service wood mill, and offer planing, sanding, and milling services; collaborating with a local Master Metalsmith if needed. Feel free to reach out, and let's talk about your next project!",
      about_image: "/about_image.jpeg"
      },
      project_pics: [
      {
      url: "/pi1.jpeg",
      desc: "Buckeye Burl epoxy charcuterie board"
      },
      {
      url: "/pi2.jpeg",
      desc: null
      },
      {
      url: "/pi3.jpeg",
      desc: null
      },
      {
      url: "/pi4.jpeg",
      desc: null
      },
      {
      url: "/pi5.jpeg",
      desc: null
      },
      {
      url: "/pi6.jpeg",
      desc: null
      }
      ],
      wood_pics: [
      {
      url: "/wi1.jpeg",
      desc: null
      },
      {
      url: "/wi2.jpeg",
      desc: null
      },
      {
      url: "/wi3.jpeg",
      desc: null
      },
      {
      url: "/wi4.jpeg",
      desc: null
      },
      {
      url: "/wi5.jpeg",
      desc: null
      },
      {
      url: "/wi6.jpeg",
      desc: null
      },
      {
      url: "/wi7.jpeg",
      desc: null
      },
      {
      url: "/wi8.jpeg",
      desc: null
      },
      {
      url: "/wi9.jpeg",
      desc: null
      },
      {
      url: "/wi10.jpeg",
      desc: null
      }
      ],
      contact: {
      email: "clougehrig@gmail.com"
      },
      yelp: {
      reviews: [
      {
      id: "r6Jla7MWiFVEJJmHlxYtiQ",
      url: "https://www.yelp.com/biz/iron-horse-studio-fairfax-2?adjust_creative=pRSsAgJEEuhGK_mPeONTJQ&hrid=r6Jla7MWiFVEJJmHlxYtiQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=pRSsAgJEEuhGK_mPeONTJQ",
      text: "The quality of the work is amazing! It fits our home perfectly. Charles, the gentleman, who made are table, was very punctual and an awesome guy. I'm...",
      rating: 5,
      time_created: "2021-05-29 11:45:35",
      user: {
      id: "jnf_5BOLuJxGRAy6DEIEvg",
      profile_url: "https://www.yelp.com/user_details?userid=jnf_5BOLuJxGRAy6DEIEvg",
      image_url: "https://s3-media1.fl.yelpcdn.com/photo/WMUlgvR5yM_j2QZJdl4wsA/o.jpg",
      name: "Jonathan N."
      }
      },
      {
      id: "gBLgTOwud742Wy2OB1noKw",
      url: "https://www.yelp.com/biz/iron-horse-studio-fairfax-2?adjust_creative=pRSsAgJEEuhGK_mPeONTJQ&hrid=gBLgTOwud742Wy2OB1noKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=pRSsAgJEEuhGK_mPeONTJQ",
      text: "I have ordered a custom coffee table for my living room from Charles and was amazed by results. I have had an image in my head on how it should look like...",
      rating: 5,
      time_created: "2021-06-07 15:49:10",
      user: {
      id: "4-MrSd8eTylsXnAvlGYrDw",
      profile_url: "https://www.yelp.com/user_details?userid=4-MrSd8eTylsXnAvlGYrDw",
      image_url: null,
      name: "Ken M."
      }
      }
      ],
      total: 2,
      possible_languages: [
      "en"
      ]
      }
      }
  }

  componentDidMount() {
    // axios.get('https://www.ironspringsroad.com/api')
    //   .then(data => this.setState({ isLoaded: true, data: data.data }))
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

