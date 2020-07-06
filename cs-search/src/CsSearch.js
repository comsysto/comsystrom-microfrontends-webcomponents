import * as React from "react";
import PropTypes from "prop-types";
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
    const channel = new BroadcastChannel("comsystrom");
    const onClick = (item) => {
      channel.postMessage({type: "CS_SEARCH_CLICK_ITEM", payload: item});
    };

    return (
      <StyledCsSearch>
        <div>
          <input type="text" placeholder={name} />
          <ul>
            <li>
              <a href="#" onClick={() => onClick("ComSystrom")}>
                ComSystrom
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onClick("Replystrom")}>
                Replystrom
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onClick("Clusterstrom")}>
                Clusterstrom
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onClick("Powerstrom")}>
                Powerstrom
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onClick("Datastrom")}>
                Datastrom
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onClick("Konzeptstrom")}>
                Konzeptstrom
              </a>
            </li>
          </ul>
        </div>
      </StyledCsSearch>
    );
  }
}
