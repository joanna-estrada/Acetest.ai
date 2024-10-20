import React, { useState } from 'react';
import './StudyPlanPage.css';

const StudyPlanPage = () => {
  // Initialize all sections as collapsed (true means collapsed)
  const [sectionsCollapsed, setSectionsCollapsed] = useState({
    mathematics: true,
    physics: true,
    cs: true
  });

  // Handle section collapsing
  const toggleSection = (sectionId) => {
    setSectionsCollapsed(prevState => ({
      ...prevState,
      [sectionId]: !prevState[sectionId] // Toggle collapsed state
    }));
  };

  // Placeholder sections for your topics
  const sections = [
    {
      id: 'mathematics',
      title: 'Mathematics',
      content: 'AI-generated summary placeholder for Mathematics',
      schedule: 'AI-generated schedule placeholder for Mathematics',
      videoLinks: ['Placeholder Video Link 1', 'Placeholder Video Link 2'],
      documentLinks: ['Placeholder Document Link 1', 'Placeholder Document Link 2'],
      notes: 'AI-generated notes placeholder for Mathematics'
    },
    {
      id: 'physics',
      title: 'Physics',
      content: 'AI-generated summary placeholder for Physics',
      schedule: 'AI-generated schedule placeholder for Physics',
      videoLinks: ['Placeholder Video Link 1', 'Placeholder Video Link 2'],
      documentLinks: ['Placeholder Document Link 1', 'Placeholder Document Link 2'],
      notes: 'AI-generated notes placeholder for Physics'
    },
    {
      id: 'cs',
      title: 'Computer Science',
      content: 'AI-generated summary placeholder for Computer Science',
      schedule: 'AI-generated schedule placeholder for Computer Science',
      videoLinks: ['Placeholder Video Link 1', 'Placeholder Video Link 2'],
      documentLinks: ['Placeholder Document Link 1', 'Placeholder Document Link 2'],
      notes: 'AI-generated notes placeholder for Computer Science'
    }
  ];

  return (
    <div className="study-plan-page">
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h1 className="mb-0">Acetest.AI</h1>
            <h2 className="h4 mt-2 mb-3">Study Plan</h2>
          </div>
        </div>
      </header>

      <main className="container mt-3">
        {sections.map((section, index) => (
          <section key={index} className="mb-4 study-section">
            <h3 className="mb-3">
              {section.title}
              <button
                className="btn btn-sm btn-outline-secondary ml-2"
                onClick={() => toggleSection(section.id)}
              >
                Toggle
              </button>
            </h3>

            {/* If the section is collapsed, do not show the content */}
            {!sectionsCollapsed[section.id] && (
              <div className="row">
                <div className="col-md-6 mb-3">
                  <table className="table table-bordered table-hover study-table">
                    <thead>
                      <tr>
                        <th colSpan="2">Study Materials</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Video Links</td>
                        <td>
                          <ul>
                            {section.videoLinks.map((link, i) => (
                              <li key={i}>
                                <a href="#" className="ai-placeholder">{link}</a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Summary</td>
                        <td className="ai-placeholder">{section.content}</td>
                      </tr>
                      <tr>
                        <td>Documents</td>
                        <td>
                          <ul>
                            {section.documentLinks.map((link, i) => (
                              <li key={i}>
                                <a href="#" className="ai-placeholder">{link}</a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Notes</td>
                        <td className="ai-placeholder">{section.notes}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6 mb-3">
                  <table className="table table-bordered table-hover study-table">
                    <thead>
                      <tr>
                        <th>Daytime Schedule</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ai-placeholder">{section.schedule}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Motivational quotes */}
        <div className="text-center my-4">
          <p className="lead font-italic">Believe in yourself and all that you are.</p>
        </div>
        <div className="text-center my-4">
          <p className="lead font-italic">Your potential is limitless. Keep pushing forward.</p>
        </div>
      </main>

      <footer className="bg-dark text-white py-3 mt-4">
        <div className="container text-center">
          <p className="mb-0">&copy; 2023 Acetest.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StudyPlanPage;
