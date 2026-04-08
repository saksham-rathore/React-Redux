<<<<<<< HEAD
import React from 'react'

function App() {
  return (
    <div>App</div>
  )
=======
import React, { useEffect, useState } from 'react'
import authService from "./appwrite/auth"
import {useDispatch} from 'react-redux'
import {login, logout} from "./stores/authslice"
import {Footer, Header} from "./Components"

const App = () => {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    }
  )
    .finally(() => setloading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* //outlet */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
>>>>>>> b8ab0b4863ab0d702653fd77cb1e550aa74efa31
}

export default App