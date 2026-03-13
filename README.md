# Community Blood Donor Finder

A responsive React app to locate and request nearby blood donors by blood group and city.

## ✅ Key Features

- Search donors by **blood group** and **city**
- View donor **availability**, **location**, and **age**
- “Request Blood” button to mark donors as requested
- Responsive layout (mobile/tablet/desktop)
- Clean, accessible UI with healthcare-inspired styling

## 🧰 Tech Stack

- **React** (Create React App)
- **JavaScript (ES6+)**
- **CSS** (Flexbox + Grid, responsive design)
- **Mock data** from JSONPlaceholder (REST API)

## 🚀 Setup & Run

```bash
npm install
npm start
```

Then open: http://localhost:3000

## 📁 Project Structure

- `src/App.js` — core app logic and state management
- `src/components/` — UI components (Header, Filters, Donor list, etc.)
- `src/main.css` — global styling

## ⚠️ Notes

- Donor data comes from a public mock API (JSONPlaceholder) and is not persisted.
- “Request Blood” state is handled locally and resets on refresh.
