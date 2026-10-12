// Add new images to public/media, then add them to the matching album below.
// The first image is the album cover.
export const albums = [
  {
    slug: 'maine',
    title: 'Maine',
    note: 'A lighthouse on the coast, seen from two perspectives.',
    photos: [
      { src: '/media/photo-01.jpg', alt: 'Lighthouse with trolley beside the sea', caption: 'The lighthouse' },
      { src: '/media/photo-03.jpg', alt: 'Lighthouse on the coast of Maine', caption: 'A wider view' },
    ],
  },
  {
    slug: 'city-in-summer',
    title: 'City in Summer',
    note: 'A city skyline beneath a wide summer sky.',
    photos: [
      { src: '/media/photo-02.jpg', alt: 'City skyline beside a river under summer clouds', caption: 'City in summer' },
    ],
  },
  {
    slug: 'in-the-clouds',
    title: 'In the Clouds',
    note: 'A mountain appearing and disappearing in the clouds.',
    photos: [
      { src: '/media/photo-05.jpg', alt: 'Snowy mountain partly hidden in clouds', caption: 'In the clouds' },
    ],
  },
  {
    slug: 'through-the-trees',
    title: 'Through the Trees',
    note: 'A road cutting a small line through the forest.',
    photos: [
      { src: '/media/photo-04.jpg', alt: 'A narrow road winding through a dark forest', caption: 'A path through the trees' },
    ],
  },
  {
    slug: 'light-and-shadow',
    title: 'Light & Shadow',
    note: 'Light and smoke drifting around a traditional roof.',
    photos: [
      { src: '/media/photo-06.jpg', alt: 'Sunlight and smoke around a traditional roof', caption: 'Light & shadow' },
    ],
  },
] as const;
