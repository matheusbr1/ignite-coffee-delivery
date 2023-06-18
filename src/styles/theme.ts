export const defaultTheme = {
  colors: {
    'yellow-dark': '#C47F17',
    'yellow': '#DBAC2C',
    'yellow-light': '#F1E9C9',
    'purple-dark': '#4B2995',
    'purple': '#8047F8',
    'purple-light': '#EBE5F9',
    'base-title': '#272221',
    'base-subtitle': '#403937',
    'base-text': '#574F4D',
    'base-label': '#8D8686',
    'base-hover': '#D7D5D5',
    'base-button': '#E6E5E5',
    'base-input': '#EDEDED',
    'base-card': '#F3F2F2',
    'background': '#FAFAFA',
    'white': '#FFFFFF'
  },
  typography: {
    title: {
      xl: '3rem', // 48px
      l: '2rem', // 32px
      m: '1.5rem', // 24px
      s: '1.25rem', // 20px
      xs: '1.125rem' // 18px
    },
    text: {
      l: '1.25rem', // 20px
      m: '1rem', // 16px
      s: '0.875rem', // 14px
      xs: '0.75rem' // 12px
    },
    button: {
      g: '0,875rem', // 14px
      m: '0.75rem' // 12px
    },
    chip: '0.625rem' // 10px
  }
} as const