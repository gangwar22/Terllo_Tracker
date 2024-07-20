import { useState } from 'react';
import './Timeline.css';

function Timeline() {
  const [week, setWeek] = useState('');
  const [entries, setEntries] = useState([]);

  const days = ['Sun, Jul 14', 'Mon, Jul 15', 'Tue, Jul 16', 'Wed, Jul 17', 'Thu, Jul 18', 'Fri, Jul 19'];

  const addRow = () => {
    setEntries([...entries, { task: '', times: Array(6).fill(0) }]);
  };

  const handleTaskChange = (index, value) => {
    const newEntries = [...entries];
    newEntries[index].task = value;
    setEntries(newEntries);
  };

  const handleTimeChange = (entryIndex, timeIndex, value) => {
    const newEntries = [...entries];
    newEntries[entryIndex].times[timeIndex] = parseFloat(value) || 0;
    setEntries(newEntries);
  };

  return (
   <div className="container-timleline-image">
     <div className="timesheet-app">
      <header>
        <h1>Timesheets</h1>
        <nav>
          <button className="active">My timesheet</button>
          <button>All timesheets</button>
        </nav>
      </header>
      
      <main>
        <div className="week-selector">
          <span>{week}</span>
        </div>
        
        <div className="timesheet-container">
          <table>
            <thead>
              <tr>
                <th>Task / Location</th>
                {days.map(day => <th key={day}>{day}</th>)}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td colSpan="8" className="no-entries">
                    <div>
                      <span className="clock-icon">⏱️</span>
                      <p>You have not tracked any time this week!</p>
                      <button onClick={addRow}>Add a new entry to get started.</button>
                    </div>
                  </td>
                </tr>
              ) : (
                entries.map((entry, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        value={entry.task}
                        onChange={(e) => handleTaskChange(index, e.target.value)}
                      />
                    </td>
                    {entry.times.map((time, i) => (
                      <td key={i}>
                        <input
                          type="number"
                          value={time}
                          onChange={(e) => handleTimeChange(index, i, e.target.value)}
                        />
                      </td>
                    ))}
                    <td>{entry.times.reduce((a, b) => a + b, 0)}h</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        <button className="add-row" onClick={addRow}>+ Add row</button>
      </main>
    </div>
   </div>
  );
}

export default Timeline;
