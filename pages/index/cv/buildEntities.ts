interface Entity {
  id: string
}

export default <T>(entities: Array<T>): Array<Entity & T> => {
  return entities.map((e: T, i) => ({ id: i.toString(), ...e }))
}
