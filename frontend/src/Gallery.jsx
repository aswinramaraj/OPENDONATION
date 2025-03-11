import React,{forwardRef} from 'react';
import './Gallery.css'; // Optional: Add styling for the Gallery component

const Gallery = forwardRef((props,ref) => {
  return (
    <div className="gallery-container" ref={ref}>
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <img src="https://th.bing.com/th?id=OIP.aakSFB-MkMdg9oyDpNEYhAHaFY&w=293&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Gallery Image 1" />
        <img src="https://th.bing.com/th?id=OIP.W23-lkZc6Y7se-1UI5BXYQHaGr&w=263&h=237&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Gallery Image 2" />
        <img src="https://th.bing.com/th?id=OIP.joffqlB-gXi8HnU6irw0WQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Gallery Image 3" />
        <img src="https://th.bing.com/th?id=OIP.3OxX3GAWivpV82-0G-xx9QHaDj&w=350&h=168&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Gallery Image 4" />
      </div>
    </div>
  );
});

export default Gallery;