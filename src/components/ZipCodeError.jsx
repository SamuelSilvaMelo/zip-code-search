import React from 'react';

const ZipCodeError = (props) => {
  const { handleCloseModal } = props;
  return (
    <div>
      <h3>Servidores fora do ar! Infelizmente não conseguimos encontrar a informação do seu CEP. Por favor tente novamente, mais tarde.</h3>
      <div className="zip-code-footer">
        <button type="button" onClick={ handleCloseModal }>Sair</button>
      </div>
    </div>
  );
}

export default ZipCodeError;
