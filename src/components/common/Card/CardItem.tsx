import React, { useState } from "react";
import { CardBody, CardFooter, CardImage, CardTitle, CardWrapper, CartIcon, OldPrice, Price } from "./styled";
import { IProduct } from "../../../types/product/products.gallery.interface";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface IProps {
  goLocation: () => void;
}

const CardItem: React.FC<IProduct & IProps> = ({ name, price, oldPrice, image, goLocation, ...rest }) => {
  const [hovered, setHovered] = useState(false);

  const onHovered = () => {
    setHovered(true);
  };

  const noHovered = () => {
    setHovered(false);
  };
  return (
    <CardWrapper onMouseMove={onHovered} onMouseLeave={noHovered} onClick={goLocation}>
      <CardBody>
        <CardImage src={image} />
        {hovered && (
          <CartIcon>
            <ShoppingCartOutlined />
          </CartIcon>
        )}
      </CardBody>
      <CardFooter>
        <CardTitle>{name}</CardTitle>
        <Price>{price}</Price>
        <OldPrice>{oldPrice}</OldPrice>
      </CardFooter>
    </CardWrapper>
  );
};

export default CardItem;
