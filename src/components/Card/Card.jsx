import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { data } from 'autoprefixer';
import { addToLs, getStoreItem,removecartItem} from "../../Uitilitis/LocalStorage";

const Card = () => {
    const [cards ,setCards]=useState([]);
    const [item,setItem]=useState([])
    useEffect(()=>{
        fetch('./product.json')
        .then(res => res.json())
        .then(data=>setCards(data))
    },[])

    useEffect(()=>{
      if (cards.length>0) {
        const storedItem = getStoreItem();
        const savedCart = [];
        for (const id of storedItem) {
          console.log(id);
          const findcard = cards.find(card =>card.id===id)
          if (findcard) {
              savedCart.push(findcard);
          }
      }
      setItem(savedCart)
      }
    },[cards])

    const handleBuyNow =product=>{
        const newItem =[...item,product]
       
        setItem(newItem)
        addToLs(product.id)
    }

    const removetoLs =id=>{
      // console.log('removed');
      const reaming =[];
      setItem(reaming)
      removecartItem(id)
    }
    // console.log(item);


    return (
        <div>
            <Header item={item} removetoLs={removetoLs} ></Header>
            <h1 className='mt-10 text-2xl font-bold'>All Products:{cards.length}</h1>
            <div className='grid grid-cols-3 gap-4 mt-10 ml-14'>
                {
                    cards.map(card=><div key={card.id}>
                                <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={card.product_img} alt="Shoes" className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{card.product_title}</h2>
    <p>{card.product_description}</p>
    <div className="card-actions items-center">
      <button onClick={()=>handleBuyNow(card)} className="btn btn-primary">Buy Now</button>
      <h1 className='text-2xl'>Price: {card.price}</h1>
    </div>
  </div>
</div>
                    </div>)

                }
    
            </div>
        </div>
    );
};

export default Card;