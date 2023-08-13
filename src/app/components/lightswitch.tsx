'use client'

import Script from "next/script"
import { useEffect } from "react";

export default function Lightswitch() {

    useEffect(() => {

        function initStateFromLocalStorage() {
            const lightsOn = !('lightsOn' in localStorage) ? false : localStorage.lightsOn === 'true'
            const lightSwitchElement = document.getElementById('light-switch') as HTMLInputElement
            lightSwitchElement.checked = lightsOn
            setThemeState(lightsOn)
        }

        initStateFromLocalStorage()
    }, []);

    function onChecked(evt: any) {
        const lightsOn = evt.target.checked
        localStorage.lightsOn = JSON.stringify(lightsOn)
        setThemeState(lightsOn)
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

            <div>
                <input type="checkbox" id="light-switch" name="light-switch" onChange={(evt) => onChecked(evt)} />
                <label htmlFor="light-switch" aria-label="light-switch">
                    <i className="fa-solid fa-lightbulb"></i>
                </label>
            </div>
        </>
    )
}