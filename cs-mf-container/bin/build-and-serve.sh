#!/usr/bin/env bash -e

startCsSearch() {
    cd ../cs-search
    yarn build
    yarn serve:build 
}

startMfContainer() {
    cd ../cs-mf-container
    yarn start
}

startCsSearch & 
startMfContainer 