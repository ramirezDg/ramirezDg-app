export interface Ability { id: number, nameAbility: string }
export type AbilityName = Pick<Ability, nameAbility>
export interface NewAbilityName {
  abilityName: string
}
