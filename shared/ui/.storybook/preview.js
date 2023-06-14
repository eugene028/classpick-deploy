import { theme } from '../src/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../../apps/hongik/src/styles/GlobalStyle';
import { withRouter } from 'storybook-addon-react-router-v6';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  parameters: {
    nextjs:{
      appDirectory: true,
      router: {
        basePath: '/classpick'
      }
    }
  },
  paddings: {
    values: [
      { name: 'margin-template', value: '24px' },
      { name: 'none', value: '0px' },
    ],
    default: 'none',
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'iPhone 13',
        styles: {
          width: '390px',
          height: '844px',
        },
        type: 'mobile',
      },
      tablet: {
        name: 'iPad Pro 11"',
        styles: {
          width: '834px',
          height: '1194px',
        },
        type: 'tablet',
      },
    },
    defaultViewport: 'mobile',
  },
}

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Story />
      </ThemeProvider>
    </BrowserRouter>
  ),
];
