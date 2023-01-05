import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Table from './components/Table';

function App() {
  const [studentData , setStudentData] = useState([]);
// button function for Checkout time.need to implement.
  return (
    <div className="App">
     <div className="container">
      <div className="input-area max-w-md mx-auto my-10">
      <Form setStudentData={setStudentData} studentData={studentData}></Form>
      </div>
    {/* {studentData.map()} */}
      <div className="data-area">
        <Table studentData={studentData}></Table>
      </div>
     </div>
    </div>
  )
}

export default App
