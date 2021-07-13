import React from 'react';
import { connect } from 'react-redux';
import { handleZipCodeInput } from '../redux/actions';

const Home = (props) => {
  const { handleInput } = props;
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
      >
        Pesquisar
      </button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleInput: ({ target }) => dispatch(handleZipCodeInput(target)),
})

export default connect(null, mapDispatchToProps)(Home);
