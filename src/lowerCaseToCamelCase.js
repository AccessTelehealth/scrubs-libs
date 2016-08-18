/* @flow */

const lowerCaseToCamelCase = (string: string): string => {
  return string.replace(/([a-z])([a-z]*)-?([a-z])?([a-z]*)?/g,
  (match, p1, p2, p3, p4) => {
    return `${p1.toUpperCase()}${p2}${p3 && p3.toUpperCase() || ''}${p4 || ''}`
  })
}

export default lowerCaseToCamelCase
