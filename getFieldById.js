/* @flow */

type ValueType = string

type FieldType = {
  value: ValueType,
  placeholder: string,
  id: string,
  label: string,
  hint?: string,
  validateField: (id: string, fields: Array<any>) => string | true,
}

const getFieldById = (id: string, fields: Array<FieldType>): FieldType => {
  const matchedFields = fields.filter((field: FieldType): boolean => {
    return field.id === id
  })
  return matchedFields[0]
}

export default getFieldById
