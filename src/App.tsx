import React from 'react';
import './styles.css';
import VideoContainer from "./VideoContainer";
import TextContainer from "./TextContainer";
import FadeInSection from "./FadeInSection";
import { useDispatch, useSelector } from "react-redux";
import { setUserHasScrolled } from "./store/layoutSlice";
import Overlay from "./Overlay";

function App() {
  const isShowText = useSelector((state: any) => state.layout.showText);
  const dispatch = useDispatch();

  return (
    <div className="wrapper" onScroll={() => dispatch(setUserHasScrolled(true))}>
      <div className="blocker">
        <VideoContainer />
        <TextContainer show={isShowText}>
          <h1 className={isShowText ? 'title-lg' : 'title-sm'}>{isShowText ? 'inspir@tus.nl' : '@'}</h1>
          <h2 className={isShowText ? 'title-lg' : 'title-sm'}>Web Developers met Visie</h2>
          <div className="chevron" style={{display: isShowText ? 'flex' : 'none'}}/>
        </TextContainer>
      </div>

      <div className="spacer-30"/>

      <Overlay>
        <FadeInSection>
          <h1>Geoptimaliseerde processen jagen de motor aan: onze OTAP-straat is jou een zorg minder.</h1>
          <div className="horizontal-rule"/>
          <div className="image-devops"/>
        </FadeInSection>
        <div className="spacer-15"/>
        <FadeInSection>
          <h1>Two</h1>
        </FadeInSection>
        <div className="spacer-15"/>
        <FadeInSection>
          <h1>Three</h1>
        </FadeInSection>
        <div className="spacer-15"/>
        <div className="footer box-shadow"/>
      </Overlay>
    </div>
  );
}

export default App;
