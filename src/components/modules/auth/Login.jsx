import { useState } from "react"
import { Helmet } from "react-helmet"

function Login() {
    const [input, setInput] = useState({});


    const handleInput = (e) => {
        setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
        console.log(input)
    }

    return (
        <div className="">
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="d-flex justify-content-center   mt-5 h-100 ">
                <form className="w-25 card p-3">
                    <h2 className="card-title mb-4">Login</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input name={'email'} value={input.email} onChange={handleInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input name="password" value={input.password} onChange={handleInput} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>

            </div >



        </div>
    )
}

export default Login
