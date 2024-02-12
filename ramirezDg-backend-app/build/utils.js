"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseAbilityName = (abilityName) => {
    if (!isString(abilityName)) {
        throw new Error('Incorrect or missing Ability');
    }
    return abilityName;
};
const isString = (string) => {
    return typeof string === 'string';
};
const toNewAbilityEntry = (object) => {
    const newAbilityEntry = {
        abilityName: parseAbilityName(object.abilityName)
    };
    return newAbilityEntry;
};
exports.default = toNewAbilityEntry;
