import AppView from '../views/AppView.js';
import {Container} from 'flux/utils';
import React from 'react';
import Actions from '../data/Actions.js';
import HumanStorage from '../data/HumanStorage.js';


class AppContainer extends React.Component{

    static getStores(){
        return [ HumanStorage ] ;
    }

    static calculateState(prevState){
        return {
                 humans:HumanStorage.getState(), //refresh DB
                 onAddItem:Actions.addItem, //mapping
                 onRemoveItem:Actions.removeItem //mapping
                }
    }

    render(){
        return(
            <AppView humans = {this.state.humans}
                     onRemoveItem = {this.state.onRemoveItem}
                     onAddItem = {this.state.onAddItem }
                     />
        );
    }
}

export default Container.create(AppContainer);
