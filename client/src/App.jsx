import React from 'react';
import './styles/styles.css'; // make sure this contains .fullscreen-bg
import Title from './components/Title';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <div className="fullscreen-bg">
      <Title />
      <div className="container">
         <div className="form-sidebar">
          <ResumeForm />
        </div>
        {/*<div className="preview-panel">
          <ResumePreview />
        </div> */}
      </div>
    </div>
  );
}

export default App;
