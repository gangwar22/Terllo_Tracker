import React from 'react'
import MyGraph from './MyGraph';

function DashBoard() {
    return (
        <div className= 'mt-5'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                <div className='col'>
                    <div className='dropdown-menu position-static d-flex align-items-stretch p-3 rounded-3 shadow-lg w-100' style={{ backgroundColor: "rgb(74, 195, 74)" }}>
                        <nav className='d-grid gap-2 col-8'>
                            <a href="#" className='btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start'>
                                <svg className='bi' width='32' height='32'><use xlinkHref='#image-fill'></use></svg>
                                <div>
                                    <strong className='d-block'>Total Order</strong>
                                    <small>Last year expenses</small>
                                </div>
                            </a>
                        </nav>
                        <div className='col-4'>
                            <h1>1896</h1>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='dropdown-menu position-static d-flex align-items-stretch p-3 rounded-3 shadow-lg w-100' style={{ backgroundColor: "skyblue" }}>
                        <nav className='d-grid gap-2 col-8'>
                            <a href="#" className='btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start'>
                                <svg className='bi' width='32' height='32'><use xlinkHref='#image-fill'></use></svg>
                                <div>
                                    <strong className='d-block'>Clients</strong>
                                    <small>Total Clients Profit</small>
                                </div>
                            </a>
                        </nav>
                        <div className='col-4'>
                            <h1>$568</h1>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='dropdown-menu position-static d-flex align-items-stretch p-3 rounded-3 shadow-lg w-100' style={{ backgroundColor: "rgb(60, 60, 211)" }}>
                        <nav className='d-grid gap-2 col-8'>
                            <a href="#" className='btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start'>
                                <svg className='bi' width='32' height='32'><use xlinkHref='#image-fill'></use></svg>
                                <div>
                                    <strong className='d-block'>Followers</strong>
                                    <small>People Interested</small>
                                </div>
                            </a>
                        </nav>
                        <div className='col-4'>
                            <h1>46%</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MyGraph />
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4'>
                <div className='col'>
                    <div className='dropdown-menu position-static d-flex align-items-stretch p-3 rounded-3 shadow-lg w-100'>
                        <nav className='d-grid gap-2 col-8'>
                            <a href="#" className='btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start'>
                                <svg className='bi' width='32' height='32'><use xlinkHref='#image-fill'></use></svg>
                                <div>
                                    <strong className='d-block'>Total Order</strong>
                                    <small>Last year expenses</small>
                                </div>
                            </a>
                        </nav>
                        <div className='col-4'>
                            <h1 className='text-success'>1896</h1>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='dropdown-menu position-static d-flex align-items-stretch p-3 rounded-3 shadow-lg w-100'>
                        <nav className='d-grid gap-2 col-8'>
                            <a href="#" className='btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start'>
                                <svg className='bi' width='32' height='32'><use xlinkHref='#image-fill'></use></svg>
                                <div>
                                    <strong className='d-block'>Products Sold</strong>
                                    <small>Revenue streams</small>
                                </div>
                            </a>
                        </nav>
                        <div className='col-4'>
                            <h1 className='text-warning'>$3M</h1>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='dropdown-menu position-static d-flex align-items-stretch p-3 rounded-3 shadow-lg w-100'>
                        <nav className='d-grid gap-2 col-8'>
                            <a href="#" className='btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start'>
                                <svg className='bi' width='32' height='32'><use xlinkHref='#image-fill'></use></svg>
                                <div>
                                    <strong className='d-block'>Followers</strong>
                                    <small>People Interested</small>
                                </div>
                            </a>
                        </nav>
                        <div className='col-4'>
                            <h1 className='text-danger'>49%</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Birthday</th>
                                <th>City</th>
                                <th>Active</th>
                                <th>Boss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>06.07.2008</td>
                                <td>Budapest</td>
                                <td>
                                    <input id="checkbox-first" name="checkbox" type="checkbox" hidden />
                                    <label htmlFor="checkbox-first"></label>
                                </td>
                                <td>
                                    <input id="radio-1" type="radio" name="radio" hidden />
                                    <label htmlFor="radio-1"></label>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mary</td>
                                <td>01.02.2003</td>
                                <td>Berlin</td>
                                <td>
                                    <input id="checkbox-second" type="checkbox" name="checkbox" hidden />
                                    <label htmlFor="checkbox-second"></label>
                                </td>
                                <td>
                                    <input id="radio-2" type="radio" name="radio" hidden />
                                    <label htmlFor="radio-2"></label>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>James</td>
                                <td>04.05.2006</td>
                                <td>Vienna</td>
                                <td>
                                    <input id="checkbox-third" type="checkbox" name="checkbox" hidden />
                                    <label htmlFor="checkbox-third"></label>
                                </td>
                                <td>
                                    <input id="radio-3" type="radio" name="radio" hidden />
                                    <label htmlFor="radio-3"></label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default DashBoard;