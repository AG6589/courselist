export default function Navbar({ theme, toggleTheme }) {
    return (
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 20px",
        borderBottom: `1px solid var(--border)`,
        position: "sticky",
        top: 0,
        backdropFilter: "blur(8px)",
        background: "transparent",
        zIndex: 10
      }}>
        <div style={{ fontWeight: 800, letterSpacing: 0.3, fontSize: 20 }}>
          Course<span style={{ color: "var(--primary)" }}>Hub</span>
        </div>
  
        <button
          onClick={toggleTheme}
          style={{
            border: `1px solid var(--border)`,
            background: "var(--card)",
            color: "var(--text)",
            padding: "8px 12px",
            borderRadius: 10,
            boxShadow: "var(--shadow)",
            cursor: "pointer"
          }}
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>
    );
  }
  