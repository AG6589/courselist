import Swal from "sweetalert2";

export default function CourseCard({ course, onToggle }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>

      {course.enrolled ? (
        <button
          onClick={() => onToggle(course.id, true)}
          className="unenroll-btn"
          style={{
            background: "gray",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          Unenroll
        </button>
      ) : (
        <button
          onClick={() => onToggle(course.id, false)}
          className="enroll-btn"
          style={{
            background: "royalblue",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          Enroll
        </button>
      )}
    </div>
  );
}