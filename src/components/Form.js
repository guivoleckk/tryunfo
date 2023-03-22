import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="container-father-form">
        <form className="formStyle">
          <label htmlFor="nomeCarta">Nome Carta</label>
          <input
            id="nomeCarta"
            value={ cardName }
            onChange={ onInputChange }
            name="name"
            type="text"
            data-testid="name-input"
          />
          <label htmlFor="descricaoCarta">Descrição</label>
          <input
            id="descricaoCarta"
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
            type="textarea"
            data-testid="description-input"
          />
          <label htmlFor="atributo01">Attr01</label>
          <input
            id="atributo01"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="attr01"
            type="number"
            data-testid="attr1-input"
          />
          <label htmlFor="atributo02">Attr02</label>
          <input
            id="atributo02"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="attr02"
            type="number"
            data-testid="attr2-input"
          />
          <label htmlFor="atributo03">Attr03</label>
          <input
            id="atributo03"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="attr03"
            type="number"
            data-testid="attr3-input"
          />
          <label htmlFor="imagemCarta">Imagem</label>
          <input
            id="imagemCarta"
            value={ cardImage }
            onChange={ onInputChange }
            name="imageCard"
            type="text"
            data-testid="image-input"
          />
          <label htmlFor="rareCard">Raridade</label>
          <select
            id="rareCard"
            value={ cardRare }
            onChange={ onInputChange }
            name="rareCardSelect"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>

          <label htmlFor="temTrunfo">
            Super Tryunfo Da Trybe
            {
              hasTrunfo ? <p>Você já tem um super trunfo em seu baralho</p> : <input
                id="temTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="checkBoxTryunfo"
                type="checkbox"
                data-testid="trunfo-input"
              />
            }
          </label>
          <button
            id="buttonSalvarCard"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            name="buttonDisable"
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
