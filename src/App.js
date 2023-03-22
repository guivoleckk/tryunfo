import React from 'react';
import CardList from './CardList';
import Card from './components/Card';
import Form from './components/Form';
import './style.css';

const stateZero = {
  name: '',
  description: '',
  attr01: 0,
  attr02: 0,
  attr03: 0,
  imageCard: '',
  rareCardSelect: 'normal',
  checkBoxTryunfo: false,
  isSaveButtonDisabled: true,
  arrCards: [],
  hasTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = stateZero;
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.buttonIsCheck);
  };

  buttonIsCheck = () => {
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      imageCard,
    } = this.state;

    const maxForAttr = 90;
    const maxForTotal = 210;
    const takingTotalSum = parseInt(attr01, 10)
      + parseInt(attr02, 10) + parseInt(attr03, 10);

    let isDisabled = false;
    if (name === '') {
      isDisabled = true;
    }
    if (description === '') {
      isDisabled = true;
    }
    if (parseInt(attr01, 10) > maxForAttr || parseInt(attr01, 10) < 0) {
      isDisabled = true;
    }
    if (parseInt(attr02, 10) > maxForAttr || parseInt(attr02, 10) < 0) {
      isDisabled = true;
    }
    if (parseInt(attr03, 10) > maxForAttr || parseInt(attr03, 10) < 0) {
      isDisabled = true;
    }
    if (takingTotalSum > maxForTotal) {
      isDisabled = true;
    }
    if (imageCard === '') {
      isDisabled = true;
    }

    this.setState({ isSaveButtonDisabled: isDisabled });
  };

  saveCardFromButton = (event) => {
    event.preventDefault();
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      imageCard,
      rareCardSelect,
      checkBoxTryunfo,
      isSaveButtonDisabled,
    } = this.state;

    const savingFormCard = {
      name,
      description,
      attr01,
      attr02,
      attr03,
      imageCard,
      rareCardSelect,
      checkBoxTryunfo,
      isSaveButtonDisabled,
    };

    this.setState((_prevState) => ({
      arrCards: [..._prevState.arrCards, savingFormCard],
      // vai me retornar um boolean que utilizarei para renderizar ou não o texto no componente do Form
      hasTrunfo: [..._prevState.arrCards, savingFormCard].some((trunfo) => trunfo
        .checkBoxTryunfo),
      name: '',
      description: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      imageCard: '',
      rareCardSelect: 'normal',
      checkBoxTryunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  removeCard = (name) => {
    const { arrCards } = this.state;

    arrCards.forEach((card) => {
      // vai estar pegando o do evento para comparar, logica simples, mas funcional (vi na mentoria gabriel, não esquecer ver novamente)
      if (card.name === name && card.checkBoxTryunfo === true) {
        this.setState({ hasTrunfo: false });
      }
    });
    this.setState(({ arrCards: arrCards.filter((card) => card.name !== name) }));
  };

  render() {
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      imageCard,
      rareCardSelect,
      checkBoxTryunfo,
      isSaveButtonDisabled,
      arrCards,
      hasTrunfo,
    } = this.state;
    return (
      <>
        <h1 className="title-project">Tryunfo do Guilherme</h1>
        <Form
          className="form-escrever-card"
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ imageCard }
          cardRare={ rareCardSelect }
          cardTrunfo={ checkBoxTryunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.saveCardFromButton }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ imageCard }
          cardRare={ rareCardSelect }
          cardTrunfo={ checkBoxTryunfo }
        />
        <CardList
          arrCards={ arrCards }
          removeCard={ this.removeCard }
        />
      </>
    );
  }
}
export default App;
