---
title: "Upgrade your terminal: Part II - Basic unix commands in Windows Terminal"
date: "2023-07-09"
slug: "upgrade-your-terminal-part-2"
---

Git comes with self-contained executables of all the basic unix tools you need! All you have to do is add a PATH entry to point to them, and that's it. No downloading anything. If you have git, you get these for free.

Windows DOES have linux available on it now. It's called WSL (Windows Subsystem for Linux). However, in order to run linux terminal commands, you need to launch a WSL terminal specifically, so you switch contexts completely into linux land. I don't want a separate terminal just for linux, and I don't want to live in linux land all the time. Here's why:

- You need to access my Windows file system through `/mnt/whatever` or `/cygrdive/c/blah`. I want to be able to do `cd C:\`
- You can't run PowerShell from the linux terminal (as far as I know), so you'll never be able to run unix commands in your PowerShell Window.

### How to get it

Have git installed.

Run this commmand in a cmd window and restart your shell (bin path may vary based on your git installation.)

`setx path "%path%;C:\Program Files\git\usr\bin"`

Get the basic unix tools (ls, grep, less, tail etc.) in your Windows terminal. No separate shell window needed.