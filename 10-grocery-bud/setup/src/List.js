import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({data, removeItem, editItem}) => {
  return (
    <div className="grocery-container">
      {data.map(({id, name}) =>{
        return (
          <div key={id} className="grocery-item">
            <p className="title">{name}</p>
            <div className='btn-container'>
              <button onClick={() => editItem(id)} type="submit" className="edit-btn"><FaEdit /></button>
              <button onClick={() => removeItem(id)} type="submit" className="delete-btn"><FaTrash /></button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List
