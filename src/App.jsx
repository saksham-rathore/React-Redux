import React, { useEffect, useState } from 'react'
import AuthService from "./appwrite/auth"
import {useDispatch} from 'react-redux'
import {login, logout} from "./stores/authslice"
import {Footer, Header} from "./Components"

const App = () => {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    AuthService.getCurrentUser
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
        <Headers /> 
        <main>
          {/* //outlet */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App