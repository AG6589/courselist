import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import "./CourseList.css";

const API = "http://localhost:8000";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios
      .get(`${API}/courses`)
      .then((res) => mounted && setCourses(res.data))
      .catch(console.error)
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  
  const onEnroll = async (id, enrolled) => {
    const action = enrolled ? "Unenroll" : "Enroll";

  
    const result = await Swal.fire({
      title: `${action} this course?`,
      text: enrolled
        ? "You will be removed from this course."
        : "You will be successfully enrolled in this course.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: enrolled ? "#d33" : "#3B82F6",
      cancelButtonColor: "#6b7280",
      confirmButtonText: action,
    });

  
    if (!result.isConfirmed) return;

  
    const route = enrolled ? "unenroll" : "enroll";

    
    await axios.post(`${API}/courses/${id}/${route}`);

    
    const updated = await axios.get(`${API}/courses`);
    setCourses(updated.data);

  
    Swal.fire({
      icon: "success",
      title: `${action}ed Successfully!`,
      showConfirmButton: false,
      timer: 1200,
      toast: true,
      position: "top-end",
    });
  };

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return courses;
    return courses.filter((c) => c.title.toLowerCase().includes(term));
  }, [q, courses]);

  return (
    <div className="container">
      <div className="title-row">
        <h1 className="title">Available Courses</h1>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search courses…"
          className="search"
        />
      </div>

      <div className="grid">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : filtered.map((c) => (
              <CourseCard key={c.id} course={c} onEnroll={onEnroll} />
            ))}
      </div>

      {!loading && filtered.length === 0 && (
        <p style={{ color: "var(--muted)", marginTop: 10 }}>
          No courses match “{q}”.
        </p>
      )}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="course-card skeleton">
      <div className="sk-line sk-title" />
      <div className="sk-line sk-btn" />
    </div>
  );
}
