import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const crewTypes = [
  {
    type: 'Foreman',
    id:101,
    costPerHour: 50, 
    skills: ['Leadership', 'Management', 'Problem-solving'] 
  },
  {
    type: 'Operator',
    id:102,
    costPerHour: 40,
    skills: ['Equipment operation', 'Technical knowledge']
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
      {/* Labor Cost Display Section */}
      {/* Insights and Metrics Section */}
    </div>
    </>
  )
}

export default App
