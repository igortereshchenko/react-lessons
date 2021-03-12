var ReactDOM =require('react-dom');
var React =require( 'react');
var rrd = require ('react-router-dom');


var  Navigation =require( './component/Navigation.jsx');
var  Home =require( './component/Home.jsx');
var  About =require( './component/About.jsx');
var  NotFound =require( './component/NotFound.jsx');
var  AllHumans =require( './component/human/AllHumans.jsx');

ReactDOM.render(
<rrd.BrowserRouter>
    <div>
        <Navigation />
        <rrd.Switch>
            <rrd.Route exact path='/' component={Home} />
            <rrd.Route exact path='/about' component={About} />            
            <rrd.Route  path='/humans' component={AllHumans} />                        
            <rrd.Route component={NotFound} />            
        </rrd.Switch>
    </div>
</rrd.BrowserRouter>,


document.getElementById('app')

);


