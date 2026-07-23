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
    paragraphs: [
      'I start by understanding your business, your audience, and what you want the website to achieve.',
      'This gives the project a clear direction before any design or development work begins.',
    ],
    avatar: processAvatars.strategy,
    alt: 'Hafiz thinking through strategy',
    width: 768,
    height: 768,
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    paragraphs: [
      'I turn the strategy into a clear visual experience that feels professional, easy to understand, and true to your brand.',
      'Every section is designed with purpose, so visitors always know where to look and what to do next.',
    ],
    avatar: processAvatars.design,
    alt: 'Hafiz working on design',
    width: 768,
    height: 768,
  },
  {
    id: 'development',
    number: '03',
    title: 'Development',
    paragraphs: [
      'I build the approved design into a responsive and fully working website.',
      'The focus is on clean code, smooth interactions, strong usability, and a consistent experience across desktop, tablet, and mobile.',
    ],
    avatar: processAvatars.development,
    alt: 'Hafiz developing the experience',
    width: 768,
    height: 768,
  },
  {
    id: 'performance',
    number: '04',
    title: 'Performance',
    paragraphs: [
      'I test and improve the website so it loads quickly, scrolls smoothly, and works reliably across different devices and browsers.',
      'Images, animations, code, and layout are carefully refined to keep the experience fast without losing visual quality.',
    ],
    avatar: processAvatars.performance,
    alt: 'Hafiz optimizing performance',
    width: 768,
    height: 768,
  },
  {
    id: 'delivery',
    number: '05',
    title: 'Delivery',
    paragraphs: [
      'Once everything is approved and tested, I prepare the website for launch and make sure all important features are working correctly.',
      'The final handover is clear, organized, and ready for real users.',
    ],
    avatar: processAvatars.delivery,
    alt: 'Hafiz delivering the project',
    width: 768,
    height: 768,
  },
  {
    id: 'support',
    number: '06',
    title: 'Support',
    paragraphs: [
      'My work does not always end when the website goes live.',
      'I can continue helping with updates, improvements, fixes, new sections, and ongoing support as the business grows.',
    ],
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
