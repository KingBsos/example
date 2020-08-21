import React, { useState } from 'react';
import createReactClass from 'create-react-class';
import './App.css';
import _ from 'lodash';
import marked from 'marked';

// function App() {
//   let [value, setValue] = useState('*h1*');
//   let [markedStr, setMarkedStr] = useState(marked(value));
//   let [debounced] = useState(() => _.debounce((value) => {
//     let str = marked(value);
//     setMarkedStr(str);
//   }, 500));
//   return (
//     <div className="App">
//       <textarea value={value} onChange={(e) => {
//         setValue(e.target.value);
//         debounced(e.target.value);
//       }}></textarea>
//       <div dangerouslySetInnerHTML={ {__html: markedStr } }></div>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     let initStr = '*h1*';
//     this.state = {
//       value: initStr,
//       markedStr: marked(initStr)
//     }
//     this.changeHandle = this.changeHandle.bind(this);
//     this.debounced = _.debounce(function (v) {
//       this.setState({
//         markedStr: marked(v)
//       });
//     }, 500);
//   }
//   changeHandle(e) {
//     this.setState({ value: e.target.value });
//     this.debounced(e.target.value);
//   }
//   render() {
//     let {state: { value, markedStr}, changeHandle} = this;
//     return (
//       <div className="App">
//         <textarea value={value} onChange={changeHandle} />
//         <div dangerouslySetInnerHTML={{ __html: markedStr }}></div>
//       </div>
//     )
//   }
// }

const App = createReactClass({
    getInitialState() {
        let initStr = '*h1*';
        this.debounced = _.debounce(function(v) {
            this.setState({
                markedStr: marked(v)
            });
        }, 500);
        return {
            value: initStr,
            markedStr: marked(initStr)
        }
    },
    render() {
        return (
            <div className="App">
            <textarea value={this.state.value} onChange={(e) => {
                this.setState({
                    value: e.target.value
                });
                this.debounced(e.target.value);
            }}></textarea>
            <div dangerouslySetInnerHTML={ {__html: this.state.markedStr } }></div>
            </div>
        );
    }
});

export default App;
