import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import classes from "../../../styles/portfolio-item.module.css";
import ProjectGalleryModal from "./ProjectGalleryModal";

export default function PortfolioItem({
  title = "",
  img = "",
  liveUrl = "",
  keyword = [],
  github = "",
  description = "",
  galleryImages = [],
}) {
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const hasLiveUrl = Boolean(liveUrl);
  const hasGithub = Boolean(github);
  const hasGallery = Array.isArray(galleryImages) && galleryImages.length > 0;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleGalleryOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsGalleryOpen(true);
  };

  return (
    <>
      <div className={classes.portfolio__item}>
      <div className={classes.portfolio__img__wrapper}>
        <div className={classes.portfolio__img}>
          <Image 
            alt={`${title} preview`} 
            src={img} 
            width="380" 
            height="207"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
          />
          <div className={classes.portfolio__overlay}>
            <div className={classes.portfolio__actions}>
              {hasLiveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.action__btn}
                  title="View Live Site"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Link>
              )}
              {hasGithub && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.action__btn}
                  title="View Repository"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </Link>
              )}
              {hasGallery && (
                <button
                  type="button"
                  className={classes.action__btn}
                  onClick={handleGalleryOpen}
                  title="View Gallery"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={classes.portfolio__content}>
        <div className={classes.item}>
          <h6>{title}</h6>
          {description && (
            <p className={classes.portfolio__description}>{description}</p>
          )}
          <div className={classes.portfolio__keywords}>
            {keyword.map((item, index) => (
              <span className={classes.portfolio__keyword} key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={classes.portfolio__live}>
          {hasLiveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className={classes.main__btn}
            >
              <span>Launch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
          )}
          {hasGithub && (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer"
              className={classes.main__btn}
            >
              <span>Code</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
          )}
          {hasGallery && (
            <button
              type="button"
              className={classes.main__btn}
              onClick={handleGalleryOpen}
            >
              <span>Gallery</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </button>
          )}
        </div>
      </div>
      </div>

      {hasGallery && mounted && typeof window !== 'undefined' && createPortal(
        <ProjectGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={galleryImages}
          title={title}
          description={description}
        />,
        document.body
      )}
    </>
  );
}
