        import { Component } from "react";

        // import {graphql} from 'react-apollo';
        // import {flowRight as compose} from 'lodash';
        // import {getAuthorsQuery,addBookMutation,getBooksQuery} from '../Queries/queries';



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

        //    displayAuthors(){
        //        var data = this.props.getAuthorsQuery;
        //        console.log(this.props);
        //        if(data.loading){
        //            return(<option disabled>Loading authors...</option>);


        //        }else{
        //            return data.authors.map(author => {
        //                return(<option key={author.id} value={author.id}>{author.name}</option>);
        //            })
        //        }
        //    }

        // //button event
        // submitForm(e){
        //     e.preventDefault();
                // this.props.addBookMutation({
                //     variables:{
                //         name:this.state.name,
                //         genre: this.state.genre,
                //         author: this.state.author
                //     },
                //     refetchQueries:[{query:getBooksQuery}]
                // });

        // }

        changeHandler =  e => {
            this.setState({[e.target.name]:e.target.value})
        }

        submitHandler = e =>{
            e.preventDefault();
            console.log(this.state);
        }


        render(){
                const { name , genre, author } = this.state;
                return(<div>
                    <form onSubmit={this.submitHandler} id="add-book" >

                        <div className="field">
                            <label>Book name:</label>
                            <input type="text" name="name"
                             onChange={(e)=>this.setState({name:e.target.value})}
                             value={name}></input>
                        </div>

                        <div className="field">
                            <label>Genre:</label>
                            <input type="text" id="email" 
                            onChange={(e)=>this.setState({genre:e.target.value})}
                            value={genre}></input>
                        </div>

                        <div className="field">
                            <label>Author:</label>
                            <input type="text" id="author" 
                            onChange={(e)=>this.setState({author:e.target.value})}                                
                             value={author}></input>
                        </div>

                        {/* <div className="field">
                            <label>Author</label>onSubmit={this.submitForm.bind(this)}
                        <select onChange={(e)=>this.setState({authorId:e.target.value})}><option>Select authors:</option>
                        {this.displayAuthors()}</select>
                        </div> */}
                        <button>+</button>
                    </form>
                    </div>    );
            }

        }
    // }
// }
export default (AddBook); 






/*compose(
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
)*/