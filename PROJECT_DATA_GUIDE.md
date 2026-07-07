# Project Data Management Guide

This guide explains how the centralized project data system works in your portfolio website.

## Centralized Data Location

All project metadata is stored in: **`/src/app/data/projects.ts`**

## Project Data Structure

```typescript
{
  id: number;           // Project number (used for ordering and display)
  title: string;        // Project title
  category: string;     // Project category (e.g., "Brand Identity", "Web Development")
  year: number;         // Project year
  description: string;  // Brief project description
  tags: string[];       // Array of tags for filtering
  slug: string;         // URL-friendly identifier (e.g., "vintage-cafe-branding")
}
```

## How It Works

### 1. Project Numbers
- Project numbers are automatically formatted with leading zeros
- Single-digit IDs (1-9) display as "01", "02", etc.
- Double-digit IDs (10+) display as-is: "10", "11", etc.
- Format: `Project {String(project.id).padStart(2, '0')} / {project.category}`
- Example: "Project 03 / Guide"

### 2. Route Mapping
- Each project's URL path uses its `slug` field
- Routes are defined in `/src/app/routes.ts`
- **Important:** When you update a slug in `projects.ts`, you must also update the corresponding path in `routes.ts`

### 3. Individual Project Pages
All project pages automatically pull data from the centralized source:
- Title → displays in the page header
- Category → shows in the project number line
- Year → displays in project metadata
- Tags → rendered dynamically in the tags section

Each page finds its data using: `projects.find(p => p.slug === "project-slug-here")`

## Making Updates

### To Update Project Information:

1. **Edit `/src/app/data/projects.ts`**
   - Change title, category, year, or tags
   - Changes automatically appear on both the Projects page and individual project pages

### To Change a Project's URL:

1. **Update the `slug` in `/src/app/data/projects.ts`**
2. **Update the corresponding path in `/src/app/routes.ts`**

Example:
```typescript
// In projects.ts
{ 
  id: 3, 
  slug: "new-project-slug",  // ← Change this
  // ... other fields
}

// In routes.ts
{ path: "projects/new-project-slug", Component: P20570SetupGuide },  // ← Update this path
```

### To Add a New Project:

1. Add new project data to the array in `/src/app/data/projects.ts`
2. Create a new project page component in `/src/app/pages/projects/`
3. Add the route in `/src/app/routes.ts`

## Benefits

**Single Source of Truth**: Update once, changes everywhere
**Consistency**: All pages use the same data
**Easy Maintenance**: No need to update multiple files
**Automatic Formatting**: Project numbers format correctly
**Type Safety**: TypeScript ensures data integrity
