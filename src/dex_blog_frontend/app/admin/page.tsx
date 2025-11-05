
import React from 'react';

// This is a placeholder page for the Admin section.
// The Floating Action Button should NOT be visible on this page.
export default function AdminPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Admin Panel</h1>
      <p>This is the main dashboard for the admin area.</p>
      <p>The Floating Action Button should not be visible here.</p>
    </div>
  );
}
