import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    return (
      <>
        <p data-testid="planet-name">{this.props.planetName}</p>
        <p>oxe</p>
        <img src={ this.props.planetImage } alt="" />
      </>
    );
  }
}

export default PlanetCard;
