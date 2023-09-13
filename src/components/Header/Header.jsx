import { useEffect, useState } from "react";

const Header = ({item,removetoLs}) => {
  const [total, setTotal]=useState(0)
  useEffect(()=>{
    const total = item.reduce((sum , e) =>parseFloat(e.price?.split('$')[1]) + sum,0);
    console.log(total);
    setTotal(total)
  },[item])
  

  
  console.log(item);
  // const {product_title} = item;
  // console.log(CartsItem);
  return <div>
        <div className="navbar bg-base-300 rounded mt-5">
  <div className="flex-1">
    <a className="ml-4 font-bold cursor-pointer normal-case text-xl">HomeX</a>
  </div>
  <div className="flex-1">
    <ul className="flex gap-4 font-bold ">
        <li className="hover:text-blue-500"><a href="#">Home</a></li>
        <li className="hover:text-blue-500"><a href="#">About</a></li>
        <li className="hover:text-blue-500"><a href="#">Products</a></li>
        <li className="hover:text-blue-500"><a href="#">Contact Us</a></li>
    </ul>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator text-red-500 text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{item.length}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{item.length} Items</span>
          {
            item.map(pd=>
              <div className="flex items-center"><h1 className="flex-1">{pd.product_name}</h1>
              <img className="w-10 flex-1" src={pd.product_img} alt="" />
              </div>
              
            )
          }
          <span className="text-info">Subtotal:{total} $</span>
          <div className="card-actions">
            <button onClick={removetoLs} className="btn btn-primary btn-block">Remove Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLXLsZwHzFsvibAXNmZN8jVjtmCIkl6MpNw&usqp=CAU" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  </div>;
};

export default Header;
