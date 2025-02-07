export interface IProjectData {
  id: number;
  name: { en: string; ru: string };
  imgSrc: string;
  description: { en: string; ru: string };
  stack: string[];
  links: {
    github: string;
    sait: string;
  };
}
