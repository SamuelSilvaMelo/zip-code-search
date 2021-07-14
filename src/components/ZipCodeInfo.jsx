import React from 'react';
import { connect } from 'react-redux';
import ZipCodeNotFound from '../components/ZipCodeNotFound';

const ZipCodeInfo = (props) => {
  const { ZipCodeData, handleCloseModal } = props;

  if (ZipCodeData.status === 'Not-found') {
    return <ZipCodeNotFound handleCloseModal={ handleCloseModal } />
  } 
  
  return (
    <>
      <h1 className="zip-code-title">CEP: { ZipCodeData.code }</h1>
      <p>
        <strong>Rua:</strong> { ZipCodeData.address }
      </p>
      <p>
        <strong>Bairro:</strong> { ZipCodeData.district }
      </p>
      <p>
        <strong>Cidade/UF:</strong> { `${ZipCodeData.city}/${ZipCodeData.state}` }
      </p>
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
    </>
  )
}

const mapStateToProps = (state) => ({
  ZipCodeData: state.zipCodeDataReducer,
});

export default connect(mapStateToProps)(ZipCodeInfo);