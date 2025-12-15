# Newschool Africa Website

Production-ready static website for Newschool Africa, a tech academy.

## Project Structure

- `index.html`: Landing page
- `courses.html`: Course listing
- `course-detail.html`: Course detail template
- `bootcamps.html`: Cohort info and FAQ
- `about.html`: Mission and team
- `outcomes.html`: Testimonials and stats
- `pricing.html`: Pricing tiers
- `apply.html`: Application form with Paystack integration
- `blog.html`: Blog listing
- `contact.html`: Contact and legal info
- `styles/main.css`: Global styles
- `scripts/main.js`: Main interactivity (menu, forms)
- `scripts/hero.js`: Hero canvas animation
- `assets/`: Images and static assets

## Deployment Instructions

### Netlify / Vercel

1. **Connect Repository**: Push this code to a GitHub/GitLab/Bitbucket repository.
2. **New Site**: Create a new site on Netlify or Vercel and link the repository.
3. **Build Settings**:
    - Build Command: (Leave empty, this is a static site)
    - Publish Directory: `/` (Root)
4. **Deploy**: Click deploy.

### Paystack Integration

The `apply.html` file contains a placeholder Paystack public key.

1. Open `apply.html`.
2. Locate the `payWithPaystack` function in the script tag at the bottom.
3. Replace `'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'` with your actual Paystack Public Key.

```javascript
key: 'YOUR_PUBLIC_KEY_HERE',
```

### Admin / Form Handling

The application form in `apply.html` is set up with `data-netlify="true"` for Netlify Forms.
- Submissions will automatically appear in your Netlify Site Dashboard under "Forms".
- If using Vercel or another host, you may need to integrate a form backend service (like Formspree) or handle the form submission via the Paystack webhook/callback.

## Customization

- **Colors & Fonts**: Edit `styles/main.css` `:root` variables.
- **Content**: Edit the respective HTML files.
- **Hero Animation**: Adjust particles in `scripts/hero.js`.
