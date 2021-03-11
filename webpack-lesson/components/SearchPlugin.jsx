var React = require('react');


class SearchPlugin extends React.Component{

    constructor(props){
        super(props);
        this.filterList = this.filterList.bind(this);
    }

    filterList(event){
        var text = event.target.value.trim();
        //call parent bind filter
        //property filter with link on some function
        this.props.filter(text);
    }

    render(){

    return(
            <input placeholder="Search" onChange={this.filterList} />    
        );
    }
}

module.exports = SearchPlugin;