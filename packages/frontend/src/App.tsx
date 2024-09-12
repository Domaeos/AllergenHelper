// import { useEffect } from 'react'
import './App.css'
// import { axiosClient } from './api/apiClient'
import RegisterForm from './components/RegisterForm';

function App() {

  return (
    <>
      <RegisterForm />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className='text-3xl underline'>Basic page</p>
    </>
  )
}

export default App
