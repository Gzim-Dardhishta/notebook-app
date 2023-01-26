export const initialState = {
    favorites: [],
    codingNotes: []
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.item],
            };

        case 'REMOVE_FAVORITE':
            const index = state.favorites.findIndex(
                (favoriteItem) => favoriteItem.id == action.id
            );
            // newFavorites is the new array
            let newFavorites = [...state.favorites];

            if (index >= 0) {
                newFavorites.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove favote note (id: ${action.id}) as it's not in favorites list!`
                )
            }

            return {
                ...state,
                favorites: newFavorites
            }

        case 'ADD_TO_CODINGNOTES':
            return {
                ...state,
                codingNotes: [...state.codingNotes, action.item],
            };

        case 'REMOVE_CODINGNOTE':
            const index1 = state.favorites.findIndex(
                (codingNoteItem) => codingNoteItem.id == action.id
            );
            
            let newCodingNotes = [...state.codingNotes];

            if (index1 >= 0) {
                newCodingNotes.splice(index1, 1)
            } else {
                console.warn(
                    `Can't remove note (id: ${action.id}) as it's not in favorites list!`
                )
            }

            return {
                ...state,
                codingNotes: newCodingNotes
            }

        default:
            return state;
    }
};


export default reducer;




