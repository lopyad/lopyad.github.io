import "./FooterBar.css";

export default function FooterBar() {
  return (
    <footer className="footer-bar">
      <div className="footer-content">
        {/* You can add content here, e.g., copyright, links */}
        <p>&copy; {new Date().getFullYear()} Lopyad Page</p>
      </div>
    </footer>
  );
}
