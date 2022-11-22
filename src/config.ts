import type { Model, ModelStatic } from 'sequelize'

export type ModelFieldConfig = {
  type?: string,
  render?: boolean,
  description?: string,
}

export type ModelActionConfig = {
  operation?: string,
  responseType?: string,
  attachment?: boolean,
  form?: Record<string, string>,
}

export type ModelConfig = {
  role?: number,
  fields?: ModelFieldConfig[],
  recordActions: ModelActionConfig,
  listActions: ModelActionConfig,
}

export const getConfigurations = <M extends Model<any, any>>(model: ModelStatic<M>) => {
  const {
    options: { name: { singular } = {} },
    getAttributes: attributes,
    sequelize,
    associations,
  } = model

  const typeDef
}
