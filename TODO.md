# TODO - UpRight Chrome Extension

This is a step-by-step todo list with small, testable iterations for building the basic extension.

## Phase 1: Minimal Extension Setup

- [x] Create `manifest.json` with basic extension metadata (name, version, description)
- [x] Add extension icon (16x16, 48x48, 128x128 sizes)
- [x] Load extension in Chrome developer mode and verify it appears in extensions list

## Phase 2: Sidebar Panel Setup

- [x] Add `side_panel` permission to manifest
- [x] Create basic `sidepanel.html` with "Hello UpRight" text
- [x] Add `sidepanel.css` with minimal styling
- [x] Configure side panel in manifest
- [x] Test: Open side panel and verify "Hello UpRight" displays

## Phase 3: Display Open Tabs

- [x] Add `tabs` permission to manifest
- [x] Create `sidepanel.js` to query all open tabs
- [x] Display list of tab titles in the sidebar
- [ ] Test: Open multiple tabs, verify all titles appear in sidebar

## Phase 4: Tab Favicons

- [ ] Retrieve tab favicon URLs from tabs API
- [ ] Display favicon next to each tab title
- [ ] Add fallback icon for tabs without favicons
- [ ] Test: Verify favicons display correctly

## Phase 5: Tab Switching

- [ ] Add click event listener to each tab item
- [ ] Implement tab activation on click using `chrome.tabs.update`
- [ ] Test: Click a tab in sidebar, verify browser switches to that tab

## Phase 6: Active Tab Indicator

- [ ] Add CSS styling for active tab highlight
- [ ] Detect which tab is currently active
- [ ] Apply active styling to current tab in list
- [ ] Test: Switch tabs, verify active indicator updates

## Phase 7: Close Tab Button

- [ ] Add close button (X) to each tab item
- [ ] Implement `chrome.tabs.remove` on close button click
- [ ] Update tab list after closing a tab
- [ ] Test: Close a tab via sidebar, verify it removes from both browser and list

## Phase 8: Real-time Tab Updates

- [ ] Listen for `chrome.tabs.onCreated` event
- [ ] Listen for `chrome.tabs.onRemoved` event
- [ ] Listen for `chrome.tabs.onUpdated` event
- [ ] Listen for `chrome.tabs.onActivated` event
- [ ] Update sidebar display when tabs change
- [ ] Test: Open/close/switch tabs, verify sidebar updates in real-time

## Phase 9: Polish and Refinement

- [ ] Improve CSS styling and layout
- [ ] Handle long tab titles (truncation with ellipsis)
- [ ] Add hover effects on tab items
- [ ] Test: Verify visual appearance and responsiveness
