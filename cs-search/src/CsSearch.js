import * as React from "react";
import PropTypes from "prop-types";

export class SearchComponent extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        onHelloEvt: PropTypes.func
    };
    static defaultProps = {
        name: "Search",
    };
    
    render() {
        const { name, onHelloEvt } = this.props;
        console.log("Init Searchcomponent ", name, onHelloEvt)

        const bc = new BroadcastChannel('comsystrom_channel');
        bc.postMessage('Connected to channel.');
        const onClick = () => {
            console.log("SEARCH: Click");
            bc.postMessage('Clicked on item.');
            onHelloEvt();
        }

        return (
            <div>
                <input
                    type="text"
                    className="cs-search-box"
                    onkeyup="myFunction()"
                    placeholder={name}
                />
                <ul className="cs-search-list">
                    <li>
                        <a href="#" onClick={onClick}>ComSystrom</a>
                    </li>
                    <li>
                        <a href="#" onClick={onClick}>Replystrom</a>
                    </li>
                    <li>
                        <a href="#" onClick={onClick}>Test1</a>
                    </li>
                    <li>
                        <a href="#" onClick={onClick}>Test2</a>
                    </li>
                    <li>
                        <a href="#" onClick={onClick}>Test2</a>
                    </li>
                    <li>
                        <a href="#" onClick={onClick}>Test3</a>
                    </li>
                    <li>
                        <a href="#" onClick={onClick}>Test4</a>
                    </li>
                </ul>
            </div>
        );
    }
}
