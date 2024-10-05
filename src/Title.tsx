import { HTMLProps, PropsWithChildren, PropsWithoutRef } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useSelector } from "react-redux";

const Title = (props: PropsWithChildren) => {
  const isShowText = useSelector((state: any) => state.showText);

  return (
    <h1 className={`size-${isShowText ? 'lg' : 'sm'}`}>
      { props.children }
    </h1>
  );
}
