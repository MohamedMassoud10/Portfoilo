import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  const hasLiveUrl = Boolean(liveUrl);
  const hasGithub = Boolean(github);
  const hasGallery = Array.isArray(galleryImages) && galleryImages.length > 0;

  return (
    <div className={classes.portfolio__item}>
      <div className={classes.item}>
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={classes.portfolio__keyword} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={classes.portfolio__img}>
        <Image alt={`${title} preview`} src={img} width="380" height="207" />
      </div>

      <div className={classes.portfolio__live}>
        {hasLiveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className={classes.main__btn}
          >
            Launch
          </Link>
        )}
        {hasGithub && (
          <Link
            href={github}
            target="_blank"
            rel="noreferrer"
            className={classes.main__btn}
          >
            Repo
          </Link>
        )}
        {hasGallery && (
          <button
            type="button"
            className={classes.main__btn}
            onClick={() => setIsGalleryOpen(true)}
          >
            View Images
          </button>
        )}
      </div>

      {hasGallery && (
        <ProjectGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={galleryImages}
          title={title}
          description={description}
        />
      )}
    </div>
  );
}
