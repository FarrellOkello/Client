import React,{Component} from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';


function App() {
  return (
              <div id="main">
                <h1>My reading  List</h1>
                <BookList/>
                <AddBook/>
                {/* <BookDetails/> */}
              </div>
  );
}

export default App;
