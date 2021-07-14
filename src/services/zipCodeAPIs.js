export const viaCEP = (zipCode) => (
  fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then((response) => response.json())
    .then((data) => {
      const { cep, logradouro, bairro, localidade, uf, erro } = data;

      if(erro) {
        return ({
          sourse: 'https://viacep.com.br',
          status: 'Not-found',
        })
      }

      return ({
        sourse: 'https://viacep.com.br',
        code: cep,
        address: logradouro,
        district: bairro,
        city: localidade,
        state: uf,
        status: 'OK'
      })
    })
);

export const apiCEP = (zipCode) => (
  fetch(`https://ws.apicep.com/busca-cep/api/cep/${zipCode}.json`)
    .then((response) => response.json())
    .then((data) => {
      const { code, address, district, city, state, ok } = data;

      if (!ok) {
        return ({
          sourse: 'https://apicep.com/api-de-consulta/',
          status: 'Not-found',
        })
      }

      return ({
        sourse: 'https://apicep.com/api-de-consulta/',
        code: code,
        address: address,
        district: district,
        city: city,
        state: state,
        status: 'OK',
      })
    })
);

export const findCEP = (zipCode) => (
  fetch(`https://api.findcep.com/v1/cep/${zipCode}.json`)
    .then((response) => response.json())
    .then((data) => {
      const { cep, logradouro, bairro, cidade, uf, status_code } = data;

      if (status_code === 404) {
        return ({
          sourse: 'https://www.findcep.com/',
          status: 'Not-found',
        })
      }

      return ({
        sourse: 'https://www.findcep.com/',
        code: cep,
        address: logradouro,
        district: bairro,
        city: cidade,
        state: uf,
        status: 'OK',
      })
    })
);
