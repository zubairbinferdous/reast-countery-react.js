
import './App.css';
import Person from './component/Person/Person';



function App() {

  return (
    <div className="App">
      <Header></Header>
      <Person></Person>
    </div>
  );
}



function Header() {
  return(
    <div className="country-header">
      <h1> this is all our head area</h1>
    </div>
  )
}

export default App;
