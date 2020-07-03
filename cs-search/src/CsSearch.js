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
                        <a href="#">ComSystrom</a>
                    </li>
                    <li>
                        <a href="#">Replystrom</a>
                    </li>
                    <li>
                        <a href="#">Test1</a>
                    </li>
                    <li>
                        <a href="#">Test2</a>
                    </li>
                    <li>
                        <a href="#">Test2</a>
                    </li>
                    <li>
                        <a href="#">Test3</a>
                    </li>
                    <li>
                        <a href="#">Test4</a>
                    </li>
                </ul>
            </div>
        );
    }
}
