# Dynamic Dashboard Example

![screenshot](./public/screenshot.png)

Basic responsive dashboard example with dynamic content created with Tailwind CSS. Supports Dark mode. <br>
The website is deployed on [Vercel](https://vercel.com/). <br>
Website: https://dynamic-dashboard-example.vercel.app/

## 🔍 Table of Contents
- [📦 Installation](#-installation)
- [💻 Tech Stack](#-tech-stack)
- [🛠️ Solutions](#-solutions)

## 📦 Installation
1. Clone the repository
```bash
git clone https://github.com/Hasmik-Mejlumyan/dynamic-dashboard-example.git
```

2. Install the dependencies
```html
yarn
```
_*Note: Ensure you are using Node.js v22.14.0 for better and stable experience._

3. Run the project
```bash
yarn dev  
```

### Minimal requirements
- `Node.js` v22.14.0
- `npm` v10.9.2
- `yarn` 1.22.4

## 🛠️ Solutions

### Custom UI Library
I preferred to configure my own UI library, instead of using a ready-made one, to have more control over the design and to be able to customize it to my needs.

### Lucide React icons or Custom Icon Library?
I would prefer a custom Icon Library for not downloading whole huge external library, but in this case for faster results I installed Lucide React icons.

### Charts
For charts I used Recharts library. I would use what was used in the original example, but it wasn't fully compatible and was using jQuery.

## 💻 Tech Stack
<div>
    <img src="https://github.com/devicons/devicon/blob/master/icons/vitejs/vitejs-original.svg" title="Vite" alt="Vite" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="Typescript" alt="Typescript" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40" />&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg" title="TailwindCSS" alt="TailwindCSS" width="40" height="40" />&nbsp;
</div>
