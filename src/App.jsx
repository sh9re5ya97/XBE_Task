import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const crewTypes = [
  {
    type: 'Foreman',
    id:101,
    costPerHour: 50, 
    skills: ['Leadership', 'Management', 'Problem solving'] 
  },
  {
    type: 'Operator',
    id:102,
    costPerHour: 40,
    skills: ['Equipment handling', 'Technical knowledge']
  },
  {
    type: 'Laborer',
    id:103,
    costPerHour: 30,
    skills: ['Physical strength', 'Teamwork']
  },
];


function App() {
  
  return (
    <>
      <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Labor Cost Calculator</h1>

      {/* Crew Schedule Input Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Crew Schedule Input</h2>
        <form>
          <div className="flex items-center mb-4">
            <label className="mr-2">Crew Type:</label>
            <select id="crewType" className="border rounded px-2 py-1">
              {/* Options for crew types */}
              {crewTypes.map((crewType,index)=>(
                <option key={index} value={crewType.id}>{crewType.type}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">Start Time:</label>
            <input type="time" id="startTime" className="border rounded px-2 py-1" />
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">End Time:</label>
            <input type="time" id="endTime" className="border rounded px-2 py-1" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Crew Schedule</button>
        </form>
        </div>
      {/* Labor Cost Display Section */}
      {/* Insights and Metrics Section */}
    </div>
    </>
  )
}

export default App
