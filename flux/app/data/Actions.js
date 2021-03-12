var ActionTypes = require('./ActionTypes.js')
var HumanDispatcher = require('./HumanDispatcher.js');


const Actions = {

    addItem(text){
        HumanDispatcher.dispatch( {type:ActionTypes.ADD_ITEM, data:text} );
    },

    removeItem(text){
        HumanDispatcher.dispatch( {type:ActionTypes.REMOVE_ITEM, data:text} );
    }

};

export default Actions;