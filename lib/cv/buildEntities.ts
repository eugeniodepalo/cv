export interface Entity {
  id: string
}

export default <T>(entities: T[]): (Entity & T)[] => entities.map((e: T, i) => ({ id: i.toString(), ...e }))
