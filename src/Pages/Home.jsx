import React from 'react';

const Home = () => (
  <form>
    <label>
      <input
        id="CEP-Input"
        name="CEP-Input"
        placeholder="Digite seu CEP"
        type="text"
      />
    </label>
    <button
      type="button"
    >
      Pesquisar
    </button>
  </form>
)

export default Home;
