# MSS Portfolio

**Professional Personal Portfolio Website**  
Built for **Mohamed Sunday Sesay** – Computer Science Student & Aspiring Full-Stack Developer

---

## Project Description

This is a modern, clean, and fully responsive personal portfolio website.  
It is built with pure **HTML5, CSS3, and JavaScript** (no frameworks or backend required).

The design uses a professional **dark theme** with **blue accents** and is optimized for:
- Employers and recruiters
- Internship providers
- University lecturers
- Potential clients

---

## Features

- Fully responsive (mobile, tablet, laptop, desktop)
- Modern dark theme with blue + white color scheme
- Smooth scrolling navigation
- Active link highlighting while scrolling
- Mobile hamburger menu
- Back-to-top button
- Professional sections: Home, About, Skills, Projects, Education, Experience, Certifications, Services, Blog, Contact
- Working contact form (opens email client – static site friendly)
- SEO-friendly meta tags
- Accessible design (semantic HTML, focus states, alt texts)
- Easy to update and maintain

---

## Technologies Used

- HTML5
- CSS3 (Custom Properties / Variables)
- JavaScript (Vanilla)
- Font Awesome (icons)
- Google Fonts (Inter + Poppins)

---

## Project Folder Structure

```
mss-portfolio/
├── index.html                  # Main website file
├── robots.txt                  # Search engine instructions
├── README.md                   # This file
└── assets/
    ├── css/
    │   └── style.css           # All styles
    ├── js/
    │   └── script.js           # All interactivity
    ├── images/
    │   ├── profile-placeholder.svg   # Replace with your photo
    │   └── project-placeholder.svg   # Replace with project screenshots
    └── documents/
        └── README.txt          # Instructions for your CV
```

---

## How to Run Locally (Very Easy)

### Method 1 – Simple (Recommended for beginners)

1. Download or clone this project folder.
2. Open the folder.
3. Double-click the file **`index.html`**.
4. The website will open in your default browser.

### Method 2 – Using Visual Studio Code (Best practice)

1. Install [Visual Studio Code](https://code.visualstudio.com/) if you don’t have it.
2. Open the `mss-portfolio` folder in VS Code.
3. Install the extension **Live Server** (by Ritwick Dey).
4. Right-click on `index.html` → **Open with Live Server**.
5. The website will open with live reload (any change you make will refresh automatically).

---

## How to Customize / Update Your Information

### 1. Replace Your Profile Photo
- Go to `assets/images/`
- Replace `profile-placeholder.svg` with your real photo
- Recommended: square image, at least 400×400 pixels
- Rename your photo to `profile-placeholder.svg` **or** update the `src` in `index.html`

### 2. Add Your CV / Resume
- Place your CV PDF file inside `assets/documents/`
- Name it exactly: **`resume.pdf`**
- The “Download CV” button will then work

### 3. Add Your GitHub and LinkedIn Links
Open `index.html` and search for these IDs (use Ctrl + F):

- `id="github-link"`
- `id="linkedin-link"`
- `id="contact-github"`
- `id="contact-linkedin"`
- `id="footer-github"`
- `id="footer-linkedin"`

Replace the `href="#"` with your real links. Example:
```html
href="https://github.com/yourusername"
```

### 4. Update Project Links
Search for:
- `id="project-github"`
- `id="project-demo"`

Add your real GitHub repository and live demo links when available.

### 5. Add More Projects
Copy an existing project card inside the Projects section and modify the content.

### 6. Update Blog Section
Currently shows “Coming Soon”.  
When you are ready to write articles, you can expand this section.

---

## Deployment (Free Hosting)

### Option 1: Netlify (Easiest & Recommended)

1. Create a free account at [netlify.com](https://www.netlify.com)
2. Drag and drop the entire `mss-portfolio` folder onto Netlify
3. Your website will be live in seconds
4. You can later connect a custom domain

### Option 2: GitHub Pages

1. Create a GitHub account (if you don’t have one)
2. Create a new repository named `mss-portfolio` (or any name)
3. Upload all the files
4. Go to **Settings → Pages**
5. Select the main branch and save
6. Your site will be available at:  
   `https://yourusername.github.io/mss-portfolio`

### Option 3: Vercel
Similar to Netlify – just import the project.

---

## Important Notes

- This is a **static website**. The contact form uses `mailto:` which opens the visitor’s email app. This works well for a portfolio and requires no backend or paid services.
- Never put passwords, API keys, or private information in the code.
- Always test the website on your phone after making changes.

---

## Future Improvements (Optional)

When you feel ready, you can later upgrade the website to include:
- A real backend contact form (PHP + email)
- A blog system with Markdown or a CMS
- Dark/Light mode toggle
- Project filtering

But for now, this clean static version is professional, fast, and easy to maintain.

---

## License

This project is created for personal use by Mohamed Sunday Sesay.  
You are free to modify it as you wish.

---

**Built with care for Mohamed Sunday Sesay**  
Computer Science Student | Aspiring Full-Stack Developer | IT Enthusiast  
Magburaka City, Sierra Leone
