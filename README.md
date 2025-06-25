# CV Application Builder

A modern React-based web application for building professional CVs and resumes with real-time preview and PDF export functionality.

![CV Application Builder](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-green)

## ✨ Features

- **Real-time Preview**: See your CV update instantly as you type
- **Professional Sections**: Personal info, professional summary, experience, education, skills, and projects
- **PDF Export**: Download your CV as a high-quality PDF
- **Dynamic Forms**: Add/remove multiple entries for experience, education, and projects
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Enhanced UX with Framer Motion animations
- **Modern UI**: Clean, professional interface with accordion-style forms

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: CSS3 with custom styles
- **Animations**: Framer Motion 12.16.0
- **PDF Generation**: jsPDF 3.0.1 + html2canvas 1.4.1
- **Development**: ESLint for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OfekYosef-D/cv-application-builder.git
cd cv-application-builder
```

2. Navigate to the client directory:
```bash
cd client
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ResumeForm/          # Form components for data input
│   │   │   ├── PersonalInformation.jsx
│   │   │   ├── ProfessionalExperience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Projects.jsx
│   │   ├── ResumePreview/       # Preview components
│   │   │   ├── ResumePreview.jsx
│   │   │   ├── ProfessionalSummary.jsx
│   │   │   ├── ProfessionalExperienceSec.jsx
│   │   │   ├── EducationSec.jsx
│   │   │   ├── SkillsSec.jsx
│   │   │   └── ProjectsSec.jsx
│   │   ├── Accordion.jsx        # Collapsible form sections
│   │   ├── Button.jsx           # Reusable button component
│   │   ├── Header.jsx           # CV header component
│   │   └── Section.jsx          # CV section wrapper
│   ├── styles/
│   │   └── styles.css           # Global styles
│   ├── utils/
│   │   └── dateUtils.js         # Date formatting utilities
│   └── App.jsx                  # Main application component
├── package.json
└── vite.config.js
```

## 💼 Usage

1. **Personal Information**: Fill in your basic details (name, email, phone, location)
2. **Professional Summary**: Write a brief overview of your professional background
3. **Professional Experience**: Add your work history with descriptions
4. **Education**: Include your educational background
5. **Skills**: List your technical and professional skills
6. **Projects**: Showcase your personal or professional projects
7. **Export**: Click "Download PDF" to save your completed CV

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features in Detail

### PDF Export
The application uses `html2canvas` to capture the CV preview and `jsPDF` to generate a professional PDF document with proper formatting and scaling.

### Dynamic Form Management
Users can add or remove multiple entries for:
- Professional Experience
- Education History  
- Projects

### Real-time Preview
Changes in the form are immediately reflected in the CV preview, allowing users to see exactly how their CV will look.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Ofek Yosef**
- GitHub: [@OfekYosef-D](https://github.com/OfekYosef-D)

## 🙏 Acknowledgments

- Built with React + Vite for optimal development experience
- PDF generation powered by jsPDF and html2canvas
- Smooth animations courtesy of Framer Motion
