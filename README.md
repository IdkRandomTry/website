# Portfolio - Modular Structure

This portfolio is now completely modular and easy to update! Just edit the JSON files to add new content.

## File Structure

```
myplace/
├── index-new.html          # Minimal HTML (use this as your main file)
├── css/
│   └── style.css           # All styling
├── js/
│   └── main.js             # JavaScript to load and render content
├── data/
│   ├── about.json          # Profile info & contact links
│   ├── research.json       # Research projects
│   ├── projects.json       # Featured projects
│   ├── leadership.json     # Community & leadership roles
│   ├── achievements.json   # Achievements & extracurricular
│   └── skills.json         # Tech skills & interests
└── cv.tex                  # Original LaTeX CV
```

## How to Add New Content

### Add a New Project

Edit `data/projects.json` and add a new object:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "event": "Event/Course Name",
  "dateRange": "Start - End",
  "status": "Optional status",
  "description": "Project description",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "links": [
    {
      "label": "Link Text",
      "url": "https://example.com"
    }
  ]
}
```

### Add a New Research Project

Edit `data/research.json` and add:

```json
{
  "id": "unique-id",
  "title": "Research Title",
  "institution": "Institution Name",
  "dateRange": "Start - End",
  "description": "Description",
  "tags": ["Tag1", "Tag2"],
  "links": [
    {
      "label": "Link Text",
      "url": "https://example.com"
    }
  ]
}
```

### Add Leadership/Community Role

Edit `data/leadership.json` and add:

```json
{
  "title": "Role Title",
  "description": "Role description"
}
```

### Add Achievement

Edit `data/achievements.json` in the `achievements` array:

```json
{
  "title": "Achievement Title",
  "description": "Description",
  "link": "https://optional-link.com"  // Optional
}
```

### Add Extracurricular Activity

Edit `data/achievements.json` in the `extracurricular` array:

```json
{
  "title": "Activity Title",
  "description": "Description"
}
```

### Update Skills

Edit `data/skills.json`:
- Add to `interests` array for "What I Love"
- Add to `languages` array for programming languages
- Add to `obsessed` array for interests

## To Use

1. Rename `index-new.html` to `index.html` (or use it as-is)
2. Open `index.html` in a browser
3. The page will automatically load all content from the JSON files

## Advantages

- **Easy updates**: Just edit JSON files, no HTML editing needed
- **Organized**: Each type of content is in its own file
- **Scalable**: Easy to add hundreds of projects without cluttering HTML
- **Maintainable**: Clear separation of data and presentation
- **Future-proof**: Easy to add filters, search, or sorting later

## Notes

- Make sure your JSON files are valid (use a JSON validator if unsure)
- All URLs in JSON files should be properly formatted
- The JavaScript will automatically render everything
- No build step needed - just edit JSON and refresh the browser
