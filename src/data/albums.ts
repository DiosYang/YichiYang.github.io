// Add new images to public/media, then add them to the matching album below.
// The first image is the album cover.
import type { Language } from '../lib/i18n';
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

const chineseAlbums = [
  { title: '缅因州', note: '从两个视角记录缅因州海岸的灯塔。', photos: [
    { alt: '海边灯塔与一旁的游览车', caption: '海岸灯塔' },
    { alt: '缅因州海岸灯塔的远景', caption: '更宽阔的视角' },
  ] },
  { title: '重庆', note: '夏日晴空下，重庆沿江展开的城市天际线。', photos: [
    { alt: '夏日云层下的江岸城市天际线', caption: '山城之夏' },
  ] },
  { title: '四川', note: '四川的山脊在云雾中时隐时现。', photos: [
    { alt: '云雾中若隐若现的雪山', caption: '云间雪山' },
  ] },
  { title: '新罕布什尔州', note: '一条安静的小路，蜿蜒穿过新罕布什尔州的森林。', photos: [
    { alt: '幽暗森林中蜿蜒的小路', caption: '林间小路' },
  ] },
  { title: '北京', note: '阳光与烟雾掠过北京的传统建筑屋顶。', photos: [
    { alt: '传统建筑屋顶旁的阳光与烟雾', caption: '光影之间' },
  ] },
];
export const getAlbums = (lang: Language) => albums.map((album, index) => lang === 'zh' ? {
  ...album, title: chineseAlbums[index].title, note: chineseAlbums[index].note,
  photos: album.photos.map((photo, photoIndex) => ({ ...photo, ...chineseAlbums[index].photos[photoIndex] })),
} : album);
