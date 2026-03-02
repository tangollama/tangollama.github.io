// src/components/ImageGallery.jsx (ASTRO + REACT)
export default function ImageGallery({ images }) {
  // images: [{ src: string, alt: string }]
  return (
    <div className="gallery">
      {images.map((img) => (
        <figure key={img.src} className="gallery-item">
          <img src={img.src} alt={img.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}