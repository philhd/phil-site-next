'use client'

import Script from "next/script"
import { useEffect } from "react";

export default function Lightswitch() {

    useEffect(() => initStateFromLocalStorage(), []);

    function onChecked(evt: any) {
        const lightsOn = evt.target.checked
        console.log(`${lightsOn}`)
        localStorage.lightsOn = JSON.stringify(lightsOn)
        setThemeState(lightsOn)
    }

    function setThemeState(lightsOn: boolean) {
        console.log(`setting lightsOn to ${lightsOn}`)
        if(lightsOn){
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }

    function initStateFromLocalStorage() {
        const lightsOn = !('lightsOn' in localStorage) ? false : localStorage.lightsOn === 'true'
        console.log(`initializing lightsOn to ${lightsOn} from local storage`)
        const lightSwitchElement = document.getElementById('light-switch') as HTMLInputElement
        lightSwitchElement.checked = lightsOn
        setThemeState(lightsOn)
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