import { MdPerson as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'person',
  // Visible Title
  title: 'Slicemasters',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about them',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
