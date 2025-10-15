import React from 'react'

const Details = ({ Age, Location, Employment }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Details</h2>
      <div style={styles.detailsCard}>
        <div style={styles.detailItem}>
          <span style={styles.label}>Age:</span>
          <span style={styles.value}>{Age}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Location:</span>
          <span style={styles.value}>{Location}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Employment:</span>
          <span style={styles.value}>{Employment}</span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    marginTop: '20px',
  },
  title: {
    color: '#333',
    marginBottom: '15px',
  },
  detailsCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
  },
  detailItem: {
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '10px',
    color: '#555',
  },
  value: {
    color: '#333',
  }
};

export default Details