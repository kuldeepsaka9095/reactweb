import React, { useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';
import axios, { Axios } from 'axios'
import Loader from './Loader';

const PageContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const column = [
    {
      name: "ID",
      selector : (row: { id: any; }) => row.id,
      sortable : true
    },
    {
      name: "Name",
      selector : (row: { name: any; }) => row.name,
      sortable : true
    },
    {
      name: "Email",
      selector : (row: { email: any; }) => row.email,
      sortable : true
    },
    {
      name: "Address",
      selector : (row: { address: { city: any; }; }) => row.address.city,
      sortable : true
    },

  ]
  

  const fetchInfo = async() => {
      return axios.get(url)
          .then((res) => setUsers(res.data))
          .catch(err => console.log(err));
          
      }
      
      
      useEffect ( () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        fetchInfo();
      }, 
  []);
  if (isLoading) {

    return <Loader />;

  }

  return (
    <div className="container px-4 py-5">
     
       <DataTable
       columns ={column}
       data={users}
       pagination
       selectableRows
       ></DataTable>

  </div>
  )
}

export default PageContent