var redux         = require('redux');

console.log("starting reduex");

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: [],
};
var reducer = (state = stateDefault, action) => {

    switch(action.type){
        case "CHANGE_SEARCH_TEXT":
            return {
                ...state,
                searchText: action.searchText,
                }
        default:
            return state;
    }
}
var store         = redux.createStore(reducer),
    currentState  = store.getState();

console.log('currentState', currentState);

var action = {
    type: "CHANGE_SEARCH_TEXT",
    searchText: 'change',
}
store.dispatch(action);
