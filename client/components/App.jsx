import React from 'react'
import {getEvents} from './event-client'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      events:[]
  }
  this.getEvents = this.getEvents.bind(this)
}

componentDidMount() {
  this.getEvents()
}

getEvents(){
  getEvents()
  .then(res => {
    this.setState({ 
      events: res.body.events   
    })
  })
}
  
  render() {
    return (
    <div>
      <h1>Earth Observatory Events</h1>
      {console.log(this.state.events)}
        <ul>
          {this.state.events.map(event => {
          return <li>{event.title}</li>
          })}
        </ul>
    </div>
    )
  }
}

export default App

{/* <div>
<h1>Earth Observatory Events</h1>
{console.log(this.state.events)}

  <ul>
    {this.state.events.map(event => {
    return <li key={event}><button onClick={() => this.getEvents(event)}>{event.title}</button></li>
    })}
  </ul>

</div> */}