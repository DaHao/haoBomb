import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bLen: 5,
      bWidth: 5,
    };

    var tempList = [];
    for(let i = 0; i < this.state.bLen; i++) {
      var temp = [];
      for(let j = 0; j < this.state.bWidth; j++) {
        var isBomb = this.getRandom(2) === 1;
        temp.push(isBomb);
      }
      tempList.push(temp);
    }

    this.state.bombList = tempList;

    
  }

  getRandom = (x) => {
    return Math.floor(Math.random()*x);
  }

  handleClick = (isbomb) => {
    if (isbomb) console.log('you dead');
    else {
      // count bomb
      // refresh bomb
    }
  }

  render() {
    const { bLen, bWidth, bombList } = this.state;
    console.log(bombList);

    let table = [];
    for (let i=0; i<bLen; i++) {
      var temp = [];
      for(let j=0; j<bWidth; j++) {
        temp.push(
          <Cell
            bLen={i}
            bWidth={j}
            isbomb={bombList[i][j]}
            {...this.props}
            handleClick={this.handleClick}
          />);
      }
      table.push(temp);
      table.push(<br/>);
    }

    return table;
  }
}

export default Bomb;
