import Swal from "sweetalert2";

export default function CourseCard({ course, onEnroll }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>

      {}
      <p
        style={{
          margin: "6px 0 12px",
          fontWeight: "600",
          color: course.enrolled ? "#22c55e" : "#9ca3af" // green / gray
        }}
      >
        {course.enrolled ? "✔ Enrolled" : "○ Not Enrolled"}
      </p>

      {course.enrolled ? (
        <button
          onClick={() => onEnroll(course.id, true)}
          className="unenroll-btn"
          style={{
            background: "#6b7280",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Unenroll
        </button>
      ) : (
        <button
          onClick={() => onEnroll(course.id, false)}
          className="enroll-btn"
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Enroll
        </button>
      )}
    </div>
  );
}
