import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState({show:false, msg:"", type:""});
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing){
      setData(data.map((item) => {
        if(item.id === editID){
          return {...item, name:input};
        }
        return item;
      }));
      setEditID(null);
      setInput("");
      setIsEditing(false);
      showMessage(true, "value edited", "success");
    }
    else {
      showMessage(true, "successfully added item", "success");
      setData(() => {
        return [...data, {id:new Date().getTime().toString(), name:input}]
      });
      setInput("");
    }
    console.log(data);

  }

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
    showMessage(true, "item removed", "danger");
  }

  const clearAll = () => {
    setData([]);
    showMessage(true, "all items removed", "danger");
  }

  const editItem = (id) => {
    const specificItem = data.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setInput(specificItem.name);
  }

  const showMessage = (show = false, msg = "", type = "") => {
    setMessage({show, msg, type});
  }

  return (
    <main>
      <section className="section-center">
        <div>{message.show && <Alert removeMessage={showMessage} list={data} script={message} />}</div>
        <h3 className="form-control">grocery bud</h3>
        <form onSubmit={handleSubmit} className="form-control">
          <input required value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g. egg" className="grocery"></input>
          <button className="submit-btn">{isEditing ? "Edit" : "Submit"}</button>
        </form>
        <div>
          {(data.length > 0) && (
            <div className="grocery-container">
              <List data={data} removeItem={removeItem} editItem={editItem} />
              <button className="clear-btn" type="submit" onClick={clearAll}>Clear items</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App
