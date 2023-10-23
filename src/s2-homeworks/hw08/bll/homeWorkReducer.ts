import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a: UserType, b: UserType) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                })
            } else if (action.payload === 'down') {
                return [...state].sort((a: UserType, b: UserType) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                })
            }
            return state
        }
        case 'check': {
            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
