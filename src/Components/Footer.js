import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>{length} {length === 1? "item" :"items"} on your list</footer>
  )
}

export default Footer