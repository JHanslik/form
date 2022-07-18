import React from "react";

class Form extends React.Component {
    render () {
        return (
            <div className="w-50">
                <h1 className="text-center m-5">Login</h1>    
                <form onSubmit={this.props.submit}>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">Email address</label>
                        <input type="email" className={`form-control ${this.props.emailIsValid ? "is-valid" : "is-invalid"}`} id="InputEmail" aria-describedby="emailHelp" onChange={this.props.emailChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputFirstName" className="form-label">Firstname</label>
                        <input type="text" className={`form-control ${this.props.firstNameChangeLength >= 1 ? "is-valid" : "is-invalid"}`} id="InputFirstName" onChange={this.props.firstNameChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputLastName" className="form-label">Lastname</label>
                        <input type="text" className={`form-control ${this.props.lastNameChangeLength >= 1 ? "is-valid" : "is-invalid"}`} id="InputLastName" onChange={this.props.lastNameChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">Password</label>
                        <input type="password" className={`form-control ${this.props.passwordIsValid ? "is-valid" : "is-invalid"}`} id="InputPassword" onChange={this.props.passwordChange}></input>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check" onChange={this.props.checkChange}></input>
                        <label className="form-check-label" htmlFor="Check">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;