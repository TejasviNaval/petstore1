import React from 'react';
import '../App.css';


function PetList({ pets, onEdit, onDelete }) {
  return (
    <div>
      <h3>Pet List</h3>
      {pets.length === 0 ? (
        <p>No pets added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
          
      {pets.map(pet => (
    <tr key={pet.id}>
      <td data-label="Name">{pet.name}</td>
      <td data-label="Type">{pet.type}</td>
      <td data-label="Description">{pet.desc}</td>
      <td data-label="Action">{pet.act} 
        
        <button onClick={() => onEdit(pet)}>Edit</button>
        <button onClick={() => onDelete(pet.id)}>Delete</button>
      </td>
    </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PetList;
