import { useState } from 'react'
import './App.css'
import AgendaList from './components/AgendaList'
import AddAgenda from './components/AddAgenda'
import { Agenda } from './models/AgendaProps'
import useLocalStorage from './hooks/useLocalStorage'


function App() {
  const [showAgenda, setShowAgenda] = useState<boolean>(true)

  const [storedAgenda, setStoredAgenda] = useLocalStorage<Agenda[]>('agenda',  [{ title: 'dsda', topics: ['fdf'], description: 'dfdfdfdf' }]);

  const [agenda, setAgenda] = useState<Agenda[]>(storedAgenda);
  

  const handleToggle = () => {
    setShowAgenda(!showAgenda)
  }

  return (
    <>
      <h1>Agenda Maker</h1>
      {showAgenda && (<AgendaList handleToggle={handleToggle} agenda={agenda} />)}
      {!showAgenda && (<AddAgenda handleToggle={handleToggle} agenda={agenda} setAgenda={setAgenda} setStoredAgenda={setStoredAgenda}/>)}
    </>
  )
}

export default App
