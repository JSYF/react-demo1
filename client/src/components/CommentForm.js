import React,{Component} from "react";
class CommentForm extends Component{
    state = {
        author:"",
        text:""
    }
    handleAuthorChange(e){
        this.setState({author:e.target.value});
    }
    handleTextChange(e){
        this.setState({text:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.author.trim();
        if(!author || !text){
            return;
        }
        this.props.onChildSumbit({author:author,text:text})
        this.setState({author:'',text:""})
    }
    render(){
        return (
            <form className='commentForm' onSubmit ={this.handleSubmit.bind(this)}>
                <input type='text' placeholder='YourName' value={this.state.author} onChange={this.handleAuthorChange.bind(this)}></input>
                <input type='text' placeholder='Say something' value={this.state.text} onChange={this.handleTextChange.bind(this)}></input>
                <input type='submit' value='post' />
            </form>
            )
    }
}
export default CommentForm;