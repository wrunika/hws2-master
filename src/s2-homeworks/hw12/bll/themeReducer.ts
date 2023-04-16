export type StateType = {themeId: number}
type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

const initState: StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => { // fix any
    //debugger
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}


export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
