import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Persone></Persone>
      <Persone></Persone>
      <Persone></Persone>
      <Student></Student>
    </>
  )
}

function Persone() {
  const age = 35;
  const person = { name: 'Abid', age: 21 };
  return (
    <h3>I am a person my name is {person.name} and I am {person.age} years old and my favourite techer age is {age}</h3>
  )
}

function Student() {
  return (
    <div className="">
      <h4>This is a student</h4>
      <p>Name:</p>
      <p>age:</p>
    </div>
  )
}
export default App
