import '../App.css';

import React, { useState, useEffect } from 'react';

function PetForm({ addPet, editPet, petToEdit, clearEdit }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (petToEdit) {
      setName(petToEdit.name);
      setType(petToEdit.type);
      setDesc(petToEdit.desc);
    } else {
      setName('');
      setType('');
      setDesc('');
    }
  }, [petToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !desc) return;
    const newPet = {
      id: petToEdit ? petToEdit.id : Date.now(),
      name,
      type,
      desc,
    };

    if (petToEdit) {
      editPet(newPet);
    } else {
      addPet(newPet);
    }

    setName('');
    setType('');
    setDesc('');
  };

  return (
    
    <form onSubmit={handleSubmit} className="form">
      <h3>{petToEdit ? 'Edit Pet' : 'Add New Pet'}</h3>
      <input
        type="text"
        placeholder="Pet Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Pet Type (Dog, Cat, Bird...)"
        value={type}
        onChange={e => setType(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <button type="submit" className='addPet'>{petToEdit ? 'Update Pet' : 'Add Pet'}</button>
      {petToEdit && <button type="button" onClick={clearEdit}>Cancel</button>}
    </form>
  );
}

export default PetForm;
