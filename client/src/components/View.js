import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import {Link} from "react-router-dom";


const View=()=>{

const [contact,setContact]=useState([]);
const {id} = useParams();
useEffect(()=>{
    axios.get(`http://localhost:8080/api/select/${id}`).then(
    (resp)=>{setContact({...resp.data});
    console.log(contact);
    console.log(resp);}
    );
},[id]);
return(
    
   <div className="card" style={{margin:'3%',marginTop:'100px',width:'94%'}}>
       <ul className="list-group list-group-flush" key={contact.id}>
           
           <li className="list-group-item" style={{background:'#121212',color:'white'}}><strong>Name:</strong> {contact.name}</li>
           <li className="list-group-item"><strong>E-mail:</strong> {contact.email}</li>
           <li className="list-group-item"><strong>Contact:</strong> {contact.contact}</li>
           <li className="list-group-item">
               <Link to={`/update/${contact.id}`}><button type="button" style={{marginRight:"5px"}} className="btn btn-outline-dark">Update</button></Link>
               <Link to={`/`}><button type="button" style={{marginRight:"5px"}} className="btn btn-outline-dark">Back</button></Link></li>
       </ul>
   
</div>);}

export default View; 