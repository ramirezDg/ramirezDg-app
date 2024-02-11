export interface Ability { id: number, nameAbility: string }
export type AbilityName = Pick<Ability, nameAbility>
export type NewAbilityName = Omit<Ability, id>
