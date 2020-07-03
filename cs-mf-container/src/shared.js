
function initMicrofrontendContainer() {

    initNavigation();

    /* Setup broadcast channel */
    const channel = new BroadcastChannel("comsystrom");
    channel.onmessage = (msg) => {
        console.log(msg);
        if (msg.data.key === "navigation:change") {
            const bundleDescription = msg.data.value;
            loadScript(bundleDescription.bundleUrl);
            const microFrontendContainer = document.getElementById("main-container");
            if (microFrontendContainer.children.length > 0) {
                microFrontendContainer.removeChild(microFrontendContainer.children[0]);
            }

            const microFrontendEl = document.createElement(bundleDescription.elementName);
            microFrontendEl.addEventListener("load", onload);
            microFrontendContainer.appendChild(microFrontendEl);
        }
    };
}

function initNavigation() {
    const angularEl = document.createElement("cs-navigation");

    const angularElContainer = document.getElementById("ng-container");
    if (angularElContainer.children.length > 0) {
        angularElContainer.removeChild(angularElContainer.children[0]);
    }
    angularElContainer.appendChild(angularEl);
}

function loadScript(url) {
    let isLoaded = document.querySelectorAll(`.search-script[src="${url}"]`);
    if (isLoaded.length > 0) {
        return;
    }

    let myScript = document.createElement("script");
    myScript.src = url;
    myScript.className = 'search-script';
    document.body.appendChild(myScript);
}
