import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bombState: '*',
    };
  }

  handleTread = (e) => {
    const { open, isBomb, bombCount, xIndex, yIndex  } = this.props;

    if (!open) {
      var str = isBomb ? 'X' :
        bombCount === 0 ? '' : bombCount;
      this.setState({bombState: str});

      if (isBomb)
        console.log('You dead!!');
      else
        this.props.handleShowCount(xIndex, yIndex);
    }
  }

  render() {
    const { bombState } = this.state;

    return (
      <input
        type="button"
        onClick={this.handleTread}
        value={bombState}
        style={{ width: '30px'}}
      />
    )
  }
}

export default Cell;
