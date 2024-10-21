import React, { useState, useEffect } from 'react';
import './StudyPlanPage.css';

const StudyPlanPage = () => {
  const [testDay, setTestDay] = useState('');
  const [studyHours, setStudyHours] = useState('');
  const [stressLevel, setStressLevel] = useState('');

  // Retrieve the form data from localStorage when the component mounts
  useEffect(() => {
    const savedTestDay = localStorage.getItem('testDay');
    const savedStudyHours = localStorage.getItem('studyHours');
    const savedStressLevel = localStorage.getItem('stressLevel');

    setTestDay(savedTestDay || '');
    setStudyHours(savedStudyHours || '');
    setStressLevel(savedStressLevel || '');
  }, []);

  // Initialize all sections as collapsed (true means collapsed)
  const [sectionsCollapsed, setSectionsCollapsed] = useState({
    'consumer-behavior': true,
    'digital-marketing': true,
    'brand-strategy': true,
  });

  // Handle section collapsing
  const toggleSection = (sectionId) => {
    setSectionsCollapsed((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId], // Toggle collapsed state
    }));
  };

  // Placeholder sections for your topics
  const sections = [
    {
      id: 'consumer-behavior',
      title: 'Consumer Behavior',
      content:
        'This project focuses on the psychological, personal, and social factors that influence consumer buying decisions. It delves into market segmentation, understanding consumer needs, and how brands tailor their marketing strategies to different target audiences. The project also explores consumer decision-making models and emerging trends in consumer behavior.',
      schedule:
        '9:00 AM - 10:00 AM: Introduction to Consumer Behavior\n10:00 AM - 11:00 AM: Market Segmentation and Targeting\n11:00 AM - 12:00 PM: Consumer Decision-Making Process\n12:00 PM - 1:00 PM: Break\n1:00 PM - 2:00 PM: Psychological Factors Influencing Consumers\n2:00 PM - 3:00 PM: Social and Cultural Influences on Buying Behavior\n3:00 PM - 4:00 PM: Emerging Trends in Consumer Behavior',
      videoLinks: [
        'https://www.youtube.com/watch?v=7_3ks1HddP4',
        'https://www.youtube.com/watch?v=f5ffT2EIomU',
      ],
      documentLinks: [
        'https://www.example.com/document-consumer-behavior1',
        'https://www.example.com/document-consumer-behavior2',
      ],
      notes:
        'Consumers are influenced by many factors, including psychological, personal, social, and cultural. Brands must continuously adapt to these factors when creating marketing strategies. Key takeaway: segmentation allows brands to focus efforts effectively.',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      content:
        'This project examines the role of digital marketing strategies such as SEO, content marketing, social media marketing, and paid ads in reaching online consumers. It explores how companies can use data analytics and automation tools to optimize their online presence and drive sales. Additionally, it discusses the future of digital marketing in a rapidly changing online landscape.',
      schedule:
        '9:00 AM - 10:00 AM: Introduction to Digital Marketing\n10:00 AM - 11:00 AM: SEO and Content Marketing\n11:00 AM - 12:00 PM: Social Media Marketing Strategies\n12:00 PM - 1:00 PM: Break\n1:00 PM - 2:00 PM: Paid Advertising and ROI Analysis\n2:00 PM - 3:00 PM: Data Analytics and Automation Tools\n3:00 PM - 4:00 PM: The Future of Digital Marketing',
      videoLinks: [
        'https://www.youtube.com/watch?v=n3bKiqsfx54',
        'https://www.youtube.com/watch?v=HBaQIsXQeaY',
      ],
      documentLinks: [
        'https://www.example.com/document-digital-marketing1',
        'https://www.example.com/document-digital-marketing2',
      ],
      notes:
        'Digital marketing offers vast opportunities for businesses to reach consumers through various channels. SEO, paid ads, and content marketing are key strategies. Analytics and automation tools help in optimizing campaigns. Keep an eye on emerging trends such as AI in marketing.',
    },
    {
      id: 'brand-strategy',
      title: 'Brand Strategy',
      content:
        'This project explores how companies build and maintain a strong brand identity in a competitive market. It covers branding principles, strategies for differentiation, and the importance of brand loyalty. The project also examines the use of storytelling and emotional branding to create meaningful connections with consumers.',
      schedule:
        '9:00 AM - 10:00 AM: Fundamentals of Brand Identity\n10:00 AM - 11:00 AM: Differentiation and Competitive Advantage\n11:00 AM - 12:00 PM: Building Brand Loyalty\n12:00 PM - 1:00 PM: Break\n1:00 PM - 2:00 PM: Emotional Branding and Storytelling\n2:00 PM - 3:00 PM: Rebranding and Brand Revitalization\n3:00 PM - 4:00 PM: Measuring Brand Equity and Success',
      videoLinks: [
        'https://www.youtube.com/watch?v=gZME7Umpo1k',
        'https://www.youtube.com/watch?v=b8q5rTRJ-6A',
      ],
      documentLinks: [
        'https://www.example.com/document-brand-strategy1',
        'https://www.example.com/document-brand-strategy2',
      ],
      notes:
        'A strong brand is built through consistency, differentiation, and emotional connection. Brand loyalty is critical for long-term success, while storytelling helps brands resonate with consumers. Regularly measure brand equity to ensure continued relevance in the market.',
    },
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
        <div className="text-center mb-4">
          <h3>Your Study Plan</h3>
          <p>
            <strong>Test Day:</strong> {testDay}
          </p>
          <p>
            <strong>Hours to Study:</strong> {studyHours}
          </p>
          <p>
            <strong>Stress Level:</strong> {stressLevel}
          </p>
        </div>

        {sections.map((section, index) => (
          <section key={index} className="mb-4 study-section">
            <h3 className="mb-3">
              {section.title}
              <button
                className="ml-3 btn btn-secondary"
                onClick={() => toggleSection(section.id)}
              >
                {sectionsCollapsed[section.id] ? 'Expand' : 'Collapse'}
              </button>
            </h3>

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
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ai-placeholder"
                                >
                                  {link}
                                </a>
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
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ai-placeholder"
                                >
                                  {link}
                                </a>
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

        <div className="motivational-quote text-center">
          <p>
            Believe in yourself and all that you are. Your potential is
            limitless. Keep pushing forward.
          </p>
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
