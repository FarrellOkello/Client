import { Component } from "react";


class BookDetails extends Component{    

 getBook(id,e){
    var that = this;
    e.preventDefault();
    console.log(this);
    let books = this.state.books;
    let book = books.find(function(book){
      return book.id === id;
    })
    console.log(book);
    var request = new Request('http://127.0.0.1:4000/api/get/' +id,
     {method: 'GET'});

    fetch(request)
    .then(function(response){
      that.setState({
        book: book
      })
      response.json()
      .then(function(data){
        console.log(data)
      })
    })
  }

    //the display books function     
        displayBookDetails(){
            // const {book} = this.state.data; 
            let book = this.state.book;     
        // if(book){
            return(
            <div>
            {/* {books.map(book => book.name,book.genre,book.author)} */}
                <h2>{book.name}</h2>
                <p>{book.genre}</p>
                <p>{book.author}</p>) */}
                {/* <p>All books by the author</p>
                {/* <ul className="other-books">
                    {book.author.books.map(item=>{return <li key={item.id}>{item.name}</li>})}
                </ul> */}
            </div>)
    
        }        

render(){
console.log(this.props.data);
        return(
        <div id="book-details">
        {this.displayBookDetails()}                
      </div>
        );
    }

}
export default (BookDetails);
