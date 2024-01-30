
export default function Todo(){
    return (
    <>
      <form className='new-item-form'>
          <label>New item</label>
          <input type="text" name="" id="item" />
        <button className="btn">Add</button>
      </form>
      <List/>
    </>
    )
  }
  
  function List(){
    return (
      <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>item1
          </label>
          <button className="btn btn-danger"></button>
        </li>
      </ul>
      </>
    )
  }
  