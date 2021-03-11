var React = require('react');

class Human extends React.Component{
// view for 1 Human
    render(){
        return <li><p>{this.props.inn}</p> <p>{this.props.name}</p></li>
    }
}

module.exports = Human;