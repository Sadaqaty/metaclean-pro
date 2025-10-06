
# MetaClean Pro


MetaClean Pro is a modern web application designed to provide users with a seamless experience for uploading, cleaning, and managing their files. Built with React and TypeScript, it features a clean UI, robust file handling, and a focus on security and usability.

**Privacy First:** MetaClean Pro removes EXIF metadata from your images, protecting your privacy and ensuring sensitive information stays private.

## Features

- **File Upload**: Easily upload files for cleaning and processing.
- **How It Works**: Step-by-step guide for users to understand the workflow.
- **Security Badges**: Visual indicators of security and compliance.
- **FAQ & Contact**: Built-in FAQ section and contact form for user support.
- **Responsive Design**: Works well on desktop and mobile devices.
- **Custom Theming**: Easily switch and extend themes using styled-components.

## Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   ├── GlobalStyles.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── react-icons.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── styled.d.ts
│   ├── theme-types.ts
│   ├── theme.ts
│   └── components/
│       ├── Contact.tsx
│       ├── Faq.tsx
│       ├── Features.tsx
│       ├── FileUpload.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── HowItWorks.tsx
│       ├── index.ts
│       └── SecurityBadges.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
	```zsh
	git clone https://github.com/SecureNetDynamics/metaclean-pro.git
	cd metaclean-pro
	```
2. **Install dependencies:**
	```zsh
	npm install
	# or
	yarn install
	```
3. **Start the development server:**
	```zsh
	npm start
	# or
	yarn start
	```
	The app will be available at `http://localhost:3000`.

### Build for Production

```zsh
npm run build
# or

```
The production-ready files will be in the `build/` directory.

## Scripts

- `npm start` / `yarn start` — Start the development server
- `npm run build` / `yarn build` — Build for production
- `npm test` / `yarn test` — Run tests
- `npm run lint` / `yarn lint` — Lint the codebase (if configured)

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)

## Customization

- **Theming**: Edit `src/theme.ts` and `src/theme-types.ts` to customize the app's look and feel.
- **Components**: All UI components are in `src/components/` for easy modification and extension.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, suggestions, or support, please open an issue or contact the maintainer at [your-email@example.com].
