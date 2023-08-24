import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const {TaskList} = useSelector((state)=>state.task)
  return (
    <>
    <h1 className='text-center my-4 text-primary'>Task Management</h1>
    <p className='text-center lead'>{`Currently ${TaskList.length} task(s) Pending`}</p>
    </>
  )
}

export default Navbar