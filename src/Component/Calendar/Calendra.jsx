import React, { useState, useEffect } from 'react';
import './Calendra.css';

const Calendar = () => {
  const [tasks, setTasks] = useState([
    { title: 'Meeting', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', time: '9:00 AM', date: '2022-11-28' },
    { title: 'Design stuff', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', time: '12:00 PM', date: '2022-11-28' },
    { title: 'Check emails', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', time: '2:00 PM', date: '2022-11-28' }
  ]);

  const [selectedDate, setSelectedDate] = useState('');
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [newTask, setNewTask] = useState({ title: '', content: '', time: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
  }, []);

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, date: selectedDate }]);
    setNewTask({ title: '', content: '', time: '' });
    setIsFormVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const renderTasks = () => {
    return tasks
      .filter(task => task.date === selectedDate)
      .map((task, index) => (
        <li key={index} className="task">
          <div className="badge"></div>
          <div className="timeline-body">
            <div className="row">
              <div className="col-left">
                <p className="title">{task.title}</p>
                <p className="timeline-content">{task.content}</p>
              </div>
              <div className="col-right">
                <p className="due">{task.time}</p>
              </div>
            </div>
          </div>
        </li>
      ));
  };

  return (
    <div className="conatainer-img">
      <div id="container-main">
      <div className="row">
        <div className="date">
        </div>
        <div className="add-task">
          <button className="add-task-btn" onClick={() => setIsFormVisible(true)}>+ Add Task</button>
        </div>
      </div>
      <div className="calendar">
        <div className="row weekdays">
          <div className="day">Sun</div>
          <div className="day">Mon</div>
          <div className="day current">Tue</div>
          <div className="day">Wed</div>
          <div className="day">Thu</div>
          <div className="day">Fri</div>
          <div className="day">Sat</div>
        </div>
        <div className="row">
          <div className="day">20</div>
          <div className="day">21</div>
          <div className="day">22</div>
          <div className="day">23</div>
          <div className="day">24</div>
          <div className="day">25</div>
          <div className="day">26</div>
        </div>
        <div className="row">
          <div className="day">27</div>
          <div className="day">28</div>
          <div className="day today">29</div>
          <div className="day">30</div>
          <div className="day next-month">1</div>
          <div className="day next-month">2</div>
          <div className="day next-month">3</div>
        </div>
      </div>
      <ul className="timeline">
        {renderTasks()}
      </ul>
      {isFormVisible && (
        <div className="add-task-form">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={newTask.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="content"
            placeholder="Task Content"
            value={newTask.content}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="time"
            placeholder="Task Time"
            value={newTask.time}
            onChange={handleInputChange}
          />
          <button className="save-task-btn" onClick={handleAddTask}>Save Task</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Calendar;
