import React from 'react';

class AppView extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {newItem:""};

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }


    onChange(e){
        this.setState( {newItem:e.target.value} )

    }

    onClick(e){
        if (this.state.newItem){
            this.props.onAddItem(this.state.newItem); //See mapping in Container => Action( human_name)
            this.setState({newItem:""})
        }
    }
    
    render(){


        let prt_onRemoveItem = this.props.onRemoveItem;
        return(
            <div>
                <input type="text" value = {this.state.newItem} onChange={this.onChange} />
                <button onClick ={this.onClick}>Add new</button>
                
                <h2>Humans</h2>

                <div>
                    {
                        this.props.humans.map(function(human){
                            return <Human key={human} 
                                          human_name={human} 
                                          onRemove = {prt_onRemoveItem} />; //See mapping in Container => Action( human_name)
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

        this.state = {human_name:props.human_name};
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){

        this.props.onRemove(this.state.human_name); //See mapping in Container => Action(human_name)
    }

    render(){
        return(
            <div>
                <p>{this.state.human_name}</p>
                <button onClick={this.onClick}>Delete</button>
            </div>
        );
    }
}

export default AppView;