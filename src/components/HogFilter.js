import React from 'react'

class HogFilter extends React.Component {
  constructor() {
    super();
  }

  handleSelect = (e) => {
    this.props.sortMethod(e.target.value)
  }

  render() {
    return (
      <form>
        <label>Order by weight:</label>
        <select onChange={this.handleSelect}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </form>
    )
  }
}

export default HogFilter
