import './App.css'
import PropTypes from 'prop-types';

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Persone></Persone>
      <Device name="laptop" price="55k"></Device>
      <Device name="phone" price="30k"></Device>
      <Student name="Abid" age="20"></Student>
      <Student name="Hridoy" age="21"></Student>
      <Student name="Rifat" age="22"></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props) {
  return <h3>This device : {props.name} Price : {props.price}</h3>
}


function Persone() {
  const age = 35;
  const person = { name: 'Abid', age: 21 };
  return (
    <h3>I am a person my name is {person.name} and I am {person.age} years old and my favourite techer age is {age}</h3>
  )
}

function Student(std) {
  console.log(std)
  const { name, age } = std;

  return (
    <div style={{ border: '2px solid tomato', borderRadius: '20px', margin: '20px', padding: '10px' }}>
      <h4>This is a student</h4>
      <p>Name: {name}</p>
      <p>age: {age}</p>
    </div>
  )
};

function Developer() {
  const devStyle = {
    border: '2px solid AliceBlue',
    margin: '20px',
    padding: '15px',
    borderRadius: '20px'
  }
  return (
    <div style={devStyle}>
      <h4>Developer</h4>
      <p>Coding:</p>
    </div>
  )
}

// validating props
Device.propTypes = {
  name: PropTypes.object,
  price: PropTypes.object
}

export default App
