// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2018, 2019, 2020  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { withStyles } from "@material-ui/core/styles";

import Keyboard104 from "./KeySelector/keyboard104";
import FeatureSelector from "./KeySelector/FeatureSelector";

import { NewKeymapDB } from "../../../api/keymap";

const db = new NewKeymapDB();

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,

    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0
  },
  tabpanel: {
    width: "100%"
  },
  tabs: {
    minWidth: 170,
    borderRight: `1px solid ${theme.palette.divider}`
  }
});

function TabPanel(props) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      className={className}
      role="tabpanel"
      hidden={value !== index}
      id={`keyselector-tabpanel-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

class KeySelector extends React.Component {
  state = {
    tab: 0
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    let newTab = 0;

    console.log(db.isInCategory(nextProps.currentKeyCode, "layer"));

    if (db.isInCategory(nextProps.currentKeyCode, "layer")) {
      newTab = 1;
    }

    this.setState({ tab: newTab });
  };

  setTab = (event, index) => {
    this.setState({ tab: index });
  };

  render() {
    const {
      classes,
      onKeySelect,
      currentKeyCode,
      keymap,
      currentLayout
    } = this.props;
    const { tab } = this.state;

    return (
      <Paper className={classes.root}>
        <Tabs
          orientation="vertical"
          value={tab}
          className={classes.tabs}
          onChange={this.setTab}
        >
          <Tab label="Keyboard" />
          <Tab label="Features" />
          <Tab label="Others..." />
        </Tabs>
        <TabPanel value={tab} index={0} className={classes.tabpanel}>
          <Keyboard104
            onKeySelect={onKeySelect}
            currentKeyCode={currentKeyCode}
            keymap={keymap}
            currentLayout={currentLayout}
          />
        </TabPanel>
        <TabPanel value={tab} index={1} className={classes.tabpanel}>
          <FeatureSelector
            onKeySelect={onKeySelect}
            currentKeyCode={currentKeyCode}
            keymap={keymap}
            currentLayout={currentLayout}
          />
        </TabPanel>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(KeySelector);
