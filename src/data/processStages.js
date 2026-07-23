import fallbackAvatar from '../assets/Avatar.webp';
import strategyAvatar from '../assets/process/strategy.webp';
import designAvatar from '../assets/process/design.webp';
import developmentAvatar from '../assets/process/development.webp';
import performanceAvatar from '../assets/process/performance.webp';
import deliveryAvatar from '../assets/process/delivery.webp';
import supportAvatar from '../assets/process/support.webp';

export const handoffAvatar = fallbackAvatar;

export const processAvatars = {
  strategy: strategyAvatar,
  design: designAvatar,
  development: developmentAvatar,
  performance: performanceAvatar,
  delivery: deliveryAvatar,
  support: supportAvatar,
};

export const processStages = [
  {
    id: 'strategy',
    number: '01',
    title: 'Strategy',
    description: 'Ideas become clear direction.',
    avatar: processAvatars.strategy,
    alt: 'Hafiz thinking through strategy',
    width: 768,
    height: 768,
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description: 'Structure becomes visual language.',
    avatar: processAvatars.design,
    alt: 'Hafiz working on design',
    width: 768,
    height: 768,
  },
  {
    id: 'development',
    number: '03',
    title: 'Development',
    description: 'Design becomes a working experience.',
    avatar: processAvatars.development,
    alt: 'Hafiz developing the experience',
    width: 768,
    height: 768,
  },
  {
    id: 'performance',
    number: '04',
    title: 'Performance',
    description: 'Every interaction becomes faster.',
    avatar: processAvatars.performance,
    alt: 'Hafiz optimizing performance',
    width: 768,
    height: 768,
  },
  {
    id: 'delivery',
    number: '05',
    title: 'Delivery',
    description: 'The experience goes live.',
    avatar: processAvatars.delivery,
    alt: 'Hafiz delivering the project',
    width: 768,
    height: 768,
  },
  {
    id: 'support',
    number: '06',
    title: 'Support',
    description: 'The experience continues evolving.',
    avatar: processAvatars.support,
    alt: 'Hafiz providing continued support',
    width: 768,
    height: 768,
  },
];

const avatarDecodePromises = new Map();

export function decodeProcessAvatar(source) {
  if (typeof Image === 'undefined') return Promise.resolve();
  if (avatarDecodePromises.has(source)) return avatarDecodePromises.get(source);

  const decodePromise = new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      if (typeof image.decode === 'function') {
        image.decode().then(resolve).catch(resolve);
      } else {
        resolve();
      }
    };
    image.onerror = reject;
    image.src = source;
  });

  avatarDecodePromises.set(source, decodePromise);
  return decodePromise;
}

export const processImagesReady = Promise.all(
  processStages.map((stage) => decodeProcessAvatar(stage.avatar))
);
