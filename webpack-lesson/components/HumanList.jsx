var React = require('react');
var SearchPlugin = require('./SearchPlugin.jsx');
var Human  =require('./Human.jsx');



class HumanList extends React.Component{

    constructor(props){
        super(props);
        this.state = {items:this.props.data};

        this.filterList = this.filterList.bind(this);
    }


    filterList(text){

        var filteredHumans = this.props.data.filter(function(item){

            var result = item['name'].toLowerCase().search(text.toLowerCase())!=-1;

            return result;
        })

        this.setState({items:filteredHumans});
    }

    // view for list of Humans
    // props.data=[Human1, Human2,...]
    render(){

        return(
            <div>
                <SearchPlugin filter={this.filterList}/>

                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Human inn={item['inn']}  name = {item['name']}  />
                        })
                    }
                </ul>
            </div>


        );
    }
}

module.exports = HumanList;