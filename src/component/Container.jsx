import React from 'react'

const Container = ({children}) => {
  return (
    <div className=" flex flex-col lg:w-4/5 mx-auto w-full min-h-screen ">{children}</div>
  )
}

export default Container