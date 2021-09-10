import {
  viaCEP,
  apiCEP,
  findCEP,
} from '../../services/zipCodeAPIs'

export const HANDLE_ZIP_CODE_INPUT = 'HANDLE_ZIP_CODE_INPUT';
export const ZIP_CODE_REQUEST = 'ZIP_CODE_REQUEST';
export const ZIP_CODE_RECEIVE = 'ZIP_CODE_RECEIVE';
export const ZIP_CODE_FAILURE = 'ZIP_CODE_FAILURE';

export const handleZipCodeInput = (target) => {
  const { value } = target;

  // CEP Mask: https://pt.stackoverflow.com/questions/199264/como-faco-uma-mascara-para-um-input/199276
  return ({
    type: HANDLE_ZIP_CODE_INPUT,
    zipCode: value.replace(/^(\d{5})(\d)/,"$1-$2"),
  })
};

export const zipCodeRequest = () => ({
  type: ZIP_CODE_REQUEST,
});

export const zipCodeReceive = (data) => {
  const { sourse, code, address, district, city, state, status } = data;
  return ({
    type: ZIP_CODE_RECEIVE,
    sourse,
    code,
    address,
    district,
    city,
    state,
    status,
  })
};

export const zipCodeFailure = () => ({
  type: ZIP_CODE_FAILURE,
})

export const requestZipCode = (zipCode) => (dispatch) => {
  dispatch(zipCodeRequest());
  return (
    viaCEP(zipCode)
      .then((viaCEPData) => dispatch(zipCodeReceive(viaCEPData)))
      .catch(() => {
        dispatch(zipCodeRequest())
        return (
          apiCEP(zipCode)
            .then((apiCEPData) => dispatch(zipCodeReceive(apiCEPData)))
            .catch(() => {
              dispatch(zipCodeRequest())
              return (
                findCEP(zipCode)
                  .then((findCEPData) => dispatch(zipCodeReceive(findCEPData)))
                  .catch(() => dispatch(zipCodeFailure()))
              )
            })
        )
      })
  )
}
