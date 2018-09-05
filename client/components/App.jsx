import React from 'react'
const request = require('superagent')

const apiEndpointBase = '/v1/'

class App extends React.Component {
  constructor(props) {
    super(props)

    this. state = {
      natural: []
    }

    this.getList = this.getList.bind(this)
  }

componentDidMount() {
  this.getList()
}

getList() {
  return request.get(apiEndpointBase + 'pictures')
    .then(res => {
      this.setState({
        natural: res.body

      })
    })
}


  render () {
  return (
    <div onLoad={(() => this.getList())}>
      <h1>Natural Pictures</h1>
      <ul>
        {this.state.natural.map(something => {
          return <li>
            {something.identifier}
            <img src={"https://epic.gsfc.nasa.gov/archive/natural/2018/09/02/jpg/" + something.image + ".jpg"} />
          </li>
        })}
      </ul>
    </div>
    )
  }
}

export default App

