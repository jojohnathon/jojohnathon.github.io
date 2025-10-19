export interface StyleOption {
  name: string;
  summary: string;
  cssClass: string;
}

export const styleOptions: StyleOption[] = [
  {
    name: 'Column Layout',
    summary: 'Stacks content vertically with generous spacing for readability.',
    cssClass: '.layout-column { display: flex; flex-direction: column; gap: 1.5rem; }'
  },
  {
    name: 'Centered Hero',
    summary: 'Centers the hero content with a max width and balanced padding.',
    cssClass:
      '.hero-centered { max-width: 60ch; margin-inline: auto; padding: 2rem; text-align: center; }'
  },
  {
    name: 'Soft Card',
    summary: 'Applies a soft card background with rounded corners and subtle shadow.',
    cssClass:
      '.card-soft { background: #ffffff; border-radius: 1rem; box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08); padding: 2rem; }'
  },
  {
    name: 'Accent Button',
    summary: 'Creates a prominent button style that matches the portfolio palette.',
    cssClass:
      '.button-accent { background: #2563eb; color: #f8fafc; border-radius: 999px; padding: 0.75rem 1.5rem; font-weight: 600; }'
  }
];
