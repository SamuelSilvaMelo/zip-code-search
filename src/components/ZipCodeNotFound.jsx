import React from 'react';
import { connect } from 'react-redux';

const ZipCodeNotFound = (props) => {
  const { ZipCodeData, handleCloseModal } = props;
  return (
    <div>
      <h3>CEP não encontrado. Verifique se digitou corretamente e tente outra vez.</h3>
      <div className="zip-code-footer">
        <a
          href={ ZipCodeData.sourse }
          target="_blank"
          rel="noreferrer"
        >
          Fonte
        </a>
        <button
          type="button"
          onClick={ handleCloseModal }
        >
          Sair
        </button>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  ZipCodeData: state.zipCodeDataReducer,
});

export default connect(mapStateToProps)(ZipCodeNotFound);
