import MainHeader from "../components/mainHeader";
import GallerySection from "../sections/GallerySection/gallerySection";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import Preloader from "../components/preloader";
const Gallery = () => {
  const gallery = "GALLERY";
  const ourGallery = "OUR GALLERY";
  return (
    <>
      <Preloader />
      <MainHeader props1={gallery} props2={ourGallery} />
      <GallerySection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Gallery;
