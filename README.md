# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, beautiful UI components, and a professional design perfect for showcasing your work and skills.

## ✨ Features

-   **Modern Design**: Clean, professional layout with smooth animations
-   **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
-   **TypeScript**: Type-safe development with excellent IDE support
-   **Animations**: Smooth scroll animations using Framer Motion
-   **Fast**: Built with Vite for lightning-fast development and build times
-   **Interactive**: Contact form, smooth scrolling navigation, and hover effects
-   **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

-   **React 18** - Modern React with hooks
-   **TypeScript** - Type safety and better development experience
-   **Vite** - Fast build tool and development server
-   **Tailwind CSS** - Utility-first CSS framework
-   **Framer Motion** - Smooth animations and transitions
-   **Lucide React** - Beautiful, customizable icons

## 🚀 Getting Started

### Prerequisites

-   Node.js (version 16 or later)
-   npm or yarn

### Installation

1. Clone the repository or use this template
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):

    - Change name from "John Doe" to your name
    - Update job title and description
    - Modify the call-to-action buttons

2. **About Section** (`src/components/About.tsx`):

    - Replace the personal description
    - Update the feature cards with your strengths
    - Modify the personality tags

3. **Experience Section** (`src/components/Experience.tsx`):

    - Replace the work experience data
    - Add your own companies, roles, and achievements
    - Update technologies and skills used

4. **Projects Section** (`src/components/Projects.tsx`):

    - Replace project data with your own projects
    - Update images (recommended: 500x300px)
    - Add your project URLs and descriptions

5. **Skills Section** (`src/components/Skills.tsx`):

    - Update skill levels and categories
    - Add or remove technologies
    - Modify the skills data structure

6. **Contact Section** (`src/components/Contact.tsx`):

    - Update contact information
    - Replace email, phone, and location
    - Modify social media links

7. **Footer** (`src/components/Footer.tsx`):
    - Update name and contact information
    - Modify social media links

### Colors and Styling

The project uses a custom color palette defined in `tailwind.config.js`. You can modify the primary colors:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... modify these colors
    900: '#1e3a8a',
  },
}
```

### Images

Replace the placeholder images in the Projects section with your own:

-   Recommended size: 500x300px
-   Use services like Unsplash, or your own project screenshots
-   Update the `image` property in the projects array

### Resume/CV

Add your resume file to the `public` directory and update the download link in the Hero section.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero/landing section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience timeline
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills and technologies
│   ├── Contact.tsx      # Contact form and info
│   └── Footer.tsx       # Footer component
├── App.tsx              # Main App component
├── main.tsx             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
    ```json
    "scripts": {
      "deploy": "gh-pages -d dist"
    }
    ```
3. Run: `npm run build && npm run deploy`

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips

-   **Images**: Use optimized images for better performance
-   **Content**: Keep descriptions concise but informative
-   **SEO**: Update meta tags in `index.html` with your information
-   **Analytics**: Add Google Analytics or other tracking tools if needed
-   **Contact Form**: Integrate with services like Formspree or Netlify Forms for form handling

## 🎯 Next Steps

After customization, consider adding:

-   Blog section
-   Testimonials
-   Dark mode toggle
-   More interactive animations
-   Backend for contact form
-   CMS integration

---

**Happy coding!** 🚀

Feel free to star this repository if you found it helpful!
