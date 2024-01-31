import { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  // По принципу componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div style={{}}>
      <Element/>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}

const user = [
  {
   name: 'John Doe',
   age: 30,
   job: 'Developer'
  },
  {
   name: 'Jane Doe',
   age: 25,
  },
  {
   name: 'Jim Smith',
   age: 35,
   job: 'Engineer'
  }
 ];

const Element = () => {
  return (
  <div>
  {user.map(x=>{
    return <div key={x.name}>
    </div>
  })}
  </div>
  )
}