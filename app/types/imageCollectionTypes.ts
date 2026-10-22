export interface Album {
    title: string;
    path: string;
    imageCount: number;
}

export interface AlbumManifest {
    path: string;
    albums: Album[];
}

export interface AlbumImages {
    title: string;
    images: ImageFile[];
}

export interface ImageFile {
    id: string;
    path: string;
    thumbPath: string;
}

export interface SelectedImage {
    title: string;
    imageFile: ImageFile;
}
