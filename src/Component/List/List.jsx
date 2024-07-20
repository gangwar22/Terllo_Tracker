import { useState, useEffect } from 'react';
import './List.css'; // Create an App.css file and put your CSS there

const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchMode, setSearchMode] = useState(false);
  const [ajaxDone, setAjaxDone] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedEmployees = [];
      for (let i = 0; i < 12; i++) {
        const response = await fetch('https://randomuser.me/api/?nat=us');
        const data = await response.json();
        const employee = {
          picture: data.results[0].picture.large,
          name: data.results[0].name,
          email: data.results[0].email,
          city: data.results[0].location.city,
          state: data.results[0].location.state,
          cell: data.results[0].cell,
          dob: data.results[0].dob.date.slice(0, 10),
          location: data.results[0].location,
        };
        fetchedEmployees.push(employee);
      }
      setEmployees(fetchedEmployees);
      setAjaxDone(true);
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    if (ajaxDone) {
      setSearchMode(true);
      const input = document.getElementById('search-input').value.toLowerCase();
      const results = employees.filter(employee => {
        const name = `${employee.name.first} ${employee.name.last}`.toLowerCase();
        return name.includes(input);
      });
      setSearchResults(results);
    }
  };

  const handleInputChange = () => {
    const input = document.getElementById('search-input').value.toLowerCase();
    if (input === "") {
      setSearchMode(false);
    }
  };

  const handleCardClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  const handlePrevNext = (direction) => {
    const currentIndex = searchMode ? searchResults.indexOf(selectedEmployee) : employees.indexOf(selectedEmployee);
    const newIndex = currentIndex + direction;
    const list = searchMode ? searchResults : employees;

    if (newIndex >= 0 && newIndex < list.length) {
      setSelectedEmployee(list[newIndex]);
    }
  };

  return (
    <div className='conatainer-list-img'>
      <header>
        <div className="header-inner-container">
          <div className="header-text-container">
            <h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
          </div>
          <div className="search-container">
            <form action="#" method="get">
              <input type="search" id="search-input" className="search-input" placeholder="Search" onKeyUp={handleInputChange} />
              <input type="button" value="🔍" id="search-submit" className="search-submit" onClick={handleSearch} />
            </form>
          </div>
        </div>
      </header>
      <div id="gallery" className="gallery">
        {(searchMode ? searchResults : employees).map((employee, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(employee)}>
            <div className="card-img-container">
              <img className="card-img" src={employee.picture} alt="profile" />
            </div>
            <div className="card-info-container">
              <h3 className="card-name cap">{employee.name.first} {employee.name.last}</h3>
              <p className="card-text">{employee.email}</p>
              <p className="card-text cap">{employee.city}, {employee.state}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedEmployee && (
        <div className="modal-container" style={{ display: 'block' }}>
          <div className="modal" style={{ display: 'block' }}>
            <button type="button" id="modal-close-btn" className="modal-close-btn" onClick={handleCloseModal}><strong>X</strong></button>
            <div className="modal-info-container">
              <img className="modal-img" src={selectedEmployee.picture} alt="profile" />
              <h3 className="modal-name cap">{selectedEmployee.name.first} {selectedEmployee.name.last}</h3>
              <p className="modal-text">{selectedEmployee.email}</p>
              <p className="modal-text cap">{selectedEmployee.city}</p>
              <hr />
              <p className="modal-text">{selectedEmployee.cell}</p>
              <p className="modal-text cap">{selectedEmployee.location.street.name}, {selectedEmployee.city}, {selectedEmployee.state}, {selectedEmployee.location.postcode}</p>
              <p className="modal-text">Birthday: {selectedEmployee.dob}</p>
            </div>
          </div>
          <div className="modal-btn-container">
            <button type="button" id="modal-prev" className="modal-prev btn" onClick={() => handlePrevNext(-1)} disabled={searchMode ? searchResults.indexOf(selectedEmployee) === 0 : employees.indexOf(selectedEmployee) === 0}>Prev</button>
            <button type="button" id="modal-next" className="modal-next btn" onClick={() => handlePrevNext(1)} disabled={searchMode ? searchResults.indexOf(selectedEmployee) === searchResults.length - 1 : employees.indexOf(selectedEmployee) === employees.length - 1}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDirectory;
