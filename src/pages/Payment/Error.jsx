import React from 'react'

const Error = () => {
    const searchData = new URLSearchParams(eindow.location.search)
    const message = searchData.get('message')
  return (
    <div>payment{message}</div>
  )
}

export default Error