import React from 'react'

class HogFilter extends React.Component {
  constructor() {
    super();
  }

  handleSelect = (e) => {
    this.props.sortMethod(e.target.value)
  }

  handleGreasedCheck = () => {
    this.props.toggleGrease()
  }

  render() {
    return (
      <div>
        <label>
          GREASED????</label>
        <input onClick ={this.handleGreasedCheck} type='checkbox' />
        <label>Order by weight:</label>
        <select onChange={this.handleSelect}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }
}

export default HogFilter
