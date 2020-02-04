import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {value: '', updateClass: false};
     this.handleChange = this.handleChange.bind(this);
   }
 
   handleChange(event) {
     this.setState({value: event.target.value});
   }
   
   handleClick = (event)=>{
     this.setState({value: this.input.value});
     this.state.value === "document" ? this.setState({updateClass: true}) : this.setState({updateClass: false})
      
     console.log(this.state.value)
   }
 
   render() {
     return (
      <Router>
        <div className={this.state.updateClass ? "homePage" : "wrapper"}>
          <div>
            <form className="form-inline">
              <div className="form-group">
                  <input type="text" value={this.state.value} onChange={this.handleChange} ref={ref=> this.input = ref} className="form-control" name="param1" />
                  <Link to={`/${this.state.value}`}>
                      <button type="submit" onClick={this.handleClick}>Search</button>
                  </Link>
              </div>
            </form>
          </div>
          <Switch>
            <Route path="/document">
              <Documents />
            </Route>
          </Switch>
        </div>
      </Router>
     );
   }
 }

 
 export default App;

function Documents(){
  return(
    <div>
      <div>
        <a href="#"> Document1</a>
        <p>Document 1 Description</p>
      </div>
      <div>
        <a href="#"> Document2</a>
        <p>Document 2 Description</p>
      </div>
      <div>
        <a href="#"> Document3</a>
        <p>Document 3 Description</p>
      </div>
    </div>
  )
 }