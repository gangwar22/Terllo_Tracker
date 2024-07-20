import './Ragisteration.css'; // Ensure the path is correct

function Signup() {
    return (
        <div className="container-login">
            <div className="card-wrapper">
                <input type="checkbox" id="toggle" aria-hidden="true" />

                <div className="signup-section">
                    <label htmlFor="toggle" className="toggle-label">Sign up</label>
                    <form>
                        <input id='input-field' type="text" placeholder='name'/>
                        {/* <input className="input" id="username" type="text" placeholder="Username" required /> */}
                        <input className="input-field" id="email-signup" type="email" placeholder="Email" required />
                        <input id="input-field"  type="number" placeholder="Phone" required />
                        <input className="input-field" id="password-signup" type="password" placeholder="Password" required />
                        <button className="submit-button" type="submit">Sign up</button>
                    </form>
                </div>

                <div className="login-section">
                    <label htmlFor="toggle" className="toggle-label">Login</label>
                    <form>
                        <input className="input-field" id="email-login" type="email" placeholder="Email" required />
                        <input className="input-field" id="password-login" type="password" placeholder="Password" required />
                        <button className="submit-button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
