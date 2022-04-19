import { useState } from 'react';
import './App.css';

function App() {
  const [subs, setSubs] = useState([
    {
      nick: 'syaona',
      subMonths: 4,
      avatar: 'https://i.pravatar.cc/150?u=syaona',
      description: 'Hace de moderador'
    },
    {
      nick: 'sergi',
      subMonths: 2,
      avatar: 'https://i.pravatar.cc/150?u=sergi',
    }
  ]);


  return (
    <div className="App">
      <h1>Control de subcriptores</h1>
      <ul>
        {
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
     
     
    </div>
  );
}

export default App;
