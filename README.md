# JobTracker App

JobTracker is a modern frontend application built with Nuxt 4 that allows users to manage jobs and visualize job statistics. It demonstrates key frontend skills such as component-based architecture, state management, dynamic charts, notifications, and client-side persistence, making it a strong portfolio project for recruiters.

## 🚀 Features

- Add, edit, and delete jobs dynamically
- Persistent job storage using LocalStorage
- Dynamic job statistics chart using Chart.js (StatusChart.vue)
- Toast notifications for add/edit/delete actions (Toast.vue)
- Responsive design using Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Nuxt 4, Vue 3, TypeScript
- **Styling**: Tailwind CSS
- **Charts & Data Visualization**: Chart.js (StatusChart.vue)
- **Notifications**: Toast system (Toast.vue + useToast composable)
- **Persistence**: LocalStorage (job data stored on client)
- **Build & Dev Tools**: Vite, Node.js

## 📁 Project Structure

```
job-tracker-app/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css       # Tailwind CSS
│   ├── components/
│   │   ├── JobCard.vue        # Single job entry card
│   │   ├── JobForm.vue        # Add/Edit jobs
│   │   ├── RecruiterCard.vue  # Optional recruiter info display
│   │   ├── StatusChart.vue    # Chart.js component
│   │   └── Toast.vue          # Toast notifications
│   ├── composables/
│   │   └── useToast.vue       # Toast logic
│   ├── page/
│   │   ├── index.vue          # Main page (jobs + chart)
│   │   └── recruiters.vue     # Optional recruiter directory
│   └── app.vue                # Root app
├── public/                    # Static assets
├── nuxt.config.ts             # Nuxt configuration
└── package.json               # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js 22.12.0
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/johnnyflores/job-tracker-app.git
cd job-tracker-app
```

2. Install dependencies:

```bash
npm install

```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Usage

1. - **Add a job**: Fill out the form and click “Add Job”

2. - **Edit a job**: Click “Edit” on a job entry

3. - **Delete a job**: Click “Delete” on a job entry

4. - **View chart**: The chart automatically updates as jobs change

### Key Learnings

- Component-based architecture with Vue 3 + Nuxt 4
- Reactive state management with composables
- Integrating Chart.js for dynamic visualizations
- Persistent client-side data with LocalStorage
- Implementing toast notifications
- Responsive and professional UI using Tailwind CSS

## 📈 Future Enhancements

- Add search/filter functionality for jobs
- Add categories or tags for jobs
- Light/Dark mode toggle
- Deploy additional enhancements with Vercel or Netlify
- Add unit or integration tests (Vitest, React Testing Library for Vue components)

## 📄 License

MIT
