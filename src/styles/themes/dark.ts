import light from './light';

const dark: typeof light = {
  colors: {
    ...light.colors,
    background: '#0e0e13',
    quaternary: '#d1ced8',
    cards: '#6e6d6d',
  },
};

export default dark;
