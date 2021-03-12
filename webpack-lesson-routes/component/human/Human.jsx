var React = require('react');

class Human extends React.Component{
    render(){
        const human_id = this.props.match.params.human_id; //from url

        //select data by id

        return (<h1>Human sub view with id {human_id}</h1>);
    }
}  

module.exports = Human;