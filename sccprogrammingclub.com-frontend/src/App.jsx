import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message);
    })
    .catch(() => {
      console.error('Failed to connect to backend');
    });
}, []);
  
  return (
    <h1>Hello, world!</h1>
  )
}

export default App
