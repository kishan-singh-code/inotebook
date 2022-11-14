import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import logo from "./img/signup-image.jpg";
// import eyeopen from "./icons/eye_open.svg";
import { ReactComponent as Eyeopen } from './icons/eye_open.svg';
import { ReactComponent as Eyeclose } from './icons/eyeclose.svg';
import ReactTooltip from 'react-tooltip';

import "./css/style.css";



const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const [funeye, setFuneye] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            // history.push("/");
            props.showAlert("Login Successfully", "success");
            navigate('/');
        }
        else {
            // alert("Invalid credentials");
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    const handlePass = (e) => {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
            setFuneye(false);
        } else {
            x.type = "password";
            setFuneye(true);
        }
    }


    return (
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <div className="mb-3">
        //             <label htmlFor="email" className="form-label">Email address</label>
        //             <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
        //             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="password" className="form-label">Password</label>
        //             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
        //         </div>

        //         <button type="submit" className="btn btn-primary">Submit</button>
        //     </form>
        // </div>

        <div className="container my-md-5 my-3 d-flex justify-content-center">
            <div className="card " style={{ width: "50rem" }}>
                <div className="card-body ">
                    <div className="row ">

                        <div className="col-md-6 col-sm-12">
                            <div className="container">
                                <form onSubmit={handleSubmit}>
                                    <h2 className="text-center text-md-start" style={{ fontWeight: 'bold' }}>Login</h2>
                                    <div className="my-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <div className="input-group">
                                            <input type="password" className="form-control passcur" value={credentials.password} onChange={onChange} name="password" id="password" />
                                            <div className="input-group-text eyecur" onClick={handlePass}>

                                                {funeye && <Eyeopen data-tip data-for='Show' className="point" />}
                                                {!funeye && <Eyeclose data-tip data-for='Hide' className="point" />}

                                                {funeye && <ReactTooltip id='Show' type='warning' textColor='#ffffff' backgroundColor='#287dfc' effect='solid' padding='7px'>
                                                    <span>Show</span>
                                                </ReactTooltip>}

                                                {!funeye && <ReactTooltip id='Hide' type='warning' textColor='#ffffff' backgroundColor='#287dfc' effect='solid' padding='7px'>
                                                    <span>Hide</span>
                                                </ReactTooltip>}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center text-md-start">
                                        <button type="submit" className="btn mt-2  mt-md-3 btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <span className="tt" data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-custom-class="custom-tooltip"
                                data-bs-title="This top tooltip is themed via CSS variables.">
                                <img src={logo} className="img-fluid mx-auto d-block" alt="..." />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login