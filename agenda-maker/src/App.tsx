import { useState } from 'react'
import './App.css'
import AgendaList from './components/AgendaList'
import AddAgenda from './components/AddAgenda'
import { Agenda } from './models/AgendaProps'


function App() {
  const [showAgenda, setShowAgenda] = useState<boolean>(true)

  const [agenda, setAgenda] = useState<Agenda[]>([
    {
      title: "Agenda Title",
      topics: [
        "Topic 1",
        "Topic 2",
        "Topic 3"
      ],
      description: "This is the agenda description."
    }
  ])

  const handleToggle = () => {
    setShowAgenda(!showAgenda)
  }

  return (
    <>
      <h1>Agenda Maker</h1>
      {showAgenda && (<AgendaList handleToggle={handleToggle} agenda={agenda} />)}
      {!showAgenda && (<AddAgenda handleToggle={handleToggle} setAgenda={setAgenda}/>)}
    </>
  )
}

export default App
