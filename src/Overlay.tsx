import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowText } from "./store/layoutSlice";


const Overlay = (props: PropsWithChildren) => {
  const domRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        dispatch(setShowText(!entry.isIntersecting));
      });
    });

    const { current } = domRef;
    if (!current) {
      return;
    }

    observer.observe(current)
    return () => observer.unobserve(current)
  }, [dispatch]);

  return (
        <div className="overlay" ref={domRef}>
          { props.children }
        </div>
    )
}

export default Overlay;
