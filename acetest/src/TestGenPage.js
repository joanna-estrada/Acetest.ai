import React from 'react';

const TestGenPage = () => {
  return (
    <div style={styles.container}>
      <h1>Generated Test Page</h1>
      <p>This is where the generated test information will appear.</p>
    </div>
  );
};

export default TestGenPage;

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
};
