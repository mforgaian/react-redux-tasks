import React from "react";
import {connect } from 'react-redux'

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
    if(props.items){
        return (<tbody>
            <tr>
                <td>{props.items.name}</td>
                <td>{props.items.email}</td>
                <td>{props.items.phone}</td>
                <td>{props.items.gender}</td>
                <td>{props.items.country}</td>
                <td>{props.items.address}</td>
            </tr>
        </tbody>)
    }
    return <tbody></tbody>
}

let Table = ({items}) => (
    <table>
        <TableHeader />
        <TableBody items={items} />
    </table>
)

const mapStateToProps = (state) => ({
    items: state.items
})

export default Table = connect(
    mapStateToProps,
    null
  )(Table)