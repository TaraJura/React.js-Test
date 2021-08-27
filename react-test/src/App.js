import './App.css';

function funguj1() {
  var input1save = document.getElementById("input1").value;
  document.getElementById("output1").innerHTML = input1save;
}

function App() {
  return (
    <div className="App">
      <input id="input1" placeholder="Tvůj text"></input>
      <button onClick={funguj1}>Klik</button>
      <h1>Výsledek:</h1>
      <p id="output1"></p>
    </div>
  );
}

export default App;
