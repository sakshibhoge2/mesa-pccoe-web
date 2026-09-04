import {
  Image as ImageIcon,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";


type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
};


function MediaSlot({
  src,
  alt,
  label = "ADD PHOTO",
  className = "",
}: Props) {

  const [
    failed,
    setFailed,
  ] = useState(false);


  /* RESET ERROR WHEN IMAGE CHANGES */

  useEffect(() => {
    setFailed(false);
  }, [src]);


  return (
    <div
      className={`media-slot ${className}`}
    >

      {!failed ? (

        <img
          src={src}
          alt={alt}
          onError={() =>
            setFailed(true)
          }
        />

      ) : (

        <div className="media-placeholder">

          <ImageIcon
            size={26}
            strokeWidth={1.25}
          />

          <span>
            {label}
          </span>

        </div>

      )}

    </div>
  );
}


export default MediaSlot;