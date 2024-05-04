import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const crewTypes = [
  {
    type: 'Foreman',
    id:'101',
    costPerHour: 50, 
    skills: ['Leadership', 'Management', 'Problem solving'] 
  },
  {
    type: 'Operator',
    id:'102',
    costPerHour: 40,
    skills: ['Equipment handling', 'Technical knowledge']
  },
  {
    type: 'Laborer',
    id:'103',
    costPerHour: 30,
    skills: ['Physical strength', 'Teamwork']
  },
];


function App() {
  const [selectedCrewType, setSelectedCrewType] = useState(crewTypes[0]);
  const [crewSchedules, setCrewSchedules] = useState([]);

   const handleCrewTypeChange = (e) => {
    setSelectedCrewType(crewTypes.find((type)=>type.id===e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add crew schedule
    const startTime = e.target.elements.startTime.value;
    const endTime = e.target.elements.endTime.value;
    // Add crew schedule
    setCrewSchedules([...crewSchedules, { ...selectedCrewType, startTime, endTime }]);
   
    // Reset selected crew type
    setSelectedCrewType(crewTypes[0]);
  };
  return (
    <>
      <div className="container mx-auto py-8">
        <div className='bg-blue-100 px-2 py-1 rounded' >
      <h1 className="text-3xl font-bold">Labor Cost Calculator</h1>
        </div>

      {/* Crew Schedule Input Section */}
      <div className="mb-8 px-1">
        <h2 className="text-xl font-semibold mb-2">Crew Schedule Input</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <label className="mr-2">Crew Type:</label>
            <select id="crewType" className="border rounded px-2 py-1"  value={selectedCrewType} onChange={handleCrewTypeChange}>
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
             {/* Display cost and skills when crew type is selected */}
      {selectedCrewType && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Selected Crew Type: {selectedCrewType.type}</h2>
          <p>Cost Per Hour: ${selectedCrewType.costPerHour}</p>
        </div>
      )}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Crew Schedule</button>
        </form>
        </div>
      
      {/* Labor Cost Display Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Selected Crew Schedules</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Crew Type</th>
              <th className="px-4 py-2">Cost Per Hour</th>
              <th className="px-4 py-2">Start Time</th>
              <th className="px-4 py-2">End Time</th>
            </tr>
          </thead>
          <tbody>
            {crewSchedules.map((schedule, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{schedule.type}</td>
                <td className="border px-4 py-2">${schedule.costPerHour}</td>
                <td className="border px-4 py-2">{schedule.startTime}</td>
                <td className="border px-4 py-2">{schedule.endTime}</td>
                
              </tr>
            ))}
            <tr>
              <td className="border px-4 py-2 font-bold">Total:</td>
              <td className="border px-4 py-2 font-bold">${crewSchedules.reduce((total, schedule) => {
      return total + schedule.costPerHour;
    }, 0)}</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Insights and Metrics Section */}
    </div>
    </>
  )
}

export default App
