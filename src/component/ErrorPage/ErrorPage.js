import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const ErrorPage = () => {
  const error=useRouteError()
  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
      </div>
      
      {error && (
        <div>
        <p className='text-center text-2xl text-red-500'>{error.statusText || error.message}</p>
        <p className='text-center text-2xl text-red-500'>{error.status} </p>
        </div>
      )}

      <Link to='/'><button className='btn-primary py-3 px-5 rounded'>Go Home</button></Link>
    </>
  )
}

export default ErrorPage