import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      bombState: '*',
    };
  }

  handleTread = (e) => {
    const { isbomb } = this.props;

    this.props.handleClick(isbomb);
  }

  render() {
    const { bombState } = this.state;

    return (
      <input
        type="button"
        onClick={this.handleTread}
        value={bombState}/>
    )
  }
}

export default Cell;
