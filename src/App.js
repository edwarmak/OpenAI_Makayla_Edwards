import logo from './logo.svg';
import './App.css';

function App() {

  const handleSubmit = event => {
    event.preventDefault()
    alert('Sumbitted')
  }

  return (
    <div className="App">
      <h1>OpenAI App</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>
            <input type="text"></input>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>

        <div id="responses">

        </div>

    </div>
  );
}

export default App;
