import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then((res) => res.json())
      .then(setLeaders);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Leaderboard</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((l, i) => (
            <tr key={i}>
              <td>{l.name}</td>
              <td>{l.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
