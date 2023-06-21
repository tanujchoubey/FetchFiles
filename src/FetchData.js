import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';  
import {Table } from 'react-bootstrap';

function FetchData() {
    const [data, setData] = useState([]);
    useEffect(() =>{
        async function getdata(){
            const res = await axios.get('https://dummyjson.com/users')
            console.log(res.data.users)
            setData(res.data.users)
        }
        getdata();
    }, [])
  return (
    <div className='p-5'>
        <div>
            <h3>Fetching the data using axios</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>MaidenName</th>
                    <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((users,index) =>{
                            return <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.firstName}</td>
                                <td>{users.lastName}</td>
                                <td>{users.maidenName}</td>
                                <td>{users.age}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default FetchData