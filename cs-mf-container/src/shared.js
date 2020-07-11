function initMicrofrontendContainer() {

    initNavigation();
    initSearch();
    initDetails();

    /* Setup broadcast channel */
    const channel = new BroadcastChannel("comsystrom");
    channel.onmessage = (msg) => {
        console.log(msg);
        if (msg.data.key === "navigation:change") {
            const microFrontendContainer = document.getElementById("main-container");
            removeAllChildNodes(microFrontendContainer);

            msg.data.value.bundles.forEach(b => {
                loadScript(b.bundleUrl);
                const microFrontendEl = document.createElement(b.elementName);
                microFrontendEl.addEventListener("load", onload);
                microFrontendContainer.appendChild(microFrontendEl);
            });
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

function initSearch() {
    const reactEl = document.createElement("cs-search");

    const reactElContainer = document.getElementById("react-container");
    if (reactElContainer.children.length > 0) {
        reactElContainer.removeChild(reactElContainer.children[0]);
    }
    reactElContainer.appendChild(reactEl);
}

function initDetails() {
    const vueEl = document.createElement("cs-details");

    const vueElContainer = document.getElementById("vue-container");
    if (vueElContainer.children.length > 0) {
        vueElContainer.removeChild(vueElContainer.children[0]);
    }
    vueElContainer.appendChild(vueEl);
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
