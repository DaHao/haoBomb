import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cell from "./Cell";

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bLen: 5,
      bWidth: 5
    };

    this.state.bombList = this.genBoard(this.state.bLen, this.state.bWidth);
  }

  genBoard = (len, wid) => {
    var tempList = [];
    for (let i = 0; i < len; i++) {
      var temp = [];
      for (let j = 0; j < wid; j++) {
        var obj = {};
        obj.isBomb = this.getRandom(4) === 1;
        obj.open = false;
        temp.push(obj);
      }
      tempList.push(temp);
    }

    // 計算每個附近炸彈數
    // 如果該格是炸彈就不計算
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < wid; j++) {
        tempList[i][j].bombCount = tempList[i][j].isBomb
          ? 99
          : this.CountBomb(tempList, i, j, len, wid);
      }
    }
    return tempList;
  };

  CountBomb = (bombList, x, y, len, wid) => {
    let count = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        var xIndex = x + i;
        var yIndex = y + j;
        if (
          xIndex >= 0 &&
          yIndex >= 0 &&
          xIndex < len &&
          yIndex < wid &&
          (xIndex !== x || yIndex !== y) &&
          bombList[xIndex][yIndex].isBomb
        )
          count += 1;
      }
    }

    return count;
  };

  getRandom = x => {
    return Math.floor(Math.random() * x);
  };

  handleClick = (isbomb) => {
    if (isbomb) console.log("you dead");
    else {
      
    }
  };

  handleShowCount = (i, j) => {
    const { bombList } = this.state;
    var tempList = bombList;


    tempList[i][j].open = true;
    this.setState({bombList: tempList});
  };

  render() {
    const { bLen, bWidth, bombList } = this.state;

    let table = [];
    for (let i = 0; i < bLen; i++) {
      var temp = [];
      for (let j = 0; j < bWidth; j++) {
        temp.push(
          <Cell
            xIndex={i}
            yIndex={j}
            isBomb={bombList[i][j].isBomb}
            bombCount={bombList[i][j].bombCount}
            open={bombList[i][j].open}
            handleShowCount ={this.handleShowCount}
            {...this.props}
          />
        );
      }
      table.push(temp);
      table.push(<br />);
    }

    return table;
  }
}

export default Bomb;
