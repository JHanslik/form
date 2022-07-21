import React from "react";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            rememberMe: false,
            emailIsValid: false,
            passwordIsValid: false,
            isSubmitted: false,
        };
    }

    isEmailValid = (email) => {
        return /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    handleEmailChange = (e) => {
        if (!this.isEmailValid(e.target.value)) {
            this.setState({
                emailIsValid: false,
            });
        } else {
            this.setState(
                {
                    email: e.target.value,
                    emailIsValid: true,
                },
                () => {
                    console.log(this.state.email);
                }
            );
        }
    };

    handleFirstNameChange = (e) => {
        this.setState(
            {
                firstName: e.target.value,
            },
            () => {
                console.log(this.state.firstName);
            }
        );
    };

    handleLastNameChange = (e) => {
        this.setState(
            {
                lastName: e.target.value,
            },
            () => {
                console.log(this.state.lastName);
            }
        );
    };

    handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            this.setState({
                passwordIsValid: false,
            });
        } else {
            this.setState(
                {
                    password: e.target.value,
                    passwordIsValid: true,
                },
                () => {
                    console.log(this.state.password);
                }
            );
        }
    };

    handleRememberMeChange = (e) => {
        this.setState(
            {
                rememberMe: e.target.checked,
            },
            () => {
                console.log(this.state.rememberMe);
            }
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.emailIsValid && this.state.passwordIsValid) {
            this.setState({
                isSubmitted: true,
            });
        }
    };

    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center">
                {this.state.isSubmitted ? (
                    <div className="text-center">
                        <h1>SUCCESS !</h1>
                        <h2>
                            {this.state.firstName} {this.state.lastName}
                        </h2>
                        <p>{this.state.email}</p>
                        <img
                            src="https://i.pinimg.com/originals/df/80/63/df806383303b48b3ce863b386d7c610c.gif"
                            alt="Success dance !"
                            className="container"
                        />
                    </div>
                ) : (
                    <Form
                        emailChange={this.handleEmailChange}
                        emailIsValid={this.state.emailIsValid}
                        firstNameChange={this.handleFirstNameChange}
                        firstNameChangeLength={this.state.firstName.length}
                        lastNameChange={this.handleLastNameChange}
                        lastNameChangeLength={this.state.lastName.length}
                        passwordChange={this.handlePasswordChange}
                        passwordIsValid={this.state.passwordIsValid}
                        checkChange={this.handleRememberMeChange}
                        submit={this.handleSubmit}
                    />
                )}
            </div>
        );
    }
}

export default App;
