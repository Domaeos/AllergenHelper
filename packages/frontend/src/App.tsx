import { useEffect } from 'react'
import './App.css'
import { axiosClient } from './api/apiClient';


const { VITE_API_URL } = import.meta.env;

function App() {
  console.log("API URL: " + VITE_API_URL);
  useEffect(() => {
    (async () => {
      const response = await axiosClient.get("/0c20dea0-6e04-11ef-a648-bb8150a8dc48");
      console.log("Data: " + response.data.triggeringList);
    })();
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className='text-3xl underline'>Basic page</p>
    </>
  )
}

export default App
