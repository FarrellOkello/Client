import { Component } from "react";


class BookList extends Component{
    constructor(){
        super();
        this.state = {
            title:' My bookstore application',
            selected:null,
            books: []
          }
    }

    componentDidMount(){
       console.log('Component has mounted the postgres data source')
        var that = this;
        fetch('http://127.0.0.1:4000/api/books')
        .then(function(response){
          response.json()
          .then(function(data){
            console.log(data);
          let books = that.state.books;
          books.concat(data);
          that.setState({
            books:data
          })
          })
        })
    }


    render(){   
        // let title = this.state.title;
        let books = this.state.books;

        return(
            <div>
        
      <ul id="book-list">
      {books.map(book => 
      <li key={book.id} onClick={(e)=>{this.setState({selected:book.id})}}>
      {book.name}      
      </li>)
      }      
      </ul>             
      </div>
            
        );
        
    }

}
export default (BookList);