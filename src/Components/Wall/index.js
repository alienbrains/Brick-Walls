import React from "react";

import Brick from "../Brick/index";

import "./style.css";

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bricks: [1, 2, 3, 4] // initial bricks to display
    };
  }

  addBrick = () => {
    //  first copying the old data
    const newBricks = [...this.state.bricks];

    //  adding new data to previously copied data
    newBricks.push(newBricks.length + 1);

    //  updating the view using setState
    this.setState({
      bricks: newBricks
    });
  };

  //  executed when the user clicks on a brick
  onBrickClick = (number) => {
    window.alert("You Clicked Brick " + number);
  };

  //  render function returns what to display to the user
  render = () => {
    return (
      <div className="wall-container">
        {this.state.bricks.map((num) => {
          return <Brick onClick={this.onBrickClick} number={num} />;
        })}

        <div className="add-btn-box">
          <button onClick={this.addBrick} className="add-btn">
            +
          </button>
        </div>
      </div>
    );
  };
}

export default Wall;
