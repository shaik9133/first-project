import logo from './logo.svg';
import './App.css';
        
function App() {
  return <div>
    <h1>Users:</h1>
  <section className="container">
    <User name="JOE" job="UI Dev" location="Hyderbad" />
    <User name="MOHAMMAD" job="Engineer" location="Bangalore" />
    <User name="BASHID" job="Testing" location="Mumbai"/>
  </section>
  </div>
}


function  User(props) {
  return <div className="user">
    <h3>{props.name}</h3>
    <p>Job: {props.job}</p>
    <p>Location: {props.location}</p>
  </div>
}

export default App;
