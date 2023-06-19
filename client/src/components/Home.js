import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
const Home=()=>{

    const [data,setData] = useState([]);
    const loadData = async ()=>{
        const response = await axios.get("http://localhost:8080/api/select");
        
        setData(response.data);

    }
    useEffect(()=>{
        loadData();
    },[]);
    const deletecontact =(id)=>{
        if(window.confirm("Are you sure you want to delete!")){
            axios.delete(`http://localhost:8080/api/delete/${id}`);
            alert("contact deleted");
            loadData();
        }
    }
    
    const renderContactList = data.map(
        (contact)=>{
            return(
                <Link to={`/view/${contact.id}`}><div className="item">
            <div className="card" style={{margin:10}}>
                <ul className="list-group list-group-flush" key={contact.id}>
                    
                    <li className="list-group-item" style={{background:'#121212',color:'white'}}><strong>Name:</strong> {contact.name}</li>
                    
                    <li className="list-group-item"><strong>Contact:</strong> {contact.contact}</li>
                    <li className="list-group-item">
                        <Link to={`/update/${contact.id}`}><button type="button" style={{marginRight:"5px"}} className="btn btn-outline-dark">Update</button></Link>
                        <Link to={`/view/${contact.id}`}><button type="button" style={{marginRight:"5px"}} className="btn btn-outline-dark">View</button></Link>
                        <button type="button" className="btn btn-outline-danger" onClick={()=>{deletecontact(contact.id)}}>Delete</button></li>
                </ul>
            </div>
        </div></Link>)}
        );
            
    return(
        <div className="card contactList">
            <h3 className="heading">Contact List</h3>
            <Link to={'/add'}><button type="button" style={{marginLeft:'10px'}} className="btn btn-outline-dark">Add Contact</button></Link>
            {renderContactList}
           
       
    </div>
    );
};
export default Home;