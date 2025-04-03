import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./styles.css";

const App = () => { const [customers, setCustomers] = useState([ 
  { id: 1, name: "John Doe", email: "john@example.com" }, 
  { id: 2, name: "Jane Smith", email: "jane@example.com" } ]); const [form, setForm] = useState({ id: null, name: "", email: "" });

const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

const handleSubmit = (e) => { e.preventDefault(); 
  if (form.id) { setCustomers(customers.map(c => (c.id === form.id ? form : c))); } 
  else { setCustomers([...customers, { ...form, id: Date.now() }]); } setForm({ id: null, name: "", email: "" }); };

const handleEdit = (customer) => { setForm(customer); };

const handleDelete = (id) => { setCustomers(customers.filter(c => c.id !== id)); };

return ( <div className="container"> <h1>Customer Management</h1> 
<form onSubmit={handleSubmit} className="form-container"> 
<input
type="text"
name="name"
placeholder="Name"
value={form.name}
onChange={handleChange}
className="input-field"
required
/> <input
type="email"
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
className="input-field"
required
/> <button type="submit" className="submit-button"> 
  {form.id ? "Update" : "Add"} Customer </button> </form> 
  <div className="customer-list"> 
  {customers.map((customer) => ( <div key={customer.id} className="customer-card"> 
  <div> <p className="customer-name">{customer.name}</p> 
  <p className="customer-email">{customer.email}</p> 
  </div> 
  <div className="action-buttons"> <button onClick={() => handleEdit(customer)} className="edit-button"><FaEdit /></button> 
  <button onClick={() => handleDelete(customer.id)} className="delete-button"><FaTrash /></button> 
  </div> </div> ))} </div> </div> ); };

export default App;
