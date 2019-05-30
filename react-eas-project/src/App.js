import React from 'react';
import './App.css';
import SlideContainer from "./Components/SlideContainer";

class App extends React.Component {
  state = {
    pageCount: 0,

    slides: [
      {
        title: "Planet Building",
        text: [""],
        image: "Images/first-page-image.jpg"
      },
      {
        title: "Introduction",
        text: [
					"Welcome to Planet Formation 101! By clicking on that next button, you’ll start a journey through time, before humans existed, before the dinosaurs existed, before our solar system even existed. It’s truly a wonder how we even got to this point, where you’re clicking through this information and teaching yourself about planets. It must be fate.",
					"Without further ado, click the button below to begin!"
					],
        image: "Images/fate-quote.jpg"
      },
      {
        title: "Stars Intro",
        text: [
          "Stars are the backbone of a solar system. They provide energy and the potential for life. But how did they get here? Was it a god? Are religions correct? Or is there a scientific way to explain their existence?"
        ],
        image: "Images/star-intro.png"
      },
      {
        title: "Star Formation 1",
        text: [
          "Before there can be stars, there must be molecular clouds. These are simply large clouds made up of dust and rock that, over time, collapse under its own gravity. Once this happens, the cloud begins spinning and a protostar is able to form in the center.",
          "Where do planets come in?",
          "So why is star formation important? How does this relate to planet formation? The key is in the disk that forms around the star: the protoplanetary disk."
        ],
        image: "Images/proto-disk.jpg"
      },
      {
        title: "Planet Formation 1",
        text: [
					"The material in the protoplanetary disk is the same material that was in the molecular cloud before the protostar formed - rocks and stellar dust. As the disk orbits the young star, these particles gradually stick together and create larger and larger particles. This process is known as accretion."
					],
        image: "Images/accretion-disc.jpg"
      },
      {
        title: "Planet Formation 2",
        text: [
					"The increasing size of these particles eventually begins to pull other particles towards it because of its larger gravitational force. This begins a snowball effect, in which the larger particle size leads to a larger gravitational force which attracts more particles, which creates a larger particle, which leads to…"
					],
        image: "Images/gravity.jpg"
      },
      {
        title: "Planet Formation 3",
        text: [
					"These particles, in time, grow big enough to be classified as planetesimals. There are, of course, differences in the types of planets that will form from these planetesimals. A lot of this has to do with the distance from the star at which the planetesimals form. For example, because the star will have accumulated most of the gas in the solar system, the planetesimals closer to the star will become rocky planets. When you start getting further away from the star, planetesimals can become ice and gas giants."
					],
        image: "Images/planetesimals.png"
      },
      {
        title: "Planet Formation 4",
        text: [
					"As planetesimals continue to orbit the star, they will continue to gather loose material in its orbit and grow in size. Planetesimals, because of their increasing gravitational pull, may even collide with other planetesimals! After millions of years, some planets may even become habitable, but that’s a conversation for another day.",
					"Why does this matter?",
					"Stars and planets allow us to exist, protecting us from the dark recesses of space and providing us with enough energy to survive on our planet. For this reason, we, as the inhabitants of planet Earth, must do as much as possible to give back and protect our planet from ourselves. Improved sustainability will allow us to exist for millennia to come.",
					"Where do we go from here?",
					"There are several new theories as to how planets may form. For example, according to Laird Close in his article, “A giant surprise”, around the star HR 8799, there are 4 giant planets that seem to have formed in conjunction, which doesn’t make sense considering our current planet-forming process.",
					"Understanding how our planets form is incredibly important. It gives us an appreciation for our own home and will hopefully inspire us to make sure we continue to have a future on Earth."
					],
        image: "Images/life-planet.jpg"
      },
      {
        title: "Works Cited",
        text: [
					"Close, Laird. “Extrasolar Planets: A Giant Surprise.” Nature News, Nature Publishing Group, 8 Dec. 2010, www.nature.com/articles/nature09716.s",
					"“Discovering Planets Beyond - How Do Planets Form?” HubbleSite, hubblesite.org/hubble_discoveries/discovering_planets_beyond/how-do-planets-form."
					],
        image: "Images/books.png"
      },
    ]
  }

  changeInfo = (change) => {
    this.setState({ pageCount: this.state.pageCount + change});
  }

  render() {
    return (
      <div className="main-container">
        <SlideContainer 
          slides={this.state.slides} 
          pageCount={this.state.pageCount} 
          changeInfo={this.changeInfo}
        />
      </div>
    );
  }
}

export default App;
