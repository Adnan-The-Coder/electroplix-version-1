"use client";

import React, { useState } from 'react';
import data from '@/data/data.json'; // Adjust the path as necessary

interface DocItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  preview: string;
  code: string;
  installation: string;
}

const Page: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DocItem | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const handleTitleClick = (id: string) => {
    const item = data.find(doc => doc.id === id);
    if (item) {
      setSelectedItem(item);
      setActiveTab('preview'); // Default to 'preview' tab when a new item is selected
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ width: '250px', borderRight: '1px solid #ddd', backgroundColor: '#333', color: '#fff', overflowY: 'auto', maxHeight: '100vh' }}>
        {/* Sidebar with dark background, light text, and scrollable content */}
        <h2 style={{ padding: '10px' }}>Documentation</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {data.map(doc => (
            <li key={doc.id} style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => handleTitleClick(doc.id)} 
                style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: '10px', 
                  backgroundColor: '#444', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                {doc.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', color: '#000' }}>
        {/* Main content area with light background and dark text */}
        {selectedItem ? (
          <>
            <h1>{selectedItem.title}</h1>
            <h2>{selectedItem.subtitle}</h2>
            <p>{selectedItem.description}</p>

            <div style={{ marginBottom: '20px' }}>
              <button 
                onClick={() => setActiveTab('preview')} 
                style={{ 
                  marginRight: '10px', 
                  padding: '10px', 
                  backgroundColor: '#007bff', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                Preview
              </button>
              <button 
                onClick={() => setActiveTab('code')} 
                style={{ 
                  padding: '10px', 
                  backgroundColor: '#007bff', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                Code
              </button>
            </div>

            <div style={{ marginTop: '20px' }}>
              {activeTab === 'preview' ? (
                <div dangerouslySetInnerHTML={{ __html: selectedItem.preview }} />
              ) : (
                <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
                  {selectedItem.code}
                </pre>
              )}
            </div>

            <div style={{ marginTop: '20px' }}>
              <h3>Installation Guide</h3>
              <p>{selectedItem.installation}</p>
            </div>
          </>
        ) : (
          <p>Please select a documentation item from the sidebar.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
