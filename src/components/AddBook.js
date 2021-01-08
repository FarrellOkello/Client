        import { Component } from "react";



        class AddBook extends Component{
           
            constructor(props){
                super(props)                
                this.state={
                    name:'',
                    genre:'',
                    author:''
                };
                // console.log(this.state);
            }



            componentDidMount(){             
                fetch('items', {
                    method: 'POST',
                    headers : {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },                       
                    body:JSON.stringify(this.state)
                }).then((res) => res.json())
                .then((data) =>  console.log(data))
                .catch((err)=>console.log(err))

            }

            addBook(e){
                var that = this;
                e.preventDefault();
                console.log('You have clicked on addBook')
                let book_data ={
                  name: this.refs.name.value,
                  genre: this.refs.genre.value,
                  author: this.refs.author.value
                } 
                var request = new Request(
                  'http://127.0.0.1:4000/api/new-book',{
                    method:'POST',
                    headers: new Headers({'Content-Type':'application/json'}),
                    body: JSON.stringify(book_data)
                  });
    
    
             // xmlhttprequest
             console.log(this.state.books);
             fetch(request)
                  .then(function(response){
                    response.json() 
                    .then(function(data){
                      console.log(data);
                  let books = that.state.books;
                      books.push(book_data);
                  console.log(books);
                  that.setState({
                    books:books
                  })
                    })
                  });
    
              }
    



        render(){
                const { name , genre, author } = this.state;
                return(<div>
                    <form ref="add-book" >

                        <div className="field">
                            <label>Book name:</label>
                            <input type="text" ref="name"
                             onChange={(e)=>this.setState({name:e.target.value})}
                             value={name}></input>
                        </div>

                        <div className="field">
                            <label>Genre:</label>
                            <input type="text" ref="genre" 
                            onChange={(e)=>this.setState({genre:e.target.value})}
                            value={genre}></input>
                        </div>

                        <div className="field">
                            <label>Author:</label>
                            <input type="text" ref="author" 
                            onChange={(e)=>this.setState({author:e.target.value})}                                
                             value={author}></input>
                        </div>

                        {<button onClick={this.addBook.bind(this)}>+ Book</button>}
                    </form>
                    </div> );
            }

        }
    
export default (AddBook); 