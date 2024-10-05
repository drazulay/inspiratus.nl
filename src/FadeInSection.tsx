import { useEffect, useRef, useState } from "react";
import { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowText } from "./store/layoutSlice";

const FadeInSection = (props: PropsWithChildren) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
      });
    });

    const { current } = domRef;
    if (!current) {
      return;
    }

    observer.observe(current)
    return () => observer.unobserve(current)
  }, []);

  return (
    <div className={`fade-in-section box-shadow ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      { props.children }
    </div>
  );
}

export default FadeInSection;
