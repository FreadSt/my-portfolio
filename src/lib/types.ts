export interface GalleryImage {
  src: string;
  href?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  year?: string;
  role?: string;
  isGallery?: boolean;
  galleryImages?: GalleryImage[];
}
