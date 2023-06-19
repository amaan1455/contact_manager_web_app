import axios from "axios";
import {Link} from "react-router-dom";

const ContactCard = (input)=>{
    const deletecontact =(id)=>{
        if(window.confirm("Are you sure you want to delete!")){
            axios.delete(`http://localhost:8080/api/delete/${id}`);
            alert("contact deleted");
            window.location.href="/";
        }
    }
    return(
        <div className="item">
            <div className="card" style={{margin:10}}>
                <ul className="list-group list-group-flush" key={input.contact.id}>
                    
                    <li className="list-group-item" style={{background:'#121212',color:'white'}}>Name: {input.contact.name}</li>
                    <li className="list-group-item">E-mail: {input.contact.email}</li>
                    <li className="list-group-item">Contact: {input.contact.contact}</li>
                    <li className="list-group-item">
                        <Link to={`/api/update/${input.contact.id}`}><button type="button" style={{marginRight:"5px"}} className="btn btn-outline-dark">Update</button></Link>
                        <Link to={`/view/${input.contact.id}`}><button type="button" style={{marginRight:"5px"}} className="btn btn-outline-dark">View</button></Link>
                        <button type="button" className="btn btn-outline-danger" onClick={()=>{deletecontact(input.contact.id)}}>Delete</button></li>
                </ul>
            </div>
        </div>
    );

}
export default ContactCard;
