import React from "react";
import './App.css';

//Transform the App.js into a class-based component.

class App extends React.Component {
  //Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.

  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Gerard Butler",
        bio: "Gerard James Butler (born 13 November 1969) is a Scottish actor and film producer.",
        imgSrc:
          "https://i2-prod.dailyrecord.co.uk/incoming/article1509202.ece/ALTERNATES/s1200c/Gerard%20Butler%20on%20the%20Tonight%20Show%20-%20December%202012",
        profession: "Actor",
      },
      show: true,
      timeElapsed: 0,
    };
  }

  // // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     this.setState((prevState) => ({ timeElapsed: prevState.timeElapsed + 1 }));
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  handleClick = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;
    return (
      <div>
        {/* //Add a button that toggles the show state. When the show state is true, the person's profile will appear. */}

        <button id = "btn" onClick={this.handleClick}>
          {show ? "Cacher la personne" : "Afficher la personne"}
        </button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt="Profile picture" />
            <p>{person.bio}</p>
            <p>Profession : {person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
