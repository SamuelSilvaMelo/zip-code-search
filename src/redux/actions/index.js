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
  if (value.length === 5) {
    return ({
      type: HANDLE_ZIP_CODE_INPUT,
      zipCode: `${value}-`,
    })
  }

  return ({
    type: HANDLE_ZIP_CODE_INPUT,
    zipCode: value,
  })
};

export const zipCodeRequest = () => ({
  type: ZIP_CODE_REQUEST,
});

export const zipCodeReceive = (data) => ({
  type: ZIP_CODE_RECEIVE,
  data,
});

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
