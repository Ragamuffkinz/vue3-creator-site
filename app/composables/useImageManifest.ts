import type {
    Album,
    AlbumManifest,
    ImageFile,
    AlbumImages,
} from "~/types/imageCollectionTypes";

export function buildImageFiles(rootDir: string, album: Album): ImageFile[] {
    const files: ImageFile[] = [];
    const albumPath = `${rootDir}/${album.path}`;
    for (let index = 1; index <= album.imageCount; index++) {
        const id = String(index);
        files.push({
            id,
            path: `${albumPath}/${id}.jpg`,
            thumbPath: `${albumPath}/thumbs/${id}.jpg`,
        });
    }
    return files;
}

export function buildImageManifest(manifest: AlbumManifest): AlbumImages[] {
    const imageManifest: AlbumImages[] = [];
    for (const album of manifest.albums) {
        const files = buildImageFiles(manifest.path, album);
        const gallery: AlbumImages = {
            title: album.title,
            images: files,
        };
        imageManifest.push(gallery);
    }
    return imageManifest;
}
