import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';

function loadExternalContent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 2000);
  });
}

async function getContent(params) {
  const text = await loadExternalContent();
  console.log(text);
}

console.log('it will call function');
getContent();
console.log('it called function');



export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
