import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./Spinner";

const CharacterImg = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  const onLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="img-wrap" ref={ref}>
      {inView && (
        <img
          src={src}
          style={{ opacity: isLoading ? 0 : 1, transition: "1s ease" }}
          onLoad={onLoad}
          alt={alt}
        />
      )}

      {isLoading && inView && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            position: "absolute",
            top: 0,
            left: 0
          }}
        >
          <Spinner width={50} />
        </div>
      )}
    </div>
  );
};

export default CharacterImg;
