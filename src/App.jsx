import './App.css'
import Counter from './Counter';
import Team from './Team';
import Employee from './employee';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick() {
    alert("Button is clicked!");
  }
  const handleClick2 = () => {
    alert('Button 2 is clicked!');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Employee></Employee>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick2}>Click me again!</button>
      <button onClick={() => { alert('Third button is clicked!!') }}>Third Button is clicked!</button>
      <button onClick={() => addToFive(4)}>Four</button>
    </>
  )
}

export default App