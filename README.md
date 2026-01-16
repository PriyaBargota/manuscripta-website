# Manuscripta Project Website

Project documentation website for the Manuscripta educational technology platform.

## Live Site
https://priyabargota.github.io/manuscripta-website/

## Structure

```
manuscripta-website/
├── index.html          # Landing page with hero section
├── requirements.html   # Requirements analysis
├── research.html       # Background research
├── design.html         # System design and architecture
├── implementation.html # Implementation details
├── testing.html        # Testing strategy and results
├── evaluation.html     # Project evaluation
├── appendices.html     # Additional resources
├── css/
│   └── style.css      # Main stylesheet
└── images/            # Place images here
```

## Editing Content

1. Open the HTML files in VS Code or any text editor
2. Look for placeholder text in `[square brackets]`
3. Replace with your actual content
4. Add images to the `images/` folder
5. Update image references in HTML

## Adding Images

1. Place images in the `images/` folder
2. Reference them in HTML: `<img src="images/your-image.png" alt="Description">`

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Updated [section name]"
git push
```

The site updates automatically within 1-2 minutes.

## Customization

### Update Team Members
Edit the team section in `index.html` - replace placeholders with actual names and roles.

### Update GitHub Link
Replace `https://github.com/PriyaBargota/manuscripta` with your actual repo URL throughout the files.

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* etc. */
}
```

## Tips

- Keep the navigation menu consistent across all pages
- Add screenshots and diagrams to make content more engaging
- Use the existing section structure as templates
- Test responsive design by resizing your browser

## Questions?
Contact the team or refer to the UCL example site: https://students.cs.ucl.ac.uk/2024/group28/
