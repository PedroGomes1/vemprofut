import light from './light';

const dark: typeof light = {
  colors: {
    ...light.colors,
    background: '#0e0e13',
    quaternary: '#d1ced8',
  },
};

export default dark;
