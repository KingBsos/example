import React, { useState, useEffect } from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import './App.css';

function App() {
  let [inputValue, setInputValue] = useState('');
  let [tableColumn] = useState(['name', 'power']);
  let [tableData] = useState([
    {
      name: 'kingbsos',
      power: 8000
    },
    {
      name: 'kingbsos2',
      power: 1000
    },
    {
      name: 'kingbsos3',
      power: 3000
    }
  ]);
  return (
    <div className="App">
      <input value={ inputValue } onChange={ (e) => setInputValue(e.target.value) }></input>
      <Table data={ tableData } column={ tableColumn } searchKey={ inputValue }/>
    </div>
  );
}

// function Table({data, column, searchKey}) {
//   let [reverse, setReverse] = useState(false);
//   let [sortBy, setSortBy] = useState(column[0]);
//   let [sortData] = useState(() => {
//     return function(data, sortBy, reverse) {
//           let arr = [...data].sort((a, b) => {
//             if(a[sortBy] < b[sortBy]) return -1;
//             else return 1;
//           });
//           if(reverse) arr.reverse();
//           return arr;
//         }
//   });
//   let [sortedData, setSortedData] = useState(sortData(data, sortBy, reverse));
//   let [filtedData, setFiltedData] = useState(sortedData);
//   let [sortHandle] = useState(() => {
//     return function(v, sortBy) {
//       if(v === sortBy) {
//         setReverse(bool => !bool);
//       } else {
//         setReverse(false);
//         setSortBy(v);
//       }
//     }
//   });
//   useEffect(() => {
//     let arr = sortData(data, sortBy, reverse);
//     setSortedData(arr);
//     setFiltedData(arr);

//   }, [data, sortData, sortBy, reverse]);
//   useEffect(() => {
//     if(searchKey) {
//       setFiltedData((data) => {
//         return data.filter((item) => {
//           let result = `${item.name}${item.power}`.match(RegExp(searchKey, 'g'));
//           return result != null;
//         });
//       });
//     } else {
//       setFiltedData(sortedData);
//     }
//   }, [sortedData, searchKey]);
//   return (
//     <table>
//       <thead>
//         <tr>
//           {
//           column.map((item, index) => (
//               <th key={ index } onClick={ () => sortHandle(item, sortBy) }>
//                 { sortBy === item ? (<span>{ reverse ? '\u21e1' : '\u21e3'}</span>) : null}
//                 { item }
//               </th>
//             )
//           )
//         }
//       </tr>
//       </thead>
//       <tbody>
//         {
//           filtedData.map((item, index) => (<tr key={ index }>
//             {
//               column.map((item2, index2) => (<td key={ index2 }>{ item[item2] }</td>))
//             }
//           </tr>))
//         }
//       </tbody>
//     </table>
//   );
// }
// Table.propTypes = {
//   data: PropTypes.array.isRequired,
//   column: PropTypes.array.isRequired
// }

// class Table extends React.Component {
//   static propTypes = {
//     data: PropTypes.array.isRequired,
//     column: PropTypes.array.isRequired
//   }
//   constructor(props) {
//     super(props);
//     let {data, column} = props;
//     let initSortBy = column[0];
//     let initReverse = false;
//     this.state = {
//       sortBy: initSortBy,
//       reverse: initReverse,
//       sortedData: this.sortData(data, initSortBy, initReverse)
//     }
//     this.sortHandle = this.sortHandle.bind(this);
//   }
//   sortData(data, sortBy, reverse) {
//     let arr = [...data].sort((a, b) => {
//       if(a[sortBy] < b[sortBy]) return -1;
//       else return 1;
//     });
//     if(reverse) arr.reverse();
//     return arr;
//   }
//   sortHandle(v) {
//     let {sortBy, reverse} = this.state;
//     if(v === sortBy) {
//       this.setState(({sortedData, reverse}) => ({
//         reverse: !reverse,
//         sortedData: [...sortedData].reverse()
//       }))
//     } else {
//       this.setState({
//         sortBy: v,
//         reverse: false,
//         sortedData: this.sortData(this.props.data, v, false)
//       })
//     }
//   }
//   render() {
//     let {
//       props: {
//         column
//       },
//       state: {
//         sortedData, reverse, sortBy
//       },
//       sortHandle
//     } = this;
//     return (
//       <table>
//         <thead>
//           <tr>
//             {
//               column.map((item, index) => (
//                   <th key={ index } onClick={ () => sortHandle(item) }>
//                     { sortBy === item ? (<span>{ reverse ? '\u21e1' : '\u21e3'}</span>) : null}
//                     { item }
//                   </th>
//                 )
//               )
//             }
//           </tr>
//           </thead>
//           <tbody>
//             {
//               sortedData.map((item, index) => (<tr key={ index }>
//                 {
//                   column.map((item2, index2) => (<td key={ index2 }>{ item[item2] }</td>))
//                 }
//               </tr>))
//             }
//           </tbody>
//       </table>
//     );
//   }
// }

let Table = createReactClass({
  getInitialState() {
    let {data, column} = this.props;
    let initSortBy = column[0];
    let initReverse = false;
    let initData = this.sortData(data, initSortBy, initReverse);
    return {
      sortBy: initSortBy,
      reverse: initReverse,
      sortedData: initData,
      filtedData: initData
    }
  },
  sortData(data, sortBy, reverse) {
    let arr = [...data].sort((a, b) => {
      if(a[sortBy] < b[sortBy]) return -1;
      else return 1;
    });
    if(reverse) arr.reverse();
    return arr;
  },
  sortHandle(v) {
    let {sortBy, reverse} = this.state;
    if(v === sortBy) {
      this.setState(({sortedData, reverse}) => ({
        reverse: !reverse,
        sortedData: [...sortedData].reverse(),
        filtedData: [...sortedData].reverse()
      }))
    } else {
      this.setState({
        sortBy: v,
        reverse: false,
        sortedData: this.sortData(this.props.data, v, false),
        filtedData: this.sortData(this.props.data, v, false)
      })
    }
  },
  shouldComponentUpdate(props, state) {
    if(this.props.searchKey !== props.searchKey) {
      if(props.searchKey === '') {
        this.setState(state => ({
          filtedData: state.sortedData
        }))
      } else {
        this.setState((state) => {
          return {
            filtedData: state.sortedData.filter((item) => {
              return (item.name+item.power).match(RegExp(props.searchKey, 'g')) !== null;
            })
          }
        });
      }
    }
    return true;
  },
  render() {
    let {
      props: {
        column
      },
      state: {
        filtedData, reverse, sortBy
      },
      sortHandle
    } = this;
    return (
      <table>
        <thead>
          <tr>
            {
              column.map((item, index) => (
                  <th key={ index } onClick={ () => sortHandle(item) }>
                    { sortBy === item ? (<span>{ reverse ? '\u21e1' : '\u21e3'}</span>) : null}
                    { item }
                  </th>
                )
              )
            }
          </tr>
          </thead>
          <tbody>
            {
              filtedData.map((item, index) => (<tr key={ index }>
                {
                  column.map((item2, index2) => (<td key={ index2 }>{ item[item2] }</td>))
                }
              </tr>))
            }
          </tbody>
      </table>
    );
  }
});

export default App;
