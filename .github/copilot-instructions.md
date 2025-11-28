# Copilot Instructions for UpRight

## Project Overview

UpRight is a Chrome Extension that organizes browser tabs in a vertical sidebar for improved tab management and navigation. The extension provides a left-side vertical tab bar in Chrome, making it easier to view and manage many open tabs at once.

## Technology Stack

- **Platform**: Chrome Extension (Manifest V3)
- **Languages**: HTML, CSS, JavaScript
- **APIs**: Chrome Extensions API (tabs, sidePanel)

## Development Setup

1. Clone the repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the repository directory
5. The extension should appear in your extensions list

## Coding Standards

- Use standard JavaScript (ES6+) without transpilation
- Follow consistent indentation (2 spaces)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused on a single responsibility

## File Structure

- `manifest.json` - Extension configuration and metadata
- `sidepanel.html` - Main sidebar UI
- `sidepanel.css` - Sidebar styling
- `sidepanel.js` - Sidebar functionality and Chrome API interactions

## Testing Guidelines

- Test the extension manually by loading it in Chrome developer mode
- Verify functionality across multiple tabs and windows
- Test tab operations: switching, closing, creating new tabs
- Ensure the sidebar updates in real-time when tabs change
- Test edge cases: tabs without favicons, very long titles, many tabs

## Chrome Extension Best Practices

- Request only necessary permissions in manifest.json
- Handle API errors gracefully
- Provide fallback icons for tabs without favicons
- Ensure the sidebar remains responsive with many tabs
- Use event listeners efficiently to avoid performance issues

## Pull Request Guidelines

- Keep changes focused and minimal
- Test all changes manually before submitting
- Update documentation if adding new features
- Ensure the extension loads without errors after changes
- Update the CHANGELOG.md with a summary of the changes
- Update the version in manifest.json appropriately
