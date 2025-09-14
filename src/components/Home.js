import React from 'react'
import Notes from './Notes';
import Addnote from './Addnote';
import { Navigate } from 'react-router-dom';
 

export const Home = () => {

  return (
    <div>
      {!localStorage.getItem('token') ? (
        <Navigate to="/login" replace />
      ) : (
        <>
          <Addnote/>
          <Notes/>
        </>
      )}
    </div>
  )
}
export default Home