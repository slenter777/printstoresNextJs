import React from "react";
import { CustomTitle, TitleProps } from "./styles";

interface IProps extends Partial<TitleProps> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  fontSize?: number;
  className?: string;
}

const Title: React.FC<IProps> = ({ level = "h1", color, fontSize, className, children, ...rest }) => {
  let titleSize;

  switch (level) {
    case "h1": {
      titleSize = 24;
      break;
    }
    case "h2": {
      titleSize = 20;
      break;
    }
    case "h3": {
      titleSize = 18;
      break;
    }
    case "h4": {
      titleSize = 16;
      break;
    }
    case "h5": {
      titleSize = 15;
      break;
    }
    case "h6": {
      titleSize = 14;
      break;
    }
    default: {
      titleSize = 14;
    }
  }

  return (
    <CustomTitle className={className} as={level || "h1"} color={color} fontSize={fontSize ?? titleSize} {...rest}>
      {children}
    </CustomTitle>
  );
};

export default Title;
