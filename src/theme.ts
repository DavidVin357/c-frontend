import { deep } from '@theme-ui/presets'
//eslint-disable-next-line
export default {
  ...deep,
  styles: {
    ...deep.styles,
  },
  buttons: {
    primary: {
      fontWeight: 'bold',

      color: 'text',
      bg: 'muted',
      cursor: 'pointer',
    },
  },

  cards: {
    primary: {
      padding: 1,
      borderRadius: 10,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      backgroundColor: 'highlight',
    },
  },
  text: {
    paragraph: {
      padding: 2,
      fontWeight: 'bold',
    },
  },
}
