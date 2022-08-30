import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: "Katty Lopez",
    review: "We are very happy to get this type of project."

  },
  {
    avatar: AVTR2,
    name: "MKG",
    review: "It's looks nice"

  },
  {
    avatar: AVTR3,
    name: "Loren",
    review: "Very good "

  },
  {
    avatar: AVTR4,
    name: "Smith",
    review: "Nice context"

  }


]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className='container testimonials__container'>
        {
          data.map(({avatar, name, review}) => {
            return (
              <article className='testimonial'>
          <div className='clients__avatar'>
            <img src={avatar} ></img> 
          </div>
          <h5 className='clients__name'>{name}</h5>
             <small className='client__review'>
              {review} 
             </small>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Testimonials