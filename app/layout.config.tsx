import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Electroplix',
  },
  links: [
    {
      text: 'Components',
      url: '/docs/components',
      active: 'nested-url',
    },
    {
      text: 'Templates',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Custom Website',
      url: '/',
      active: 'nested-url',
    },
  ],
};
