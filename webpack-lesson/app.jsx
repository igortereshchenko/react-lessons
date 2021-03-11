var ReactDOM = require('react-dom');
var React = require('react')
var HumanList = require('./components/HumanList.jsx');


const dataset = [
    {inn:1, name:'Bob'},
    {inn:2, name:'Boba'},
    {inn:3, name:'Boban'},
]

ReactDOM.render(<HumanList data = {dataset} />, document.getElementById('app'))
