// -*- mode: js-jsx -*-
/* chrysalis-hardware-softhruf-splitography -- Chrysalis SOFT/HRUF Splitography library
 * Copyright (C) 2019-2020  Keyboard.io, Inc.
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

import { KeymapDB } from "../../keymap";

const db = new KeymapDB();

class Keymap extends React.Component {
  render() {
    const keymap =
      this.props.keymap ||
      Array(48)
        .fill()
        .map(() => 0);

    let keyIndex = (row, col) => {
      return row * 12 + col;
    };

    let Key = props => {
      const { x, y, row, col, transform } = props;
      const width = props.width || 1,
        height = props.height || 1,
        bottom = y + height * 40 - 4;

      const key = keymap[keyIndex(row, col)],
        stroke =
          this.props.selectedKey == keyIndex(row, col) ? "#f3b3b3" : "#b3b3b3";

      return (
        <g
          transform={transform}
          onClick={this.props.onKeySelect}
          data-layer={this.props.index}
          data-key-index={keyIndex(row, col)}
          className="key"
        >
          <rect
            x={x}
            y={y}
            rx={3}
            width={width * 40 + 8}
            height={height * 40 + 8}
            stroke={stroke}
            strokeWidth="1.55"
            fill="#ffffff"
          />
          <text x={x + 3} y={y + 14}>
            {key && key.label && key.label.hint}
          </text>
          <text x={x + 3} y={bottom}>
            {key && key.label && db.format(key).main}
          </text>
        </g>
      );
    };

    return (
      <svg
        viewBox="0 0 700 213"
        xmlns="http://www.w3.org/2000/svg"
        className={this.props.className || "layer"}
      >
        <g>
          <Key x={1} y={1} row={0} col={0} />
          <Key x={55} y={1} row={0} col={1} />
          <Key x={109} y={1} row={0} col={2} />
          <Key x={163} y={1} row={0} col={3} />
          <Key x={217} y={1} row={0} col={4} />
          <Key x={271} y={1} row={0} col={5} />
          <Key x={379} y={1} row={0} col={6} />
          <Key x={433} y={1} row={0} col={7} />
          <Key x={487} y={1} row={0} col={8} />
          <Key x={541} y={1} row={0} col={9} />
          <Key x={595} y={1} row={0} col={10} />
          <Key x={649} y={1} row={0} col={11} />

          <Key x={1} y={55} row={1} col={0} />
          <Key x={55} y={55} row={1} col={1} />
          <Key x={109} y={55} row={1} col={2} />
          <Key x={163} y={55} row={1} col={3} />
          <Key x={217} y={55} row={1} col={4} />
          <Key x={271} y={55} row={1} col={5} />
          <Key x={379} y={55} row={1} col={6} />
          <Key x={433} y={55} row={1} col={7} />
          <Key x={487} y={55} row={1} col={8} />
          <Key x={541} y={55} row={1} col={9} />
          <Key x={595} y={55} row={1} col={10} />
          <Key x={649} y={55} row={1} col={11} />

          <Key x={1} y={109} row={2} col={0} />
          <Key x={55} y={109} row={2} col={1} />
          <Key x={109} y={109} row={2} col={2} />
          <Key x={163} y={109} row={2} col={3} />
          <Key x={217} y={109} row={2} col={4} />
          <Key x={271} y={109} row={2} col={5} />
          <Key x={379} y={109} row={2} col={6} />
          <Key x={433} y={109} row={2} col={7} />
          <Key x={487} y={109} row={2} col={8} />
          <Key x={541} y={109} row={2} col={9} />
          <Key x={595} y={109} row={2} col={10} />
          <Key x={649} y={109} row={2} col={11} />

          <Key x={190} y={163} row={3} col={4} />
          <Key x={244} y={163} row={3} col={5} />
          <Key x={406} y={163} row={3} col={6} />
          <Key x={460} y={163} row={3} col={7} />
        </g>
      </svg>
    );
  }
}

export default Keymap;
