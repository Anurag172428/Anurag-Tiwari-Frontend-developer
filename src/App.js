import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`https://a5theory.com/spacex`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item.status,item.original_launch,item.type).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
                    <div  class="spacexhead">
                    <h1 class='banhead'>Spacex Capsule</h1>
</div>
<div class='container'><div class='row'>
            <Input icon='search'
                placeholder='Search Your Capsule...'
                onChange={(e) => searchItems(e.target.value)}
            /></div></div>
            <Card.Group itemsPerRow={5} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                          
                            <Card classname='card'>
                                <div class='container'><div class='row'>
                            <div class='col'>
                                <Card.Content>
                                    <Card.Header style={{ fontSize: "20px", fontFamily: 'Montserrat'}}>capsule-serial:{item.capsule_serial}</Card.Header>
                                    <Card.Description><strong>Capsule-Id:</strong>{item.capsule_id} </Card.Description>
                                    <Card.Description><strong>Status:</strong>{item.status} </Card.Description>
                                    <Card.Description><strong>Original-Launch:</strong>{item.original_launch} </Card.Description>
                                    <Card.Description><strong>Original-Launch-Unix:</strong>{item.original_launch_unix} </Card.Description>
                                    <Card.Description><strong>Landings:</strong>{item.landings} </Card.Description>
                                    <Card.Description><strong>Type:</strong>{item.type} </Card.Description>
                                    <Card.Description><strong>Details:</strong>{item.details} </Card.Description>
                                    <Card.Description><strong>Reuse-Count:</strong>{item.reuse_count} </Card.Description>

                                                                    </Card.Content>
                                                                    </div></div></div>
                                
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item, _capsule_serial) => {

                        return (                     
   
                            <Card classname='card' key={item._capsule_serial}><div class='container'><div class='row'>
                            <div class='col'>
                                    
                                <Card.Content>
                                    <Card.Header style={{ fontSize: "20px", fontFamily: 'Montserrat'}}>capsule-serial:{item.capsule_serial}</Card.Header>
                                    <Card.Description><strong>Capsule-Id:</strong>{item.capsule_id} </Card.Description>
                                    <Card.Description><strong>Status:</strong>{item.status} </Card.Description>
                                    <Card.Description><strong>Original-Launch:</strong>{item.original_launch} </Card.Description>
                                    <Card.Description><strong>Original-Launch-Unix:</strong>{item.original_launch_unix} </Card.Description>
                                    <Card.Description><strong>Landings:</strong>{item.landings} </Card.Description>
                                    <Card.Description><strong>Type:</strong>{item.type} </Card.Description>
                                    <Card.Description><strong>Details:</strong>{item.details} </Card.Description>
                                    <Card.Description><strong>Reuse-Count:</strong>{item.reuse_count} </Card.Description>
                                                                    </Card.Content>
                                
                                                                    </div></div></div>
                            </Card>
                            
                            
                            
                        )
                    })
                )}
            </Card.Group>
        </div>
    )
    
}
