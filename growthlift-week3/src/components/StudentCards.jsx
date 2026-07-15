import Card from "./Card";

function StudentCards() {
  const students = [
    {
      id: 1,
      name: "Zahab",
      city: "Lahore"
    },
    {
      id: 2,
      name: "Sara",
      city: "Karachi"
    },
    {
      id: 3,
      name: "Ahmed",
      city: "Islamabad"
    }
  ];

  return (
    <div>
      <h2>Students</h2>

      {students.map((student) => (
        <Card
          key={student.id}
          title={student.name}
          description={student.city}
          color="royalblue"
        />
      ))}
    </div>
  );
}

export default StudentCards;