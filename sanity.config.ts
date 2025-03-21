import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
//import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from './schemas';
import Logo from './components/Logo';
import StudioNavbar from './components/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiKey = process.env.GOOGLE_MAPS_API_KEY!;

import { googleMapsInput } from '@sanity/google-maps-input';

export default defineConfig({
  name: 'default',
  title: 'Ingigante Property Management',
  basePath: '/studio',

  projectId,
  dataset,

  plugins: [
    googleMapsInput({
      apiKey: 'AIzaSyCNhsU6R9HsP40Xu9QTwvWKCeWAZdpSRfM',
    }),
    deskTool(),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
