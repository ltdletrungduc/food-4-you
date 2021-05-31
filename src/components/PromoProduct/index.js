import React from "react";
import Button from "../common/Button";

const PromoProduct = ({ product, className }) => {
	return (
		<div className={`promo-product product ${className}`}>
			<img src={product.imgSrc} alt={product.name} className='product__img' />
			<h3 className='product__name'>{product.name}</h3>
			<p className='product__des'>{product.des}</p>
			<Button className='product__order bold-font' pdVer={25} pdHor={40}>
				<span>order now</span>
			</Button>
		</div>
	);
};

export default PromoProduct;
