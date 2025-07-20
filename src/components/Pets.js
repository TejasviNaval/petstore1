// import React from 'react';
import React, { useState } from 'react';
import PetForm from './PetForm';
import PetList from './PetList';
import '../App.css';
import indianDog from '../images/indiandog.jpeg';
import persianDog from '../images/persiandog.jpeg';
import indianCat from '../images/indiancat.jpeg';
import persianCat from '../images/persiancat.jpeg';
import persianGreyCat from '../images/persiangreycat.jpeg';
import greenParrot from '../images/greenparrot.jpeg';
import whitePigeon from '../images/whitepigeon.jpeg';
import colorfullParrot from '../images/colorfullparrot.jpeg';
import colorfulSparrow from '../images/colorfulsparrow.jpeg'; 
import catFish from '../images/catfish.jpeg';
import goldFish from '../images/goldfish.jpeg';

function Pets() {
  const [pets, setPets] = useState([]);
  const [petToEdit, setPetToEdit] = useState(null);

  

  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  const editPet = (updatedPet) => {
    setPets(pets.map(pet => pet.id === updatedPet.id ? updatedPet : pet));
    setPetToEdit(null);
  };

  const deletePet = (id) => {
    setPets(pets.filter(pet => pet.id !== id));
  };

  const clearEdit = () => {
    setPetToEdit(null);
  };
  return (
    <section className="pets" id="pets">

<h2 className="heading">Manage <span>Pets</span></h2>

<div className="pets-container">
        {[
          { src: indianDog, title: "Indian Dog" },
          { src: persianDog, title: "Persian Dog" },
          { src: indianCat, title: "Indian Cat" },
          { src: persianCat, title: "Persian Cat" },
          { src: persianGreyCat,title:"Grey Cat" },
        ].map((pet, index) => (
          <div className="pets-content" key={index}>
            <img src={pet.src} alt={pet.title} />
            <div className="pets-layer">
              <h4>{pet.title}</h4>
              <p>Beautiful, healthy, and ready to join your family.</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="heading">Birds for <span>You</span></h2>
      <div className="pets-container">
        {[
          { src: greenParrot, title: "Parrot" },
          { src: whitePigeon, title: "Pigeon" },
          { src: colorfullParrot, title: "Colorful Parrot" },
          { src: colorfulSparrow, title: "Sparrow" },

        ].map((bird, index) => (
          <div className="pets-content" key={index}>
            <img src={bird.src} alt={bird.title} />
            <div className="pets-layer">
              <h4>{bird.title}</h4>
              <p>Healthy and friendly birds for your home.</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="heading">Fish for <span>You</span></h2>
      <div className="pets-container">
        {[
          { src: catFish, title: "Cat Fish" },
          { src: goldFish, title: "Gold Fish" },
        ].map((fish, index) => (
          <div className="pets-content" key={index}>
            <img src={fish.src} alt={fish.title} />
            <div className="pets-layer">
              <h4>{fish.title}</h4>
              <p>Brighten your aquarium with our healthy fish.</p>
            </div>
          </div>
        ))}
      </div>
      
      <PetForm
        addPet={addPet}
        editPet={editPet}
        petToEdit={petToEdit}
        clearEdit={clearEdit}
      />
      <PetList
        pets={pets}
        onEdit={setPetToEdit}
        onDelete={deletePet}
      />     
         </section>
  );
}

export default Pets;
