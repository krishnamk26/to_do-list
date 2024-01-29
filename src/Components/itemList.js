import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

function itemList ({items,handleCheck,handleDelete}) {
  return (
    <ul>
        {items.map((item)=>(
            <li className='item' key={item.id}>
            <input
            type='checkbox'
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}
            />
            <label
            style={(item.checked)?{textDecoration:"line-through"}:null}
            onDoubleClick={()=>handleCheck(item.id)}>{item.item}
            </label>
            <FaTrashAlt 
            role='button'
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
            onClick={()=>handleDelete(item.id)}/>
            </li>
        ))}
    </ul>
  )
}

export default itemList