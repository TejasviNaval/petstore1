import React from 'react';
import '../App.css';
import bathPro from '../images/bathpro.jpg';
import fishFood from '../images/fishfood.jpg';
import birdCage from '../images/birdcage.jpg';
import fishTank from '../images/fishtank.jpg';
import toys from '../images/toys.jpg';
import catFood from '../images/catfood.jpg';


const cardData = [
  {
    img: catFood,
    title: 'Cat Food',
    description: `Every pet parent wants to spend more time with their beloved cat or dog. 
That's why so many are embracing the convenience of pet food delivery. 
Fewer trips to the pet store means more time to play together with a favorite toy, 
walk some trails or simply curl up on the couch for snuggle time with your furry friend.`
  },
  {
    img: fishFood,
    title: 'Fish Food',
    description: `Every pet parent wants to spend more time with their beloved cat or dog. 
That's why so many are embracing the convenience of pet food delivery. 
Fewer trips to the pet store means more time to play together with a favorite toy, 
walk some trails or simply curl up on the couch for snuggle time with your furry friend.`
  },
  {
    img: bathPro,
    title: 'Bath Products',
    description: `We take care of people taking care of pets.
Exceptional products, quality sharpening and superior clipper and dryer repair services.
Free Shipping · Low Price Guarantee · Buy With Confidence · Mix and Match`
  },
  {
    img: toys,
    title: "Toys",
    description: `Make the most of playtime with dog toys from Chewy.
Discover fetch toys, chew toys, squeaky toys, tug toys and more that were made to help your dog be happy, fit and well trained. *FREE* shipping`
  },
  {
    img: fishTank,
    title: "Fish Tank",
    description: `Discover the Best Glass Options for Your 75 Gallon Fish Tank Today!
Find the Perfect Glass for Your 75 Gallon Fish Tank! Compare Now!
Brands: Aqueon, Marineland, Penn Plax, Tetra, Seapora, Hagen, Cobalt, Fluval`
  },
  {
    img: birdCage,
    title: "Cage",
    description: `Shop for bird cages and stands at Petsmart.com.
Find a variety of sizes, styles and prices for different bird species and needs.`
  }


];

    function Service() {
      
  return (
      <section>
      <h2 className="heading">Our Pet Services</h2>

     <div className="container">

      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="image">
            <img src={card.img} alt={card.title} />
          </div>
          <div className="content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Service;
