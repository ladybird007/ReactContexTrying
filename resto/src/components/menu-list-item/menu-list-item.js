import React from 'react';
import { FaPizzaSlice, FaCarrot, FaDrumstickBite } from "react-icons/fa";
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCard}) => {
	const {title, price, url, category} = menuItem;
  const icons = {
    salads: <FaCarrot />,
    pizza: <FaPizzaSlice />,
    meat: <FaDrumstickBite />
  }
 	return (
		<li className="menu__item">
			<div className="menu__title">{icons[category]} {title}</div>
			<img className="menu__img" src={url} alt={title}></img>
			<div className="menu__category">Category: <span>{category}</span></div>
			<div className="menu__price">Price: <span>{price}$</span></div>
			<button onClick={() => onAddToCard()} className="menu__btn">Add to cart</button>
		</li>
	)
}

export default MenuListItem;