'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function Blog() {
    const markdown = `# Upgrade your terminal: Part I - Start using Windows Terminal

If you've ever used the classic command line in Windows, or even Windows PowerShell, you know how bad terminals can get. Ugly colors, weird block cursors, no normal copy/paste, impossible to resize, that thing where if you click inside the window while something is running it pauses the execution 😡. Everyone has been waiting for a better terminal for a long time, and guess what, that time has arrived. Actually, it arrived over 3 years ago. You just may not know it yet.

Windows Terminal, Microsoft's replacement for the command line has actually been released for several years now. It even comes standard on Windows 11! But I don't think it's been well publicized. I discovered it by stumbling upon some blog post, but many of the people I tell about it had never heard of it before. Here are just a few of the nice things about it:

- Tabs that can be cmd or PowerShell
- Customizable styles (colors, font size, font, etc.)
- Large scroll buffer
- It behaves the way you would expect a terminal to behave

If you're on Windows 10, you have to install it. But it's super easy to do:

[Download Windows Terminal from Microsoft Store](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701)

(Don't worry. I was wary of installing anything from Microsoft Store at first too, but it's legit.)

Let's all enjoy this wonderful terminal redemption story from Microsoft, and try to block out from our minds all the rage and suffering from its embarrasing past.`

    return (
        ReactDom.render(<ReactMarkdown>{markdown}</ReactMarkdown>, document.body)
    )
}
