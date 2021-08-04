import React ,{Component} from 'react';

class RecordList extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.email}
                </td>
            </tr>
        );
    }
}
export default RecordList;