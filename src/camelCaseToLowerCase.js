/* @flow */

const camelCaseToLowerCase = (string: string): string => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export defaul camelCaseToLowerCase
