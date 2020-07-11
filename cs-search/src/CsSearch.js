import * as React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './CsSearch.styles';

const Search = ({ name = "Search...", classes }) => {
  const channel = new BroadcastChannel("comsystrom");
  const onClick = (item) => {
    channel.postMessage({ type: "CS_SEARCH_CLICK_ITEM", payload: item });
  };

    return (
      <div className={classes.search}>
        <div className={classes.searchField}>
          <TextField placeholder={name} />
        </div>

        <div className={classes.searchList}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button className={classes.searchItem} onClick={() => onClick("ComSystrom")}>
              <ListItemText>ComSystrom</ListItemText>
            </ListItem>
            <ListItem button className={classes.searchItem} onClick={() => onClick("Replystrom")}>
              <ListItemText>Replystrom</ListItemText>
            </ListItem>
            <ListItem button className={classes.searchItem} onClick={() => onClick("Clusterstrom")}>
              <ListItemText>Clusterstrom</ListItemText>
            </ListItem>
            <ListItem button className={classes.searchItem} onClick={() => onClick("Powerstrom")}>
              <ListItemText>Powerstrom</ListItemText>
            </ListItem>
            <ListItem button className={classes.searchItem} onClick={() => onClick("Datastrom")}>
              <ListItemText>Datastrom</ListItemText>
            </ListItem>
            <ListItem button className={classes.searchItem} onClick={() => onClick("Konzeptstrom")}>
              <ListItemText>Konzeptstrom</ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    );
}

export const SearchComponent = withStyles(styles)(Search)
