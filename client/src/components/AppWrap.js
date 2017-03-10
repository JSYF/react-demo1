import React from 'react';
import CommentForm from "./CommentForm";
import CommentList from './CommentList';
import '../css/style.less';
class AppWrap extends React.Component {
    state = {
        data: []
    }
    loadDataFromServer() {
        fetch('http://localhost:1234/data/getData', {
                mode: 'cors',
                cache: "no-cache"
            })
            .then(function(result) {
                if (result.ok) {
                    return result.json()
                }
            })
            .then(function(data) {
                this.setState({
                    data: data
                })
            }.bind(this))
            .catch(function(e) {
                console.log(e)
            })
    }
    onChildSumbit(data) {
        fetch('http://localhost:1234/data/postData', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                 cache: "no-cache"
            })
            .then(function(result) {
                if (result.ok) {
                    return result.json()
                }
            })
            .then(function(result) {
                this.setState({
                    data: result
                })
            }.bind(this))
            .catch(function(e) {
                console.log(e)
            })
    }
    componentDidMount() {
        this.loadDataFromServer();
        setInterval(this.loadDataFromServer.bind(this), 2000);
    }

    render() {
        return (
            <div className='commentBox'>
        <CommentList data = {this.state.data}/>
        <CommentForm onChildSumbit = {this.onChildSumbit.bind(this)}/>
        </div>

        );
    }
}
export default AppWrap