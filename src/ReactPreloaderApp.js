import React, { useEffect } from "react";
import anime from "animejs";
import ProgressBar from "progressbar.js";
import $ from "jquery";
import "./App.css"; // Assuming you add any additional styles in App.css

import LogoImg from "../src/assets/logos/MainLogoImg.png";

const ReactPreloaderApp = () => {
  useEffect(() => {
    $("html").addClass("is-animating");

    anime({
      targets: ".qrt-preloader .qrt-preloader-content",
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: "linear",
    });

    anime({
      targets: ".qrt-preloader",
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: "linear",
      complete: function () {
        $(".qrt-preloader").css("display", "none");
        $("html").removeClass("is-animating");
      },
    });

    const bar = new ProgressBar.Line("#preloader", {
      strokeWidth: 1.7,
      easing: "easeInOut",
      duration: 1400,
      delay: 750,
      trailWidth: 1.7,
      svgStyle: {
        width: "100%",
        height: "100%",
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
      },
    });

    bar.animate(1);

    const cursor = document.querySelector("#cursor");
    const cursorRadius = Math.round(cursor.getBoundingClientRect().width / 1.2);

    const mouse = {
      x: 300,
      y: 300,
    };
    const pos = {
      x: 0,
      y: 0,
    };
    const ratio = 0.07;

    const draw = () => {
      pos.x += (mouse.x - cursorRadius - pos.x) * ratio;
      pos.y += (mouse.y - cursorRadius - pos.y) * ratio;
      cursor.style.transform =
        "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
    };

    const update = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", update, {
      capture: false,
      passive: true,
    });

    function animateCursor() {
      draw();
      requestAnimationFrame(animateCursor);
    }

    requestAnimationFrame(animateCursor);
  }, []);

  return (
    <div className="qrt-app  ">
      <div className="qrt-preloader">
        <div className="qrt-preloader-content">
          <div className="qrt-logo">
            <img src={LogoImg} alt="Quarty" width="200px" />
          </div>
          <div id="preloader" className="qrt-preloader-load"></div>
        </div>
      </div>
      <div id="cursor" className="qrt-cursor">
        <div></div>
        <div className="qrt-follower">
          <i className="fas fa-circle-notch"></i>
        </div>
      </div>
    </div>
  );
};

export default ReactPreloaderApp;
