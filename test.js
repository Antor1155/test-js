const libphonenumberJs = require("libphonenumber-js");

const trueBoolean = (input) => {
  return input == "true"
    ? true
    : input == "false"
    ? false
    : input == true
    ? true
    : input == false
    ? false
    : null;
};

const getFormattedPhone = (
  phoneNumber,
  countryCode = "BD",
  extraRuleForBD = true
) => {
  try {
    if (!phoneNumber) return null;
    phoneNumber = `${phoneNumber}`;
    if (
      !libphonenumberJs.isPossiblePhoneNumber(phoneNumber, countryCode) ||
      !libphonenumberJs.isValidPhoneNumber(phoneNumber, countryCode)
    ) {
      return null;
    }
    const phoneNum = libphonenumberJs(phoneNumber, countryCode);
    let formatted = "" + phoneNum.number;
    if (countryCode == "BD" && extraRuleForBD) {
      if (phoneNum.number.length < 14 || phoneNum.number.length > 14) {
        return null;
      }
      formatted = formatted.substring(1);
    }
    formatted = trueBoolean(formatted) == null ? formatted : null;
    return formatted;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getCountryCodePhone = (phone) => {
  try {
    const phoneNum = libphonenumberJs.parsePhoneNumber(phone);

    return {
      country_code: phoneNum.country,
      national_number: phoneNum.nationalNumber,
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};

console.log(getFormattedPhone("01325407011"));
console.log(getCountryCodePhone("+8801325407011"));
