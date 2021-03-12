var Immutable = require('immutable');
var ReduceStore = require('flux/utils');

var Actions = require('./Actions.js');
var ActionTypes = require('./ActionTypes.js');
var HumanDispatcher = require('./HumanDispatcher.js');

class HumanStorage extends ReduceStore{

    constructor(){
        //subscribe
        super(HumanDispatcher);
    }

    getInitialState(){
        return Immutable.List.of("Bob","Boba");
    }

    reduce(state, action){

        switch(action.type){
            case ActionTypes.ADD_ITEM:
                if (action.data){
                    return state.push(action.data);
                }
                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.data);
                if (index>-1){
                    return state.delete(index);
                }
                return state;

            default:
                return state;
        }

    }
}

export default new HumanStorage();


