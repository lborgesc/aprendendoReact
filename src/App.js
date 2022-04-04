import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
    counter: 0,
    posts: [          {
      id: 1,
      title: 'O título 1',
      body: 'O corpo 1'
    },
    {
      id: 2,
      title: 'O título 2',
      body: 'O corpo 2'
    },
    {
      id: 3,
      title: 'O título 3',
      body: 'O corpo 3'
    }]
  };
  timeoutUpdate = null;

  componentDidUpdate(){
    this.handleTimeout(); 
  }

  componentDidMount(){    
    this.handleTimeout(); 
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O título mudou'

    setTimeout(() => {
      this.setState({ posts, counter: counter+1})
    }, 2000);
  }

  render(){
    const { posts, counter } = this.state;

  return (
    <div className="App">
      <h1>{ counter }</h1>
      { posts.map(item => (
        <div key={item.id}>
          <h1> {item.title} </h1>
          <p> {item.body} </p>
        </div>
      ))}
    </div>
  );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
