import React from 'react';
import { connect } from 'react-redux';
import ZipCodeNotFound from '../components/ZipCodeNotFound';

const ZipCodeInfo = (props) => {
  const { ZipCodeData } = props;

  if (ZipCodeData.status === 'Not-found') {
    return <ZipCodeNotFound />
  } 
  
  return (
    <>
      <h1>CEP: { ZipCodeData.code }</h1>
      <p>Rua: { ZipCodeData.address }</p>
      <p>Bairro: { ZipCodeData.district }</p>
      <p>Cidade/UF: { `${ZipCodeData.city}/${ZipCodeData.state}` }</p>
      <a href={ ZipCodeData.sourse }>Fonte</a>
    </>
  )
}

const mapStateToProps = (state) => ({
  ZipCodeData: state.zipCodeDataReducer,
});

export default connect(mapStateToProps)(ZipCodeInfo);