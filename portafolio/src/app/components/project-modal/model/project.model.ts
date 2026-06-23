export interface ProjectGalleryItem {
  img: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  desc: string;
  stack: string[];
  code: string;
  thumb: string;
  gallery: ProjectGalleryItem[];
  details: string;
}