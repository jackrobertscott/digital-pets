import petImageTom from '../assets/tom.gif';
import petImageNoob from '../assets/noob.gif';

export const petImage = ({ createdAt }) => {
  const images = [petImageTom, petImageNoob];
  const index = Date.parse(createdAt) % images.length;
  return images[index];
};
