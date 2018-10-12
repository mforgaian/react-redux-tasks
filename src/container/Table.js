import React, {Component} from "react";
import './Table.css';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Country</th>
                <th>Address</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.items.map((row, index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>{row.gender}</td>
                <td>{row.country}</td>
                <td>{row.address}</td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
}

export default class Table extends Component{
    render(){
        const {items} = this.props;
        return(
            <table>
                <TableHeader />
                <TableBody items={items} />
            </table>
        );
    }
}