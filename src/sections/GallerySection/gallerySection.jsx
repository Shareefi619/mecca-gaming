import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  full1,
  gallery1,
  full2,
  gallery2,
  full3,
  gallery3,
  full4,
  gallery4,
  full5,
  gallery5,
  full6,
  gallery6,
} from "../../assets/images";

const galleryData = [
  { full: full1, src: gallery1 },
  { full: full2, src: gallery2 },
  { full: full3, src: gallery3 },
  { full: full4, src: gallery4 },
  { full: full5, src: gallery5 },
  { full: full6, src: gallery6 },
];
const GallerySection = () => {
  const [activeGallery, setActiveGallery] = useState("fifa20");
  const [animatedImages, setAnimatedImages] = useState([]);
  const [index, setIndex] = useState(-1);

  const handleGallerySwitch = (galleryType) => {
    setActiveGallery(galleryType);
  };

  useEffect(() => {
    // When the active gallery changes, trigger the animation
    setAnimatedImages([]);
    setIndex(-1);
    setTimeout(() => {
      setAnimatedImages(galleryData);
    }, 10);
  }, [activeGallery]);

  return (
    <>
      {/*================= Gallery Section Start Here =================*/}
      <div className="rts-gallery-section">
        <div className="container">
          <div className="top-wrap">
            <div className="filter-button-group">
              <button
                className={`filter-btn ${
                  activeGallery === "fifa20" ? "active" : ""
                }`}
                data-show=".fifa20"
                onClick={() => handleGallerySwitch("fifa20")}
              >
                FIFA 2023
              </button>
              <button
                className={`filter-btn ${
                  activeGallery === "uefacup" ? "active" : ""
                }`}
                onClick={() => handleGallerySwitch("uefacup")}
              >
                UEFA CUP
              </button>
              <button
                className={`filter-btn ${
                  activeGallery === "warmup" ? "active" : ""
                }`}
                onClick={() => handleGallerySwitch("warmup")}
              >
                WARM-UP
              </button>
              <button
                className={`filter-btn ${
                  activeGallery === "national" ? "active" : ""
                }`}
                onClick={() => handleGallerySwitch("national")}
              >
                National
              </button>
            </div>
          </div>

          <div className="gallery-grid">
            <div className="row">
              {animatedImages.map((item, index) => (
                <div
                  key={index}
                  className={`col-xl-4 col-md-6 ${
                    animatedImages.length === galleryData.length
                      ? "fade-in"
                      : ""
                  }`}
                >
                  <div className="gallery-item">
                    <div
                      className="gallery-image image-popup-vertical-fit"
                      onClick={() => setIndex(index)}
                      title="Football.png"
                    >
                      <img src={item.src} alt="gallery-image" />
                      <button className="pop-btn">
                        <i className="fal fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        slides={animatedImages}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      {/*================= Gallery Section End Here =================*/}
    </>
  );
};

export default GallerySection;
