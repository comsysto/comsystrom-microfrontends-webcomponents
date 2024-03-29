import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
// import htmlToReact from 'html-to-react';
import { SearchComponent } from "./CsSearch";

class ReactElement extends HTMLElement {

    constructor() {
        super();
        this.observer = new MutationObserver(() => this.update());
        this.observer.observe(this, { attributes: true });
    }

    connectedCallback() {
        this._innerHTML = this.innerHTML;
        this.mount();
    }

    disconnectedCallback() {
        this.unmount();
        this.observer.disconnect();
    }

    update() {
        this.unmount();
        this.mount();
    }

    mount() {
        // A typechecking mechanism of react (does not work in production): https://reactjs.org/docs/typechecking-with-proptypes.html
        const propTypes = SearchComponent.propTypes ? SearchComponent.propTypes : {};
        const props = {
            ...this.getProps(this.attributes, propTypes),
        };
        render(<SearchComponent {...props} />, this);
    }

    unmount() {
        unmountComponentAtNode(this);
    }

    // 
    getProps(attributes, propTypes) {
        propTypes = propTypes || {};
        return [...attributes]
            .filter(attr => attr.name !== 'style')
            .map(attr => this.convert(propTypes, attr.name, attr.value))
            .reduce((props, prop) =>
                ({ ...props, [prop.name]: prop.value }), {});
    }

    /*
        Converts a received string attrValue into a desired type (ex. "1" => 1) and returns a mapping of the name and the value of the attribute
    */
    convert(propTypes, attrName, attrValue) {
        const propName = Object.keys(propTypes)
            .find(key => key.toLowerCase() == attrName);
        let value = attrValue;
        if (attrValue === 'true' || attrValue === 'false')
            value = attrValue == 'true';
        else if (!isNaN(attrValue) && attrValue !== '')
            value = +attrValue;
        else if (/^{.*}/.exec(attrValue))
            value = JSON.parse(attrValue);
        return {
            name: propName ? propName : attrName,
            value: value
        };
    }

}

customElements.define('cs-search', ReactElement);

if(process.env.NODE_ENV === 'development') {
    document.body.appendChild(
        document.createElement("cs-search")
    )
}
