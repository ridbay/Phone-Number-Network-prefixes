import networks from './networks';

interface INetwork {
  prefix: string;
  name: string;
  logo: string;
}
export function getNetworks(): INetwork[] {
  return networks;
}

/**
 * @function validatePhoneNumberSync
 * @description Validates a number synchronously
 * @returns {object} - returns a result construct
 */
export const validatePhoneNumber = (phoneNumber: string) => {
  const errors: any[] = [];

  const isValidLength = `${phoneNumber}`.length === 11;
  const isNumber = /^[0-9]*$/.test(phoneNumber);

  if (!isValidLength) {
    errors.push('Phone number should be 11 numbers');
  }

  if (!isNumber) {
    errors.push('Invalid number characters');
  }

  const networkType = networks.find(
    (network: INetwork) => network.prefix === `${phoneNumber}`.slice(0, network.prefix.length),
  );
  if (!networkType) {
    errors.push("Phone number doesn't match a valid service provider");
  }
  const allChecksPass = [!!networkType, isNumber, isValidLength].every((val) => val === true);

  const errorObject = {
    errors,
    isValid: false,
  };

  const successObject = {
    network: networkType?.name,
    isValid: true,
  };

  return allChecksPass ? successObject : errorObject;
};
