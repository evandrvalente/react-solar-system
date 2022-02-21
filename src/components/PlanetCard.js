import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetWidth } = this.props;
    return (
      <div data-testid="planet-card" className="card-content">
        <p data-testid="planet-name">{planetName}</p>
        <img
          width={ `${planetWidth}px` }
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
  planetWidth: PropTypes.number.isRequired,
};

export default PlanetCard;
