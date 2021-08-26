import './App.css';


function funguj() {
  const example1 = document.getElementById("example").value;
    console.log(example1);
    document.getElementById("result").innerHTML = example1;
}




function App() {
  return (
    <div className="App">

      <input id="example" ></input>

      <button onClick={funguj} >Klik</button>

      <p>Tvoje odpoveď:</p>

      <p id="result"></p>

    </div>
  );
}

export default App;
