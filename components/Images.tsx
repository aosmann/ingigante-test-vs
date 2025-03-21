import { urlFor } from '../lib/urlFor';

const Images = ({ identifier, image }) => {
  return (
    <div className={identifier === 'main-image' ? 'main-image' : 'image'}>
      <img src={urlFor(image).auto('format')} />
    </div>
  );
};

export default Images;
