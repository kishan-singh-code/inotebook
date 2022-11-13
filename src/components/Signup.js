import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import logo from "./img/signin-image.jpg";
import "./css/style.css";
import { ReactComponent as Eyeopen } from './icons/eye_open.svg';
import { ReactComponent as Eyeclose } from './icons/eyeclose.svg';
import ReactTooltip from 'react-tooltip';


const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    let navigate = useNavigate();
    const [funeye, setFuneye] = useState(true);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            // history.push("/");
            navigate('/');
            props.showAlert("Account Created Successfully", "success");
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
        // <div className="container">
        //     <form onSubmit={handleSubmit}>
        //         <div className="mb-3">
        //             <label htmlFor="name" className="form-label">Name</label>
        //             <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="email" className="form-label">Email address</label>
        //             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} name="email" />
        //             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="password" className="form-label">Password</label>
        //             <input type="password" className="form-control" id="password" onChange={onChange} name="password" minLength={5} required />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        //             <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" minLength={5} required />
        //         </div>

        //         <button type="submit" className="btn btn-primary">Submit</button>
        //     </form>
        // </div>


        <div className="container my-md-3 my-1 d-flex justify-content-center">
            <div className="card " style={{ width: "50rem" }}>
                <div className="card-body pb-md-4">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12">
                            <img src={logo} className="img-fluid mx-auto d-block" alt="..." />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="container">
                                <form onSubmit={handleSubmit}>
                                    <h2 className="text-center text-md-start" style={{ fontWeight: 'bold' }}>Sign up</h2>

                                    <div className="my-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} name="email" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <div className="input-group">
                                            <input type="password" className="form-control passcur" id="password" onChange={onChange} name="password" minLength={5} required />
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








                                    {/* <div className="mb-3">
                                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" minLength={5} required />
                                    </div> */}

                                    <div className="text-center text-md-start">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>











    )
}

export default Signup