var React = require('react');
var Human = require('./Human.jsx')
var rrd = require ('react-router-dom')



class AllHumans extends React.Component{

    render(){
        //select all data
        const humans = [

            {id:1, name:"Bob"},
            {id:2, name:"Boba"},
            {id:3, name:"Boban"}
        
        ];
        return (
        <div>    
            <h1>List of Humans</h1>
            <ul>
                {
                    humans.map(function(humnan){

                        return ( 
                            <li key = {humnan.id}>
                                <rrd.NavLink to={`/humans/${humnan.id}`}> {humnan.name}</rrd.NavLink>
                            </li>

                        )
                    })       

                }
            </ul>


            <rrd.Switch>
                            <rrd.Route  exact path="/humans/:human_id" component={Human} />
                            {/* <Route  path="/humans/add" component={AddHuman} />
                            <Route  path="/humans/delete/:human_id" component={DeleteHuman} />                                                        
                            <Route  path="/humans/update/:human_id" component={UpdateHuman} />                                                                                     */}
            </rrd.Switch>

        </div>
        
        );
    }
}  

module.exports = AllHumans;