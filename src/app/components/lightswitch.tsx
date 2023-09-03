'use client'

import Script from "next/script"
import { useEffect, useState } from "react";

export default function Lightswitch() {

    const [lightsOn, setLightsOn] = useState(!('lightsOn' in localStorage) ? false : localStorage.lightsOn === 'true')

    useEffect(() => {
        function initStateFromLocalStorage() {
            setThemeState(lightsOn)
        }

        initStateFromLocalStorage()
    }, [lightsOn]);

    function onChecked(evt: any) {
        setLightsOn(evt.target.checked)
        localStorage.lightsOn = JSON.stringify(lightsOn)
        setThemeState(lightsOn)
    }

    function onKeyPress(evt: any) {
        const isEnterOrSpace = evt.keyCode === 32 || evt.keyCode === 13
        if (isEnterOrSpace) {
            setLightsOn(!lightsOn)
        }
    }

    function setThemeState(lightsOn: boolean) {
        if (lightsOn) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }

    return (
        <>
            <Script src="https://kit.fontawesome.com/8b6d78f83d.js" crossOrigin="anonymous" />

            <div role="checkbox" aria-checked={lightsOn} tabIndex={0} onKeyUp={(evt) => onKeyPress(evt)}>
                <input type="checkbox" className="hidden" id="light-switch" checked={lightsOn} name="light-switch" onChange={(evt) => onChecked(evt)} />
                <label htmlFor="light-switch" aria-label="light-switch">
                    <i className="fa-solid fa-lightbulb p-2"></i>
                </label>
            </div>
        </>
    )
}