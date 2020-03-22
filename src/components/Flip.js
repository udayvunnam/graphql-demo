import React from "react";
import { useSpring, animated } from "react-spring";

export default function Flip({ flipped, flip, Front, Back }) {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div onClick={() => flip(state => !state)} className="Flip_wrapper">
      <animated.div
        className="Flip front"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <Front />
        <div className="Flip__overlay" />
      </animated.div>
      <animated.div
        className="Flip back"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        <Back />
      </animated.div>
    </div>
  );
}
