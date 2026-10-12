// Add new images to public/media, then add them to the matching album below.
// The first image is the album cover.
export const albums = [
  {
    slug: 'maine',
    title: 'Maine',
    note: 'A lighthouse on the Maine coast, seen from two perspectives.',
    photos: [
      { src: '/media/photo-01.jpg', alt: 'Lighthouse with trolley beside the sea', caption: 'The lighthouse' },
      { src: '/media/photo-03.jpg', alt: 'Lighthouse on the coast of Maine', caption: 'A wider view' },
    ],
  },
  {
    slug: 'city-in-summer',
    title: 'Chongqing (重庆)',
    note: 'The skyline of Chongqing beside the river on a bright summer day.',
    photos: [
      { src: '/media/photo-02.jpg', alt: 'City skyline beside a river under summer clouds', caption: 'City in summer' },
    ],
  },
  {
    slug: 'in-the-clouds',
    title: 'Sichuan (四川)',
    note: 'Mountain ridges appearing and disappearing among the clouds in Sichuan.',
    photos: [
      { src: '/media/photo-05.jpg', alt: 'Snowy mountain partly hidden in clouds', caption: 'In the clouds' },
    ],
  },
  {
    slug: 'through-the-trees',
    title: 'New Hampshire',
    note: 'A quiet road winding through the forests of New Hampshire.',
    photos: [
      { src: '/media/photo-04.jpg', alt: 'A narrow road winding through a dark forest', caption: 'A path through the trees' },
    ],
  },
  {
    slug: 'light-and-shadow',
    title: 'Beijing (北京)',
    note: 'Sunlight and smoke drifting across a traditional roof in Beijing.',
    photos: [
      { src: '/media/photo-06.jpg', alt: 'Sunlight and smoke around a traditional roof', caption: 'Light & shadow' },
    ],
  },
] as const;
