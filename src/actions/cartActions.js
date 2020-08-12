export const ADD_FEATURE = 'ADD_FEATURE'

export const addFeature = (index) => {
    return {
        type: ADD_FEATURE,
        payload: index
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const removeFeature = (index) => {
    return {
        type: REMOVE_FEATURE,
        payload: index
    }
}