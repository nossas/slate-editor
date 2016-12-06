import Image from './Image';
import { InsertImageButton } from './components';


export default (options) => {

  return {
    schema: {
      nodes: {
        image: Image,
      }
    },
  };
};

export {
  InsertImageButton,
}
