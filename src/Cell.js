import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      bombState: '',
    };
  }

  handleTread = (e) => {
    const { isBomb  } = this.props;

    this.props.handleClick(isBomb);
  }

  render() {
    console.log(this.props);
    const { open, bombState } = this.state;
    const { bombCount } = this.props;

    return (
      open ?
      <input type="button" styel={{'background-color': 'red'}} />
      :<input
        type="button"
        onClick={this.handleTread}
        value={bombCount}/>
    )
  }
}

export default Cell;
