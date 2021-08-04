import React, {Component} from 'react';
import axios from 'axios';
import RecordList from './RecordList';

export default class View extends Component{
    constructor(props){
        super(props);
        this.state={user:[]};
    }
    componentDidMount(){
        axios.get('http://localhost/Trainee-Associate-Assignment-master/bizlogic/view.php')
        .then(response=>{
            this.setState({user:response.data});
        })
        .catch(function (error){
            console.log(error);
        })
    }
    userList(){
        return this.state.user.map(function(object, i){
            return <RecordList obj={object} key={i}/>
        });
    }
    render(){
        return(
            <div>
                <h3 align="center">Movie List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            </tr>
                        
                       
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        );
    }
}