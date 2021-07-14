import React from 'react';
import { connect } from 'react-redux';
import { handleZipCodeInput, requestZipCode } from '../redux/actions';

const Home = (props) => {
    const { handleInput, requestZipCodeData, zipCodeMask, zipCode } = props;
    console.log(zipCode)
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
          onClick={ () => requestZipCodeData(zipCode) }
        >
          Pesquisar
        </button>
      </form>
    )
}

const mapStateToProps = (state) => ({
  zipCodeMask: state.formReducer.zipCode,
  zipCode: state.formReducer.zipCode.replace('-', ""),
});

const mapDispatchToProps = (dispatch) => ({
  handleInput: ({ target }) => dispatch(handleZipCodeInput(target)),
  requestZipCodeData: (zipCode) => dispatch(requestZipCode(zipCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
