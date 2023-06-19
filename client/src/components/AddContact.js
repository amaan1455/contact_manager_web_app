import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const initialState={
    name:"",
    email:"",
    contact:""
};
const AddContact=()=>{
    const [state,setState] = useState(initialState);
    const {name,email,contact} = state;
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/select/${id}`).then((resp)=>{setState({...resp.data})});

    },[]);
   
    const handlechange = (e)=>{
        
        const {name,value} = e.target;
        setState({...state,[name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name==="" || email==="" || contact===""){
            alert("enter contact");
            return;
        }
      if(!id)
        {
            axios.post("http://localhost:8080/api/add",{name,email,contact})   
                .then(()=>{
                  
                    setState({name:"",email:"",contact:""});
                })
                .catch((err)=>{
                    alert("Error");
                    
                });
        }else{
            axios.put(`http://localhost:8080/api/update/${id}`,{name,email,contact})
                .then(()=>{ setState({name:"",email:"",contact:""});
                        })
                .catch((err)=>{
                    alert("Error");
                    
                });
        }
        setTimeout(()=>{window.location.href="/"},500);
        
        

        }
return(
        <div className="card addContact">
            <form onSubmit={handleSubmit}>
                <h3 className="heading">Add Contact</h3>
                <div className="mb-3 forminput">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" 
                    placeholder="name"
                    value ={name || ""}
                    onChange={handlechange} 
                    />
                </div>
                <div className="mb-3 forminput">
                    <label for="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email"
                    value ={email || ""}
                    onChange={handlechange}
                     placeholder="name@email.com" />
                </div>  
                <div className="mb-3 forminput">
                    <label for="contact" className="form-label">Contact</label>
                    <input type="text" className="form-control" name="contact"
                    value ={contact || ""}
                    onChange={handlechange}
                     placeholder="11111 11111" />
                </div>  
                <input type="submit" className="forminput btn btn-outline-dark" value={id?"Update":"Add"}/>
            </form>
        </div>
); 
    }


export default AddContact;