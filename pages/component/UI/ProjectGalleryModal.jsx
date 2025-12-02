import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import classes from "../../../styles/gallery-modal.module.css";

export default function ProjectGalleryModal({
  isOpen = false,
  onClose = () => {},
  images = [],
  title = "",
  description = "",
}) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={classes.backdrop} onClick={handleBackdropClick}>
      <div className={classes.modal} onClick={stopPropagation}>
        <button type="button" className={classes.closeButton} onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className={classes.header}>
          <h5 className={classes.heading}>{title}</h5>
          {description && (
            <p className={classes.description}>{description}</p>
          )}
        </div>
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard
          className={classes.swiper}
        >
          {images.map((imageSrc) => (
            <SwiperSlide key={imageSrc}>
              <div className={classes.imageWrapper}>
                <Image
                  src={imageSrc}
                  alt={`${title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 90vw, 800px"
                  priority={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

