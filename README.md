# Chitty Landing Page

Landing page for chitty.cc - The Web3 Business Operating System

## Features

- **Hero Section**: Eye-catching introduction with animated background
- **Three Pillars**: Showcases ChittyAssets, ChittyFinance, and ChittyLegal
- **ChittyChain Foundation**: Explains the blockchain infrastructure
- **Feature Grid**: Highlights key benefits and differentiators
- **Responsive Design**: Works perfectly on all devices
- **Chitty Branding**: Orange accent colors and modern design

## Tech Stack

- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- Cloudflare Pages for deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

## Structure

```
src/
├── components/
│   ├── Hero.tsx          # Main landing section
│   ├── Pillars.tsx       # Three pillars showcase
│   ├── ChainFoundation.tsx # Blockchain explanation
│   ├── Features.tsx      # Feature grid and benefits
│   └── Footer.tsx        # Footer with links
├── App.tsx               # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Deployment

The site is configured for deployment to Cloudflare Pages at chitty.cc domain.

```bash
npm run deploy
```

Make sure to configure the custom domain in Cloudflare dashboard after deployment.