function Card({ title, description, color }) {
  return (
    <div
      style={{
        borderLeft: `5px solid ${color}`,
        padding: "20px",
        margin: "15px 0",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;