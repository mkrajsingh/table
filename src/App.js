import React, { useState } from 'react';
import "./styles.css"  //Import CSS file

const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

const XTable = () => {
  const [data, setData] = useState(initialData);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA === dateB) {
        return b.views - a.views;
      }
      return dateB - dateA;
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      }
      return b.views - a.views;
    });
    setData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div className="button-container">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table className="x-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
