var React = require('react');

class AppView extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {newItem:""};

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }


    onChange(e){
        this.setState({newItem:e.target.value})

    }

    onClick(e){
        if (this.state.newItem){
            this.props.onAddItem(this.state.newItem)
            this.setState({newItem:""})
        }
    }
    
    render(){
        return(
            <div>
                <input type="text" value = {this.state.newItem} onChange={this.onChange} />
                <button onClick ={this.onClick}>Add new</button>
                
                <h2>Humans</h2>

                <div>
                    {
                        this.props.humans.map(function(human){
                            return <Human key={human} 
                                          name={human} 
                                          onRemove = {this.props.onRemoveItem}/>;
                        })
                    }
                </div>

            </div>
        );
    }
}

class Human extends React.Component{
    constructor(props){
        super(props);

        this.state = {name:props.name};
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){

        this.props.onRemove(this.state.name)
    }

    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.onClick}>Delete</button>
            </div>
        );
    }
}

export default AppView;