import type {
    AlbumImages,
    ImageFile,
    SelectedImage,
} from "~/types/imageCollectionTypes";

export function useAlbumGallery(imageManifest: AlbumImages[]) {
    const selectedImage = ref<SelectedImage | null>(null);
    const expandedAlbum = ref<string | null>(null);

    const sortedImageManifest = [...imageManifest].sort(
        (a, b) => Number(b.title) - Number(a.title),
    );

    const isOpen = computed({
        get: () => selectedImage.value !== null,
        set: (value: boolean) => {
            if (!value) selectedImage.value = null;
        },
    });

    function toggleAlbum(title: string) {
        expandedAlbum.value = expandedAlbum.value === title ? null : title;
    }

    function openImage(title: string, imageFile: ImageFile) {
        selectedImage.value = { title, imageFile };
    }

    function closeImage() {
        selectedImage.value = null;
    }

    return {
        selectedImage,
        expandedAlbum,
        sortedImageManifest,
        isOpen,
        toggleAlbum,
        openImage,
        closeImage,
    };
}
