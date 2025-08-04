import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {data.name}</h2>
      <p><b>Referral Code:</b> {data.referralCode}</p>
      <p><b>Total Donations:</b> Rs. {data.totalDonations}</p>
      <h3>Rewards / Unlockables</h3>
      <ul>
        {data.rewards.map((reward, i) => (
          <li key={i}>{reward}</li>
        ))}
      </ul>
    </div>
  );
}
