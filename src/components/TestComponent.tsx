import React from 'react';

export const TestComponent = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      backgroundColor: 'red',
      color: 'white',
      padding: '10px',
      zIndex: 9999
    }}>
      Test Component Rendered
    </div>
  );
}
