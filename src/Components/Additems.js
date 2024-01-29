import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Additems({newItems,setNewItems,handleSubmit}) {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
          autoFocus
          id='addItem'
          type='text'
          placeholder='Add Item'
          value={newItems}
          onChange={(e)=>setNewItems(e.target.value)}
          required
        />
        <button
            type='submit'
            aria-label='add item'>
          <FaPlus />
        </button>
    </form>
  )
}

export default Additems