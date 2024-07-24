import {  useState } from "react";
import Form from "./Form";
import Details from "./Detail";

function List() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);

  function addData(obj) {
    console.log(obj);
    setList([...list, obj]);
  };
 
  return (
    <>
      <div>
        <ul>
          {list.map((item) => (
            <li key={item.id} onClick={() => setSelected(item)}>
              {item.name}
            </li>
          ))}
        </ul>
          <Form addData={addData}/>
        {selected && <Details data={selected} />}
      </div>
    </>
  );
}

export default List;
