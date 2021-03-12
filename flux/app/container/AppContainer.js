var AppView = require('../views/AppView.js');
var Container = require('flux/utils');
var React = require('react');
var Action = require('../data/Actions.js');
var HumanStorage = require('../data/HumanStorage.js');


class AppContainer extends React.Component{

    static getStores(){
        return [ HumanStorage ] ;
    }

    static calculateState(prevState){
        return {
                 humans:HumanStorage.getState(),
                 onAddItem:Action.addItem,
                 onRemoveItem:Action.removeItem
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
