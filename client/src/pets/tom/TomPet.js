import Pet from '../Pet';
import standbyGif from './standby.gif';

export default class TomPet extends Pet {
  standbyImage() {
    return standbyGif;
  }
}
