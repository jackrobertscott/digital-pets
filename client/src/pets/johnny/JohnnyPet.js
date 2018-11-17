import Pet from '../Pet';
import standbyGif from './standby.gif';

export default class JohnnyPet extends Pet {
  standbyImage() {
    return standbyGif;
  }
}
