#!/usr/bin/env bash -e

startCsSearch() {
    cd ../cs-search
    yarn build
    yarn serve:build 
}
startCsNavigation() {
    cd ../cs-navigation
    yarn build
    yarn serve:build 
}
startCsDetails() {
    cd ../cs-details
    yarn build
    yarn serve:build 
}
startMfContainer() {
    cd ../cs-mf-container
    yarn start
}

startCsSearch & 
startCsNavigation &
startCsDetails &
startMfContainer 