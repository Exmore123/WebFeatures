import * as React from 'react';
import './GlassmorphismLogin.css';

export default class GlassmorphismLoginForm extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <section>                
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <div className="myBox">
                    <div className="mySquare" style={{ animationDelay:"-1s" }} />
                    <div className="mySquare" style={{ animationDelay:"-2s" }} />
                    <div className="mySquare" style={{ animationDelay:"-3s" }} />
                    <div className="mySquare" style={{ animationDelay:"-4s" }} />
                    <div className="mySquare" style={{ animationDelay:"-5s" }} />
                    <div className="myContainer">
                        <div className="myForm">
                            <h2>Login Form</h2>
                            <form>
                                <div className="inputBox">
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="inputBox">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Login" />
                                </div>
                                <p className="forget">Forgot Password ? <a href="#">Click here</a></p>
                                <p className="forget">Don't have an account ? <a href="#">Sing up</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}