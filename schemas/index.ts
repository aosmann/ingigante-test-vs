import blockContent from './blockContent';
import properties from './properties';
import propertyImage from './propertyImage';
import references from './references';
import subscribers from './subscribers';
import contactForm from './contactForm';
import services from './services';
import other from './other';
import locations from './locations';

import propertiesRent from './propertiesRent';
import features from './features';
import propertyType from './propertyType';
import blog from './blog';
import team from './team';
import faq from './faq';
export const schemaTypes = [
  // Document types
  properties,
  propertiesRent,
  propertyType,
  locations,
  features,
  services,
  team,
  blog,
  faq,

  references,
  contactForm,
  subscribers,

  // consulting,
  // other,

  // Other types
  blockContent,
  propertyImage,
];
