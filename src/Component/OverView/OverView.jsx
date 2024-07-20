import React from 'react';
import './Overview.css';

const Overview = () => {
    return (
        <div className='imges'>
            <main className="main">
                <section className="intro">
                    <h1>Accelerate Your Digital Transformation</h1>
                    <p>Whether your business is early in its journey or well on its way to digital transformation, Google Cloud can help solve your toughest challenges.</p>
                    <a href="#">Learn More</a>
                </section>
                <section className="benefits">
                    <div className="key-benefits">
                        <h2>Key Benefits</h2>
                        <ul>
                            <li><strong>Why Google Cloud</strong> - Top reasons businesses choose us.</li>
                            <li><strong>AI and ML</strong> - Get enterprise-ready AI.</li>
                            <li><strong>Multicloud</strong> - Run your apps wherever you need them.</li>
                            <li><strong>Global Infrastructure</strong> - Build on the same infrastructure as Google.</li>
                            <li><strong>Data Cloud</strong> - Make smarter decisions with unified data.</li>
                            <li><strong>Open Cloud</strong> - Scale with open, flexible technology.</li>
                            <li><strong>Security</strong> - Protect your users, data, and apps.</li>
                            <li><strong>Productivity and Collaboration</strong> - Connect your teams with AI-powered apps.</li>
                        </ul>
                    </div>
                    <div className="reports-insights">
                        <h2>Reports and Insights</h2>
                        <ul>
                            <li><strong>Executive Insights</strong> - Curated C-suite perspectives.</li>
                            <li><strong>Analyst Reports</strong> - Read what industry analysts say about us.</li>
                            <li><strong>Whitepapers</strong> - Browse and download popular whitepapers.</li>
                            <li><strong>Customer Stories</strong> - Explore case studies and videos.</li>
                        </ul>
                    </div>
                </section>
                <section className="company-tracker">
                    <h2>Company Tracker Project</h2>
                    <div className="cards-container">
                        <div className="card">
                            <h3>Feature 1</h3>
                            <p>Describe the first feature of the Company Tracker project here.</p>
                        </div>
                        <div className="card">
                            <h3>Feature 2</h3>
                            <p>Describe the second feature of the Company Tracker project here.</p>
                        </div>
                        <div className="card">
                            <h3>Feature 3</h3>
                            <p>Describe the third feature of the Company Tracker project here.</p>
                        </div>
                        <div className="card">
                            <h3>Feature 4</h3>
                            <p>Describe the fourth feature of the Company Tracker project here.</p>
                        </div>
                    </div>
                </section>
                <section className="members">
                    <h2>Our Team</h2>
                    <div className="members-container">
                        <div className="member-card">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="Member 1" />
                            <h3>Member 1</h3>
                            <p>Role: Lead Developer</p>
                        </div>
                        <div className="member-card">
                            <img src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="Member 2" />
                            <h3>Member 2</h3>
                            <p>Role: UX Designer</p>
                        </div>
                        <div className="member-card">
                            <img src="https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Member 3" />
                            <h3>Member 3</h3>
                            <p>Role: Project Manager</p>
                        </div>
                        <div className="member-card">
                            <img src="https://images.unsplash.com/photo-1649057349440-38c14e985208?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Member 4" />
                            <h3>Member 4</h3>
                            <p>Role: QA Engineer</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Overview;
