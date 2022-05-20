import axios from 'axios'
import React, { useState, useEffect } from 'react'

console.log(process.env.OPENAI_API_KEY)

const App = () => {
  const [prompt, setPrompt] = useState('Prompt')
  const [answer, setAnswer] = useState('')

  let changePrompt = (event) => {
    setPrompt(event.target.value)
  }

  let getAnswer = () => {
    axios.get('https://beta.openai.com/examples/default-qa').then((response) => {
      setAnswer(response.data.answer)
    })
  }

  useEffect(() => {
    getAnswer()
  }, [])

  return (
    <div className="App">
      <h1>OpenAI App</h1>
        <form>
          <div>
            <label>
            <input type="text" onChange={changePrompt}></input>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>

        <div id="responses">
          <h1>Responses</h1>
          <div>
            <h4>Prompt:</h4>
              <p>{prompt}</p>
            <h4>Response:</h4>
              <p>{answer}</p>
          </div>
        </div>

    </div>
  );
}

export default App;
