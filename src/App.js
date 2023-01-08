import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [inputArray, setInputArray] = useState([]);

  function handleChange(e) {
    console.log(e);
    const newValueInput = e.target.value;
    setInputText(newValueInput);
  }

  function addText() {
    if (inputText === '') {
      alert('Empty');
    } else {
      setInputArray((prevText) => {
        return [...prevText, inputText];
      });
      setInputText('');
    }
  }

  function deleleText(id) {
    setInputArray((prevItems) => {
      return prevItems.filter((text, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className='App'>
      <div id='container'>
        <p id='title'>To do</p>
        <input type='text' onChange={handleChange} value={inputText} />
        <button onClick={addText}>Add</button>
        <div id='listContainer'>
          {inputArray.map((list, id) => {
            return (
              <div id='eachList' onClick={() => deleleText(id)} key={id}>
                <div>{list}</div>
                <button style={{ backgroundColor: 'red' }}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
