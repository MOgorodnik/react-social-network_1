import React, { Component } from "react";

// include jQuery
import 'jquery';

const $ = require("jquery");
const jQuery = $;
window.$ = window.jQuery = $;
console.log('WTF', $);

//Preloader
const Preloader = () => {
    // const preloader = $('#spinner-wrapper');
    // $(window).on('load', function() {
    //     const preloaderFadeOutTime = 500;
    //
    //     function hidePreloader() {
    //         preloader.fadeOut(preloaderFadeOutTime);
    //     }
    //     hidePreloader();
    // });

    return (
        <>
            <div id="spinner-wrapper">
                <div className="spinner"></div>
            </div>
        </>
    );
};

export default Preloader;

// https://xakplant.ru/2019/08/07/%D0%B0%D0%BD%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-preloader-%D0%BD%D0%B0-reactjs-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B5%D0%BC-suspense/