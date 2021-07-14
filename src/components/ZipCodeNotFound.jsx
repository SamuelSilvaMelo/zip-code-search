import React from 'react';
import { connect } from 'react-redux';

const ZipCodeNotFound = (props) => {
  const { ZipCodeData } = props;
  return (
    <div>
      CEP não encontrado. Verifique se digitou corretamente e tente outra vez.
      <a href={ ZipCodeData.sourse }>Fonte</a>
    </div>
  )
};

const mapStateToProps = (state) => ({
  ZipCodeData: state.zipCodeDataReducer,
});

export default connect(mapStateToProps)(ZipCodeNotFound);
