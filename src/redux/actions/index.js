export const HANDLE_ZIP_CODE_INPUT = 'HANDLE_ZIP_CODE_INPUT';

export const handleZipCodeInput = (target) => {
  const { value } = target;
  return {
    type: HANDLE_ZIP_CODE_INPUT,
    zipCode: value,
  }
};
