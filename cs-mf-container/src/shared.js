function initMicrofrontendContainer() {

    initNavigation();

    /* Setup broadcast channel */
    const channel = new BroadcastChannel("comsystrom");
    channel.onmessage = (msg) => {
        console.log(msg);
        if (msg.data.key === "navigation:change") {
            const csSearchContainer = document.getElementById("search-container");
            const csDetailsContainer = document.getElementById("details-container");

            removeAllChildNodes(csSearchContainer);
            removeAllChildNodes(csDetailsContainer);

            msg.data.value.bundles.forEach(b => {
                loadScript(b.bundleUrl);
                const microFrontendEl = document.createElement(b.elementName);
                const microFrontendContainer = b.elementName === "cs-search" ? csSearchContainer : csDetailsContainer
                microFrontendEl.addEventListener("load", onload);

                removeAllChildNodes(microFrontendContainer);
                microFrontendContainer.appendChild(microFrontendEl);
            });
        }
    };
}

function initNavigation() {
    const angularEl = document.createElement("cs-navigation");

    const angularElContainer = document.getElementById("navigation-container");
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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
