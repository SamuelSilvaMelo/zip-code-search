import React from 'react';
import { connect } from 'react-redux';
import { handleZipCodeInput, requestZipCode } from '../redux/actions';

const Home = (props) => {
  const { handleInput, requestZipCodeData, zipCode } = props;
  return (
    <form>
      <label>
        <input
          id="CEP-Input"
          name="CEP-Input"
          onChange={ handleInput }
          placeholder="Digite seu CEP"
          type="number"
        />
      </label>
      <button
        type="button"
        onClick={ () => requestZipCodeData(zipCode) }
      >
        Pesquisar
      </button>
    </form>
  )
}

const mapStateToProps = (state) => ({
  zipCode: state.formReducer.zipCode,
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: ({ target }) => dispatch(handleZipCodeInput(target)),
  requestZipCodeData: (zipCode) => dispatch(requestZipCode(zipCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
