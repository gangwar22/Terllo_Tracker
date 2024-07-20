import React from 'react';
import "./tracker.css"

function Content() {
  return (
    <>
      <div className="d-flex flex-wrap gap-4 p-0 p-3 m-2">
        {/* First */}
        <div className="col justify-content-center my-2 ">
          <div className="col-md-6 col-lg-4 hello">
            <div className='d-flex align-items-center justify-content-between '>
              <h5>Backlog</h5>
              <div className='d-flex gap-3'>
                <span style={{ fontSize: '20px' }}><i className="fa-solid fa-plus"></i></span>
                <span style={{ fontSize: '20px' }}><i className="fa-solid fa-ellipsis"></i></span>
              </div>
            </div>
            <br />
            <div className="card">
              <img src="https://media.istockphoto.com/id/184962061/photo/business-towers.jpg?s=612x612&w=0&k=20&c=gLQLQ9lnfW6OnJVe39r516vbZYupOoEPl7P_22Un6EM=" className="card-img-top" alt="Business Towers" />
              <div className="card-body">
                <h2 className="card-title text-success underscore" class='line'></h2><br />
                <p className="all"><i className="fa-regular fa-circle-check"></i> Performance improvements</p>
                <button type="button" class="btn btn-primary">Engineering</button>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721174400&semt=ais_user" width="50" height="50" className="rounded-circle" id='circle' alt="" />
                  <div className='d-flex gap-3'>
                    <div className="one">
                      <span style={{ fontSize: '20px' }}>3 <i class="fa-regular fa-comment"></i></span>
                    </div>
                    <div className="two">
                      <span style={{ fontSize: '20px' }}>2 <i class="fa-solid fa-square-share-nodes"></i></span>
                    </div>
                    <span style={{ fontSize: '20px' }}><i class="fa-solid fa-play"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card col-lg-4 hello">
            <div className="card-body">
              <h2 className="card-title text-success underscore line"></h2>
              <br />
              <p className="all"><i className="fa-regular fa-circle-check"></i> Implement new design</p>
              <button type="button" className="btn btn-primary">Engineering</button>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <img src="https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="50" height="50" className="rounded-circle" alt="Profile" />
                <div className='d-flex gap-3'>
                  <div className="one">
                    <span style={{ fontSize: '20px' }}>1 <i className="fa-regular fa-comment"></i></span>
                  </div>
                  <div className="two">
                    <span style={{ fontSize: '20px' }}>5 <i className="fa-solid fa-square-share-nodes"></i></span>
                  </div>
                  <span style={{ fontSize: '20px' }}><i id='reverse' class="fa-solid fa-sort-down"></i></span>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Second */}
        <div className="col justify-content-center my-2">
          <div className="col-md-6 col-lg-4 hello">
            <div className='d-flex align-items-center justify-content-between '>
              <h5>Ready</h5>
              <div className='d-flex gap-3'>
                <span style={{ fontSize: '20px' }}><i className="fa-solid fa-plus"></i></span>
                <span style={{ fontSize: '20px' }}><i className="fa-solid fa-ellipsis"></i></span>
              </div>
            </div>
            <br />
            <div className="card p-0 p-2">
              <div className="card-body">
                <h2 className="card-title text-success underscore" class='lines'></h2><br />
                <p className="all"><i className="fa-regular fa-circle-check"></i> Design navigation changes</p>
                <button type="button" class="btn btn-success">Design</button>
              </div>
              <div className="card-body hello ">
                <div className="d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center gap-3'>
                    <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=" width="50" height="50" className="rounded-circle" id='circle' alt="" />
                    <div className="two" >
                      <span style={{ fontSize: '20px' }}>Jan 10</span>
                    </div>
                  </div>
                  <div className='d-flex gap-3'>
                    <div className="one">
                      <span style={{ fontSize: '20px' }}>4 <i class="fa-regular fa-comment"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card col-lg-4 hello p-0 p-2">
            <div className="card-body">
              <h2 className="card-title text-success underscore line" id='line-two'></h2>
              <br />
              <p className="all"><i className="fa-regular fa-circle-check"></i> Design prototype</p>
              <button type="button" className="btn btn-success">Design</button>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-3'>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW91bmclMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D" width="45" height="45" className="rounded-circle" alt="Profile" />
                  <div className="two" >
                    <span style={{ fontSize: '20px' }}>Jan 10</span>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className="one">
                    <span style={{ fontSize: '20px' }}>1 <i className="fa-regular fa-comment"></i></span>
                  </div>
                  <div className="two">
                    <span style={{ fontSize: '20px' }}>5 <i className="fa-solid fa-square-share-nodes"></i></span>
                  </div>
                  <span style={{ fontSize: '20px' }}><i class="fa-solid fa-play"></i></span>
                </div>
              </div>
              <hr />
              <p className="all"><i className="fa-regular fa-circle-check"></i> Design Review</p>
              <hr />
              <p className="all"><i className="fa-regular fa-circle-check"></i> Testing Plan</p>
              <hr />
              <p className="all"><i class="fa-solid fa-plus"></i> Add subtask</p>
            </div>
          </div>
          <br />
          <div className="card p-0 p-2">
            <div className="card-body">
              <h2 className="card-title text-success underscore" class='lines1'></h2><br />
              <p className="all"><i className="fa-regular fa-circle-check"></i> Website redesign </p>
              <button type="button" class="btn btn-success">Design</button>
            </div>
            <div className="card-body hello ">
              <div className="d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-3'>
                  <img src="https://plus.unsplash.com/premium_photo-1693000697544-9bf6f009cba9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="50" height="50" className="rounded-circle" id='circle' alt="" />
                  <div className="two" >
                    <span style={{ fontSize: '20px' }}>Dec 3</span>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className="one">
                    <span style={{ fontSize: '20px' }}>4 <i class="fa-regular fa-thumbs-up"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Third */}

        <div className="col justify-content-center my-2">
          <div className="col-md-6 col-lg-4 hello">
            <div className='d-flex align-items-center justify-content-between '>
              <h5>In Progress</h5>
              <div className='d-flex gap-3'>
                <span style={{ fontSize: '20px' }}><i className="fa-solid fa-plus"></i></span>
                <span style={{ fontSize: '20px' }}><i className="fa-solid fa-ellipsis"></i></span>
              </div>
            </div>
            <br />
            <div className="card p-0 p-2">
              <div className="card-body">
                <div className='d-flex gap-3'>
                  <h2 className="card-title text-success underscore" class='blue'></h2>
                  <h2 className="card-title text-success underscore" class='red'></h2>
                  <br />
                  <br />
                </div>
                <p className="all"><i className="fa-regular fa-circle-check"></i> Build social sharing functionality</p>
                <button type="button" class="btn btn-primary">Engineering</button>
              </div>
              <div className="card-body p-0 ">
                <div className="d-flex align-items-center justify-content-between p-0 p-3">
                  <div className='d-flex gap-3 align-items-center'>
                    <img src="https://images.unsplash.com/photo-1667053508464-eb11b394df83?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="50" height="50" className="rounded-circle" id='circle' alt="" />
                    <p style={{ fontSize: '20px' }}>Friday</p>
                  </div>
                  <div className='d-flex gap-3'>
                    <div className="one">
                      <span style={{ fontSize: '20px' }}>4 <i class="fa-regular fa-comment"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card col-lg-4 hello">
            <div className="card-body">
              <div>
                <img src="https://images.unsplash.com/photo-1516997637904-9d1c9d44e585?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Business Towers" />
              </div>
              <br />
              <div className='d-flex gap-3'>
                <h2 className="card-title text-success underscore" class='blue'></h2>
                <h2 className="card-title text-success underscore" class='red'></h2>
                <br />
                <br />
              </div>
              <br />
              <p className="all"><i className="fa-regular fa-circle-check"></i> Redesign overview</p>
              <button type="button" className="btn btn-success">Design</button>
            </div>
            <div className="card-body p-0 p-3">
              <div className="d-flex align-items-center justify-content-between">
                <img src="https://images.unsplash.com/photo-1653379671988-b32fceafb5e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" width="50" height="50" className="rounded-circle" alt="Profile" />
                <div className='d-flex gap-3'>
                  <div className="one">
                    <span style={{ fontSize: '20px' }}>5 <i class="fa-regular fa-thumbs-up"></i></span>
                  </div>
                  <div className="two">
                    <span style={{ fontSize: '20px' }}>1 <i class="fa-regular fa-comment"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Fourth */}
        <div className="col justify-content-center my-2">
          <div className="col-md-6 col-lg-4 hello">
            <div className='d-flex align-items-center justify-content-between '>
              <h5>Done</h5>
              <div className='d-flex gap-3'>
                <span style={{ fontSize: '20px' }}><i className="fa-solid fa-plus"></i></span>
                <span style={{ fontSize: '20px' }}><i className="fa-solid fa-ellipsis"></i></span>
              </div>
            </div>
            <br />
            <div className="card">
              <div className="card-body">
                <div className='d-flex gap-3'>
                  <h2 className="card-title text-success underscore" class='green'></h2>
                  <h2 className="card-title text-success underscore" class='red'></h2>
                  <br />
                  <br />
                </div>
                <p className="all"><span className='text-success'><i class="fa-solid fa-circle-check"></i></span> Usability testing</p>
                <button type="button" class="btn btn-info">Research</button>
              </div>
              <div className="card-body p-0 p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center gap-3'>
                    <img src="https://images.unsplash.com/photo-1649057349440-38c14e985208?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="50" height="50" className="rounded-circle" id='circle' alt="" />
                    <p style={{ fontSize: '20px' }}>Sep 30</p>
                  </div>
                  <div className='d-flex gap-3'>
                    <div className="one">
                      <span style={{ fontSize: '20px' }}>4 <i class="fa-regular fa-comment"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card col-lg-4 hello">
            <div className="card-body">
              <div className='d-flex gap-3'>
                <h2 className="card-title text-success underscore" class='green'></h2>
                <h2 className="card-title text-success underscore" class='red'></h2>
                <br />
                <br />
              </div>
              <br />
              <p className="all"><span className='text-success'><i class="fa-solid fa-circle-check"></i></span> Introduce new navigation</p>
              <button type="button" className="btn btn-danger">Data Science</button>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-3'>
                  <img src="https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="50" height="50" className="rounded-circle" alt="Profile" />
                  <p style={{ fontSize: '20px' }}>Sep 23</p>
                </div>
                <div className='d-flex gap-3'>
                  <div className="one">
                    <span style={{ fontSize: '20px' }}>2 <i class="fa-regular fa-thumbs-up"></i></span>
                  </div>
                  <div className="two">
                    <span style={{ fontSize: '20px' }}>5 <i className="fa-solid fa-square-share-nodes"></i></span>
                  </div>
                  <span style={{ fontSize: '20px' }}><i class="fa-solid fa-play"></i></span>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </>
  );
}

export default Content;
