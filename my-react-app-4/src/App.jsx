// props - read only properties that are shared between components.
//       A parent component can send data to a child components.
//        <component key=value />

import Student from "./Student.jsx"

function App() {

  return (
    <>
      <Student name ="Shinchan" age = "10" isStudent = {true}/>
      <Student name ="Bheem" age = {12} isStudent = {true}/>
      <Student name ="Spiderman" age = {20} isStudent = {false}/>
      <Student name ="Steve Rogers" age = {150} isStudent = {false}/>
      <Student />
    </>
  )
}

export default App
