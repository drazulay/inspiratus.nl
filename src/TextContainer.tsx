import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

const TextContainer = ({ ...props }) => {
  return (
    <div className={`container text-container ${props.show ? '' : 'is-shrunk'}`}>
      { props.children }
    </div>
  )
}

export default TextContainer;
