import React from "react";
import { Container } from "@mui/material";
import Logo from "../logo/logo";
import "./login.css";


function Login() {
    return (
        <div className="lobby">
            <Container maxWidth="xl"></Container>
            <header>
                <a href=""><Logo /></a>
            </header>
            <main id="lobby-container">
                <div id="form-container">
                    <div id="form__container__header">
                        <p>Create / Join a room</p>
                    </div>

                    <div id="form__content__wrapper">
                        <form id="join-form" autocomplete="off">
                            <input type="text" name="invite_link" required/>
                            <input type="submit" value="Join Room" />
                        </form>
                    </div>
                </div>
            </main>
        </div >
    );
}

export default Login;
