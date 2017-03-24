import {
    SET_ACTIVE_CATEGORY_OF_NOTES
} from '../constants/actionTypes';


let initialState = {
     currentActiveCategoryTab: 0,
     notesOfCurrentActiveTab: []
};

const notepad = (state = initialState, action) => {
    let { 
        type, 
        userNotes,
        currentActiveCategoryTab,
        userNoteCategories
    } = action;
    
    switch (type) {
        case SET_ACTIVE_CATEGORY_OF_NOTES: 
            let nameOfActiveCategory = userNoteCategories[currentActiveCategoryTab];
            let notesOfCurrentActiveTab = userNotes.filter(note => 
                                        note.category === nameOfActiveCategory);
            // let notesOfCurrentActiveTab = [];
            console.log(userNotes)
            return { 
                ...state,
                currentActiveCategoryTab,
                notesOfCurrentActiveTab
            };      

        default:
            return state;
    }
};

export default notepad;