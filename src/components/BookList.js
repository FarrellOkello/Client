import { Component } from "react";
// import {graphql} from 'react-apollo';
// import  {getBooksQuery} from '../Queries/queries';
// import BookDetails from "./BookDetails";



class BookList extends Component{
    constructor(){
        super();
        this.state = {
            selected:null,
             data:[]
        }
     
    }

    componentDidMount(){
        fetch('items')
        .then(res => res.json())
        .then(data => this.setState({data},()=>console.log('Books fetched..',data)));      

    }

     // displayBooks(){
        // var data = this.props.data;
        // if(data.loading){
        //     return(<div>Loading Books.........</div>);
        // }else{
        //     return data.books.map(book =>{
        //         return(
        //             <li key={book.id} 
                    
        //             onClick={(e)=>{this.setState({selected:book.id})}}>{book.name}</li>
            //     )
            // })
    //     }
    // }
    render(){    
        return(
            <div>
            {/* <div> */}
      {/* <h1>My reading list</h1> */}
      <ul id="book-list">
      {this.state.data.map(book => 
      <li key={book.id} onClick={(e)=>{this.setState({selected:book.id})}}>
      {book.name}      
      </li>)
      }
      
      </ul>
    {/* </div> */}{/* <ul id="book-list"><li>{this.displayBooks()}</li></ul><BookDetails bookId={this.state.selected}/> */}
                
            </div>
            
        );
        
    }

}
export default (BookList);


/* graphql(getBooksQuery,{
            options:(props)=>{
                return{
                    variables:{
                        id:props.bookId
                    }
                }
            }
        }
            )*/