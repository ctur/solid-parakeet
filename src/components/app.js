import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}


// function loadExternalContent() {
//   return new Promise((resolve, reject) => {
//     console.log('wait meh');
//     setTimeout(() => {
//       resolve('hello');
//     }, 2000);
//   });
// }

// //ES2017 Async functions
// async function getContent(params) {
//   console.log('in function');
//   const text = await loadExternalContent();
//   console.log(text);
// }

// console.log('it will call function');
// getContent();
// console.log('it called function');



