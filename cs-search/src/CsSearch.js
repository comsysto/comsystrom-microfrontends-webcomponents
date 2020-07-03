import * as React from "react";
import PropTypes from "prop-types";
import { dispatchEvent } from "./service";
import StyledCsSearch from "./CsSearch.styled";

export class SearchComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };
  static defaultProps = {
    name: "Search",
  };

  render() {
    const { name } = this.props;
    const onClick = () => {
      dispatchEvent("name", Math.random().toString() + "Test");
    };

    return (
      <StyledCsSearch>
        <div>
          <input type="text" placeholder={name} />
          <ul>
            <li>
              <a href="#" onClick={onClick}>
                ComSystrom
              </a>
            </li>
            <li>
              <a href="#" onClick={onClick}>
                Replystrom
              </a>
            </li>
            <li>
              <a href="#" onClick={onClick}>
                Test1
              </a>
            </li>
            <li>
              <a href="#" onClick={onClick}>
                Test2
              </a>
            </li>
            <li>
              <a href="#" onClick={onClick}>
                Test2
              </a>
            </li>
            <li>
              <a href="#" onClick={onClick}>
                Test3
              </a>
            </li>
            <li>
              <a href="#" onClick={onClick}>
                Test4
              </a>
            </li>
          </ul>
        </div>
      </StyledCsSearch>
    );
  }
}
