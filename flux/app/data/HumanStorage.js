import Immutable from "immutable";
import {ReduceStore} from 'flux/utils';

import Actions from './Actions.js';
import ActionTypes from './ActionTypes.js';
import HumanDispatcher from './HumanDispatcher.js';

class HumanStorage extends ReduceStore{

    constructor(){
        //subscribe, set store manager
        super(HumanDispatcher);
    }
    getInitialState(){
        return Immutable.List.of("Bob","Boba");
    }
    reduce(state, action){
        switch(action.type){
            case ActionTypes.ADD_ITEM:
                if (action.human_name){
                    return state.push(action.human_name);
                }
                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.human_name);
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


