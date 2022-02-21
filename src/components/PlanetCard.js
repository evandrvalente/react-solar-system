import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetProportion } = this.props;
    const standardSize = 250;
    const proportionalSize = standardSize * planetProportion;
    return (
      <div data-testid="planet-card" className="planet-div card-content">
        <p data-testid="planet-name">{planetName}</p>
        <img
          width={ `${proportionalSize}px` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetProportion: PropTypes.number.isRequired,
};

export default PlanetCard;
