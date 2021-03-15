import ActionTypes from "./ActionTypes.js";
import HumanDispatcher from "./HumanDispatcher.js";

//mapping from Component action to Dispatcher Event => Store
const Actions = {

    addItem(human_name){
        HumanDispatcher.dispatch( {type:ActionTypes.ADD_ITEM, human_name:human_name} );
    },

    removeItem(human_name){
        HumanDispatcher.dispatch( {type:ActionTypes.REMOVE_ITEM, human_name:human_name} );
    }

};

export default Actions;