import { useEffect, useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import './App.css';




interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

interface AppState {
 subs: Array<Sub>,
 newSubsNumber: number
}
const INITIAL_STATE = [
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
]
function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])


  return (
    <div className="App">
      <h1>Control de subcriptores</h1>
      <List subs={subs}/> 
      <Form />
    </div>
  );
}

export default App;
