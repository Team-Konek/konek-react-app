import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../components/logo/logo";


function Room() {
    return (
        <div className="room">
            
            <div id="videos">
                <video class="video-player" id="user-1" autoplay playsinline></video>
                <video class="video-player" id="user-2" autoplay playsinline></video>
            </div>

            <div id="controls">

                <div class="control-container" id="game-btn">
                    <img src="icons/game.png" />
                </div>

                <div class="control-container" id="camera-btn">
                    <img src="icons/camera.png" />
                </div>

                <div class="control-container" id="mic-btn">
                    <img src="icons/mic.png" />
                </div>

                <a href="lobby.html">
                    <div class="control-container" id="leave-btn">
                        <img src="icons/phone.png" />
                    </div>
                </a>

            </div>

            <div class="wheel-name" id="wheel-name">
                <button id="spin">Spin</button>
                <span class="arrow"></span>
                <div class="container">
                    <div class="one">Hernandez</div>
                    <div class="two">Romero</div>
                    <div class="three">Ancajas</div>
                    <div class="four">Bautista</div>
                    <div class="five">Sarmiento</div>
                    <div class="six">Galon</div>
                    <div class="seven">Villanueva</div>
                    <div class="eight">Delos Santos</div>
                </div>
            </div>

            <div class="wheel-qs" id="wheel-qs">
                <button id="spin2">Spin</button>
                <span class="arrow"></span>
                <div class="container1">
                    <div class="q1">Q</div>
                    <div class="q2">A</div>
                    <div class="q3">B</div>
                    <div class="q4">C</div>
                    <div class="q5">D</div>
                    <div class="q6">F</div>
                    <div class="q7">G</div>
                    <div class="q8">H</div>
                </div>
            </div>
        </div>

    );
}

export default Room;