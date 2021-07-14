import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { handleZipCodeInput, requestZipCode } from '../redux/actions';
import ZipCodeInfo from '../components/ZipCodeInfo';
import ZipCodeError from '../components/ZipCodeError';

Modal.setAppElement('#root');

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  async handleOpenModal() {
    const { requestZipCodeData, zipCode } = this.props;

    await requestZipCodeData(zipCode);

    this.setState({
      showModal: true,
    })
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
    })
  }

  render() {
    const { showModal } = this.state;
    const { handleInput, zipCodeMask, ZipCodeData } = this.props;
    return (
      <form>
        <label>
          <input
            id="CEP-Input"
            name="CEP-Input"
            onChange={ handleInput }
            placeholder="Digite seu CEP"
            maxLength="9"
            type="text"
            value={ zipCodeMask }
          />
        </label>
        <button
          type="button"
          onClick={ () => this.handleOpenModal() }
        >
          Pesquisar
        </button>
        <Modal
          isOpen={showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Example Modal"
        >
          {(!ZipCodeData.failure) 
            ? <ZipCodeInfo />
            : <ZipCodeError />
          }
        </Modal>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  zipCodeMask: state.formReducer.zipCode,
  zipCode: state.formReducer.zipCode.replace('-', ""),
  ZipCodeData: state.zipCodeDataReducer,
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: ({ target }) => dispatch(handleZipCodeInput(target)),
  requestZipCodeData: (zipCode) => dispatch(requestZipCode(zipCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
