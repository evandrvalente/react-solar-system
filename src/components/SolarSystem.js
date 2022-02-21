import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system-container">
        <Title headline="Planetas" />
        {
          planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              planetWidth={ planet.size }
            />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
