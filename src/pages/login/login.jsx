import React from "react";
import Logo from "../../components/logo/logo";
import "./login.css";

function Login() {
  return (
    <div className="lobby">
      <div className="login header">
        <Logo lg />
      </div>
      <main id="lobby-container">
        <div id="form-container">
          <div id="form__container__header">
            <p>Create / Join a room</p>
          </div>

          <div id="form__content__wrapper">
            <form id="join-form" autoComplete="off">
              <input type="text" name="invite_link" required />
              <input type="submit" value="Join Room" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
