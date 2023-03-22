import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardList extends Component {
  render() {
    const { arrCards, removeCard } = this.props;
    return (
      <>
        <h3 className="tittle-cardList">Cards!</h3>
        <section className="section-cardlist">

          <div className="div-cardList">

            {arrCards.map(({
              name,
              description,
              attr01,
              attr02,
              attr03,
              imageCard,
              rareCardSelect,
              hasTrunfo,
            }, index) => (
              <section className="section-cardListFinal" key={ index }>
                <p>
                  {name}
                </p>
                <p>
                  {description}
                </p>
                <p>
                  {attr01}
                </p>
                <p>
                  {attr02}
                </p>
                <p>
                  {attr03}
                </p>
                <div>
                  <img src={ imageCard } alt={ name } />
                </div>
                <p>
                  {rareCardSelect}
                </p>
                {hasTrunfo && <p>Trunfo</p>}
                <button onClick={ () => removeCard(name) } data-testid="delete-button">
                  Excluir
                </button>
              </section>
            ))}
          </div>
        </section>
      </>
    );
  }
}

CardList.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  attr01: PropTypes.string,
  attr02: PropTypes.string,
  attr03: PropTypes.string,
  imageCard: PropTypes.string,
  rareCardSelect: PropTypes.string,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default CardList;
