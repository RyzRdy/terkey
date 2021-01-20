#!/usr/bin/bash

apt update && apt upgrade
apt install nodejs -y
apt install python -y
npm i figlet
npm i lolcatjs
npm i chalk

echo "-+-+-+-[ DONE ]-+-+-+-"
