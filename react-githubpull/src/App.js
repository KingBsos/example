import React, { useState, Fragment, useEffect } from 'react';
import createReactClass from 'create-react-class';
import './App.css';
import axios from 'axios';

let url = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';

// function App() {
//   let [branch, setBranch] = useState(['master', 'dev']);
//   let [currentBranch, setCurrentBranch] = useState('master');
//   let [data, setData] = useState([]);
//   useEffect(function () {
//     axios.get(url + currentBranch).then((result) => {
//       setData(result.data);
//     });
//   });
//   return (
//     <div className="App">
//       <h1>github</h1>
//       {branch.map((item, index) => {
//         return (<Fragment key={index}>
//           <input type="radio" name="branch" value={item} checked={currentBranch === item}
//             onChange={(e) => setCurrentBranch(e.target.value)} /> {item}
//         </Fragment>)
//       })}
//       <h3>current branch -- {currentBranch}</h3>
//       <div>
//         {
//           data.map((item, index) => (
//             <Fragment key={index}>
//               <span>{item.sha.slice(0, 7)}</span>
//               <small>{item.commit.message}</small><br />
//               <span>by {item.commit.author.name}</span>at 
//               <small>{item.commit.author.date.replace(/T|Z/g, '')}</small><br />
//             </Fragment>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       branch: ['master', 'dev'],
//       currentBranch: 'master',
//       data: []
//     };
//     this.fetchData('master');
//     this.setCurrentBranch = this.setCurrentBranch.bind(this);
//     this.fetchData = this.fetchData.bind(this);
//   }
//   setCurrentBranch(v) {
//     this.setState({
//       currentBranch: v
//     });
//     this.fetchData(v);
//   }
//   fetchData(v) {
//     axios.get(url + v).then((result) => {
//       if (result.status == 200)
//         this.setState({
//           data: result.data
//         });
//     });
//   }
//   componentDidUpdate() {
//     console.log('update')
//   }
//   render() {
//     let { state: { branch, currentBranch, data }, setCurrentBranch, fetchData } = this;
//     return (
//       <div className="App">
//         <h1>github</h1>
//         {branch.map((item, index) => {
//           return (<Fragment key={index}>
//             <input type="radio" name="branch" value={item} checked={currentBranch === item}
//               onChange={(e) => setCurrentBranch(e.target.value)} /> {item}
//           </Fragment>)
//         })}
//         <h3>current branch -- {currentBranch}</h3>
//         <div>
//           {
//             data.map((item, index) => (
//               <Fragment key={index}>
//                 <span>{item.sha.slice(0, 7)}</span>
//                 <small>{item.commit.message}</small><br />
//                 <span>by {item.commit.author.name}</span>at
//                 <small>{item.commit.author.date.replace(/T|Z/g, '')}</small><br />
//               </Fragment>
//             ))
//           }
//         </div>
//       </div>
//     );
//   }
// }

const App = createReactClass({
  getInitialState() {
    return {
      branch: ['master', 'dev'],
      currentBranch: 'master',
      data: []
    };
  },
  setCurrentBranch(v) {
    this.setState({
      currentBranch: v
    });
    this.fetchData(v);
  },
  fetchData(v) {
    axios.get(url + v).then((result) => {
      if (result.status == 200)
        this.setState({
          data: result.data
        });
    });
  },
  componentDidMount() {
    this.fetchData(this.state.currentBranch);
  },
  render() {
    let { state: { branch, currentBranch, data }, setCurrentBranch } = this;
    return (
      <div className="App">
        <h1>github</h1>
        {branch.map((item, index) => {
          return (<Fragment key={index}>
            <input type="radio" name="branch" value={item} checked={currentBranch === item}
              onChange={(e) => setCurrentBranch(e.target.value)} /> {item}
          </Fragment>)
        })}
        <h3>current branch -- {currentBranch}</h3>
        <div>
          {
            data.map((item, index) => (
              <Fragment key={index}>
                <span>{item.sha.slice(0, 7)}</span>
                <small>{item.commit.message}</small><br />
                <span>by {item.commit.author.name}</span>at
                <small>{item.commit.author.date.replace(/T|Z/g, '')}</small><br />
              </Fragment>
            ))
          }
        </div>
      </div>
    );
  }
});

export default App;
