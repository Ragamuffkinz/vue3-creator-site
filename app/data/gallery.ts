import type { HeroInfo } from "~/types/contentTypes";
import type { AlbumManifest } from "~/types/imageCollectionTypes";

export const heroInfo: HeroInfo = {
    headline: "Browse",
    title: "Gallery",
    description:
        "A collection of stuff I created in Photoshop and Procreate over the years. Click an album to expand. Click an image to see the full size.",
};

// Edit this when adding new albums. Expects photos to be inside a folder and album with a unique name, have a thumbnail inside a nested "thumbs" folder, and be named 1.jpg, 2.jpg...etc.
const albumManifest: AlbumManifest = {
    path: "/gallery",
    albums: [
        { title: "2009", path: "2009", imageCount: 6 },
    ],
};

export const ImageManifest = buildImageManifest(albumManifest);
