import { useState, useEffect } from "react";

const fonts = [
  {
    id: 1,
    name: "A BOROUGH",
    category: "Display",
    style: "Cultural / Brooklyn",
    price: 39,
    preview: "A BOROUGH",
    fontFamily: "ABorough",
    fontFile: "/ABorough-Regular-1.ttf",
    previewImage: "/preview-aborough.png",
    specimenImage: "/alphabet-aborough.png",
    tags: ["brooklyn", "culture", "logo"],
    color: "#FFD700",
    artist: "Zo Hargrove",
    votes: 412,
    description: "Hand drawn in Brooklyn. For the culture.",
  },
  {
    id: 2,
    name: "CLEAN KICKS",
    category: "Display",
    style: "Streetwear / Sneaker",
    price: 44,
    preview: "CLEAN KICKS",
    fontFamily: "CleanKicks",
    fontFile: "/Cleankicks-Regular-3-2.ttf",
    previewImage: "/preview-cleankicks.png",
    specimenImage: "/alphabet-cleankicks.png",
    tags: ["sneaker", "streetwear", "bold"],
    color: "#FF3B00",
    artist: "Zo Hargrove",
    votes: 389,
    description: "Built for the sneaker generation.",
  },
  {
    id: 3,
    name: "HYPERBOLIC",
    category: "Display",
    style: "Futuristic / Premium",
    price: 49,
    preview: "HYPERBOLIC",
    fontFamily: "Hyperbolic",
    fontFile: "/Hyperbolic-Regular-4-1.ttf",
    previewImage: "/preview-hyperbolic.png",
    specimenImage: "/alphabet-hyperbolic.png",
    tags: ["futuristic", "premium", "tech"],
    color: "#00FF88",
    artist: "Zo Hargrove",
    votes: 534,
    description: "Beyond the ordinary. Built for the future.",
  },
];

const awardCategories = [
  { id: "display", label: "Best Display", icon: "â", desc: "Big, bold, unforgettable" },
  { id: "cultural", label: "Best Cultural Font", icon: "â", desc: "Rooted in community & identity" },
  { id: "script", label: "Best Script", icon: "â¦", desc: "Flow, rhythm, personality" },
  { id: "minimal", label: "Best Minimal", icon: "â»", desc: "Less is everything" },
  { id: "newcomer", label: "Best Newcomer", icon: "â", desc: "Freshest debut of the year" },
];

const pastWinners = [
  { year: "2024", award: "Best Cultural Font", name: "A BOROUGH", artist: "Zo Hargrove", previewImage: "/preview-aborough.png", color: "#FFD700" },
  { year: "2024", award: "Best Display", name: "HYPERBOLIC", artist: "Zo Hargrove", previewImage: "/preview-hyperbolic.png", color: "#00FF88" },
  { year: "2024", award: "Best Newcomer", name: "CLEAN KICKS", artist: "Zo Hargrove", previewImage: "/preview-cleankicks.png", color: "#FF3B00" },
];

// âââ Alphabet Specimen Modal âââââââââââââââââââââââââââââââââââââââââââââââ
function SpecimenModal({ font, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0D0D0D",
          border: `1px solid ${font.color}33`,
          maxWidth: "860px",
          width: "100%",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Modal header */}
        <div style={{
          padding: "20px 28px",
          borderBottom: "1px solid #1A1A1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div>
            <div style={{ fontSize: "9px", letterSpacing: "4px", color: font.color, textTransform: "uppercase", marginBottom: "3px" }}>
              Full Alphabet
            </div>
            <div style={{ fontSize: "16px", fontWeight: "900", letterSpacing: "1px" }}>
              {font.name}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "1px solid #2A2A2A",
              color: "#666", width: "36px", height: "36px",
              fontSize: "18px", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              lineHeight: 1, flexShrink: 0,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = font.color; e.currentTarget.style.color = font.color; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.color = "#666"; }}
            aria-label="Close"
          >
            â
          </button>
        </div>

        {/* Specimen image */}
        <div style={{
          flex: 1,
          overflow: "auto",
          background: "#060606",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px",
        }}>
          <img
            src={font.specimenImage}
            alt={`${font.name} full alphabet specimen`}
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Modal footer */}
        <div style={{
          padding: "16px 28px",
          borderTop: "1px solid #1A1A1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div style={{ fontSize: "10px", color: "#444", letterSpacing: "2px", textTransform: "uppercase" }}>
            by {font.artist} â {font.style}
          </div>
          <div style={{ fontSize: "10px", color: "#333", letterSpacing: "1px" }}>
            Press ESC or click outside to close
          </div>
        </div>
      </div>
    </div>
  );
}

// âââ Main App âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
export default function Keepfont() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredFont, setHoveredFont] = useState(null);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("browse");
  const [notification, setNotification] = useState(null);
  const [votedFor, setVotedFor] = useState({});
  const [fontVotes, setFontVotes] = useState(Object.fromEntries(fonts.map(f => [f.id, f.votes])));
  const [activeAwardCat, setActiveAwardCat] = useState("display");
  const [submitForm, setSubmitForm] = useState({ name: "", artist: "", email: "", style: "", category: "Display", awardCategory: "display" });
  const [submitted, setSubmitted] = useState(false);
  const [specimenFont, setSpecimenFont] = useState(null); // â new: which font's modal is open

  const categories = ["All", ...new Set(fonts.map(f => f.category))];
  const filtered = activeCategory === "All" ? fonts : fonts.filter(f => f.category === activeCategory);
  const sortedByVotes = [...fonts].sort((a, b) => fontVotes[b.id] - fontVotes[a.id]);
  const total = cart.reduce((sum, f) => sum + f.price, 0);

  const notify = (msg) => { setNotification(msg); setTimeout(() => setNotification(null), 2500); };

  const addToCart = (font) => {
    if (!cart.find(f => f.id === font.id)) { setCart([...cart, font]); notify(`${font.name} added to cart`); }
  };

  const voteForFont = (fontId) => {
    if (!votedFor[fontId]) {
      setFontVotes(prev => ({ ...prev, [fontId]: prev[fontId] + 1 }));
      setVotedFor(prev => ({ ...prev, [fontId]: true }));
      notify("Vote cast! ð");
    }
  };

  const handleSubmit = () => {
    if (submitForm.name && submitForm.artist && submitForm.email) { setSubmitted(true); notify("Submission received!"); }
  };

  const navTabs = [
    { id: "browse", label: "Browse" },
    { id: "awards", label: "The Keeps ð" },
    { id: "submit", label: "Submit" },
    { id: "cart", label: `Cart (${cart.length})` },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: "#F0F0F0", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", overflowX: "hidden" }}>

      {/* ââ Specimen Modal ââ */}
      {specimenFont && (
        <SpecimenModal font={specimenFont} onClose={() => setSpecimenFont(null)} />
      )}

      {notification && (
        <div style={{ position: "fixed", bottom: "32px", left: "50%", transform: "translateX(-50%)", background: "#FFD700", color: "#0A0A0A", padding: "12px 28px", fontWeight: "700", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", zIndex: 9999, animation: "fadeIn 0.2s ease", whiteSpace: "nowrap" }}>
          {notification}
        </div>
      )}

      <header style={{ borderBottom: "1px solid #1A1A1A", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", position: "sticky", top: 0, background: "#0A0A0A", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          <div style={{ fontSize: "22px", fontWeight: "900", letterSpacing: "-1px", color: "#FFD700", cursor: "pointer" }} onClick={() => setActiveTab("browse")}>
            KEEP<span style={{ color: "#F0F0F0" }}>FONT</span>
          </div>
          <nav style={{ display: "flex", gap: "28px" }}>
            {navTabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ background: "none", border: "none", color: activeTab === tab.id ? "#FFD700" : "#555", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", borderBottom: activeTab === tab.id ? "2px solid #FFD700" : "2px solid transparent", paddingBottom: "4px" }}>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div style={{ fontSize: "11px", color: "#333", letterSpacing: "2px", textTransform: "uppercase" }}>Type by Artists. For Artists.</div>
      </header>

      {/* BROWSE */}
      {activeTab === "browse" && (
        <main>
          <section style={{ padding: "80px 40px 60px", borderBottom: "1px solid #1A1A1A", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-60px", right: "-40px", fontSize: "280px", fontWeight: "900", color: "#111", lineHeight: 1, userSelect: "none", pointerEvents: "none", fontFamily: "Impact, fantasy" }}>KF</div>
            <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#FFD700", textTransform: "uppercase", marginBottom: "20px" }}>Independent Type Foundry â Brooklyn, NY</p>
            <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: "900", letterSpacing: "-3px", lineHeight: "0.95", marginBottom: "32px", maxWidth: "700px" }}>
              Fonts Built<br /><span style={{ color: "#FFD700" }}>for Culture.</span>
            </h1>
            <p style={{ fontSize: "15px", color: "#666", maxWidth: "440px", lineHeight: "1.7" }}>Every typeface in Keepfont is designed by an independent artist from Brooklyn. Built for logos, merch, music, and everything in between.</p>
          </section>

          <div style={{ padding: "24px 40px", borderBottom: "1px solid #1A1A1A", display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ background: activeCategory === cat ? "#FFD700" : "transparent", color: activeCategory === cat ? "#0A0A0A" : "#555", border: `1px solid ${activeCategory === cat ? "#FFD700" : "#2A2A2A"}`, padding: "8px 18px", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer" }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1px", background: "#1A1A1A", padding: "1px" }}>
            {filtered.map(font => (
              <div key={font.id} onMouseEnter={() => setHoveredFont(font.id)} onMouseLeave={() => setHoveredFont(null)}
                style={{ background: hoveredFont === font.id ? "#111" : "#0A0A0A", padding: "40px", transition: "background 0.2s", display: "flex", flexDirection: "column", gap: "24px", minHeight: "320px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: "10px", letterSpacing: "3px", color: font.color, textTransform: "uppercase", marginBottom: "4px" }}>{font.category}</div>
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>{font.name}</div>
                    <div style={{ fontSize: "12px", color: "#444", marginTop: "2px" }}>by {font.artist}</div>
                    <div style={{ fontSize: "11px", color: "#555", marginTop: "4px", fontStyle: "italic" }}>{font.description}</div>
                  </div>
                  <div style={{ fontSize: "22px", fontWeight: "900", color: hoveredFont === font.id ? "#FFD700" : "#2A2A2A", transition: "color 0.2s" }}>${font.price}</div>
                </div>

                {/* Font preview image */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: hoveredFont === font.id ? "#0D0D0D" : "#060606", padding: "24px", overflow: "hidden", minHeight: "140px", border: hoveredFont === font.id ? `1px solid ${font.color}22` : "1px solid #111", transition: "all 0.3s" }}>
                  <img
                    src={font.previewImage}
                    alt={font.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "120px",
                      objectFit: "contain",
                      filter: hoveredFont === font.id
                        ? `brightness(0) saturate(100%) invert(1) sepia(1) saturate(10) hue-rotate(${font.color === "#FFD700" ? "10deg" : font.color === "#FF3B00" ? "330deg" : "120deg"})`
                        : "brightness(0) invert(0.85)",
                      transition: "filter 0.3s",
                    }}
                  />
                </div>

                {/* ââ Bottom row: tags + VIEW ALPHABET + LICENSE ââ */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {font.tags.map(tag => (
                      <span key={tag} style={{ fontSize: "9px", letterSpacing: "2px", color: "#333", textTransform: "uppercase", border: "1px solid #1A1A1A", padding: "3px 8px" }}>#{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {/* View Alphabet button */}
                    <button
                      onClick={() => setSpecimenFont(font)}
                      style={{
                        flex: 1,
                        background: "transparent",
                        color: font.color,
                        border: `1px solid ${font.color}55`,
                        padding: "10px 16px",
                        fontSize: "10px",
                        fontWeight: "700",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${font.color}11`; e.currentTarget.style.borderColor = font.color; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${font.color}55`; }}
                    >
                      AâZ â
                    </button>
                    {/* License button */}
                    <button
                      onClick={() => addToCart(font)}
                      style={{
                        flex: 2,
                        background: cart.find(f => f.id === font.id) ? "#1A1A1A" : "#FFD700",
                        color: cart.find(f => f.id === font.id) ? "#444" : "#0A0A0A",
                        border: "none",
                        padding: "10px 20px",
                        fontSize: "10px",
                        fontWeight: "900",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {cart.find(f => f.id === font.id) ? "Added â" : "License"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* THE KEEPS AWARDS */}
      {activeTab === "awards" && (
        <main>
          <section style={{ padding: "80px 40px 60px", borderBottom: "1px solid #1A1A1A", background: "linear-gradient(180deg, #0C0B00 0%, #0A0A0A 100%)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(255,215,0,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#FFD700", textTransform: "uppercase", marginBottom: "16px" }}>Annual Awards â 2025 Season</p>
            <h1 style={{ fontSize: "clamp(60px, 10vw, 120px)", fontWeight: "900", letterSpacing: "-5px", lineHeight: "0.88", marginBottom: "28px" }}>
              THE<br /><span style={{ color: "#FFD700" }}>KEEPS</span>
            </h1>
            <p style={{ fontSize: "15px", color: "#666", maxWidth: "480px", lineHeight: "1.8" }}>
              The only font awards voted on by the culture. Every year, the community crowns the best independent typefaces across five categories.
            </p>
            <div style={{ display: "flex", gap: "48px", marginTop: "48px", flexWrap: "wrap" }}>
              {[["3", "Fonts Nominated"], ["5", "Award Categories"], ["$9", "Submission Fee"], ["1,300+", "Community Votes"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: "36px", fontWeight: "900", color: "#FFD700", letterSpacing: "-2px" }}>{num}</div>
                  <div style={{ fontSize: "10px", color: "#444", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ padding: "60px 40px", borderBottom: "1px solid #1A1A1A" }}>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#FFD700", textTransform: "uppercase", marginBottom: "10px" }}>Live Voting</p>
              <h2 style={{ fontSize: "36px", fontWeight: "900", letterSpacing: "-1px" }}>Cast Your Vote</h2>
            </div>

            <div style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
              {awardCategories.map(cat => (
                <button key={cat.id} onClick={() => setActiveAwardCat(cat.id)} style={{ background: activeAwardCat === cat.id ? "#FFD700" : "transparent", color: activeAwardCat === cat.id ? "#0A0A0A" : "#555", border: `1px solid ${activeAwardCat === cat.id ? "#FFD700" : "#2A2A2A"}`, padding: "10px 20px", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer" }}>
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#1A1A1A" }}>
              {sortedByVotes.map((font, i) => (
                <div key={font.id} style={{ background: "#0A0A0A", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "28px", fontWeight: "900", color: i === 0 ? "#FFD700" : "#1C1C1C" }}>#{i + 1}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ fontSize: "12px", color: "#444" }}>{fontVotes[font.id].toLocaleString()} votes</div>
                      {votedFor[font.id] && <span style={{ fontSize: "9px", background: "#FFD700", color: "#0A0A0A", padding: "2px 8px", fontWeight: "700", letterSpacing: "2px" }}>VOTED</span>}
                    </div>
                  </div>
                  <div style={{ background: "#060606", padding: "24px 20px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px" }}>
                    <img src={font.previewImage} alt={font.name} style={{ maxWidth: "100%", maxHeight: "70px", objectFit: "contain", filter: "brightness(0) invert(0.9)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "15px" }}>{font.name}</div>
                    <div style={{ fontSize: "12px", color: "#444", marginTop: "2px" }}>by {font.artist}</div>
                  </div>
                  <div style={{ height: "3px", background: "#1A1A1A" }}>
                    <div style={{ height: "100%", background: font.color, width: `${Math.min(100, (fontVotes[font.id] / 600) * 100)}%`, transition: "width 0.6s ease" }} />
                  </div>
                  <button onClick={() => voteForFont(font.id)} style={{ background: votedFor[font.id] ? "#111" : font.color, color: votedFor[font.id] ? "#444" : "#0A0A0A", border: `1px solid ${votedFor[font.id] ? "#2A2A2A" : font.color}`, padding: "12px", fontSize: "11px", fontWeight: "900", letterSpacing: "3px", textTransform: "uppercase", cursor: votedFor[font.id] ? "default" : "pointer", transition: "all 0.2s" }}>
                    {votedFor[font.id] ? "â Voted" : "Vote"}
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section style={{ padding: "60px 40px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#444", textTransform: "uppercase", marginBottom: "10px" }}>Hall of Fame</p>
            <h2 style={{ fontSize: "36px", fontWeight: "900", letterSpacing: "-1px", marginBottom: "40px" }}>Past Winners</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "#1A1A1A" }}>
              {pastWinners.map((w, i) => (
                <div key={i} style={{ background: "#0A0A0A", padding: "36px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#FFD700", textTransform: "uppercase", marginBottom: "4px" }}>{w.year}</div>
                  <div style={{ fontSize: "11px", color: "#555", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>{w.award}</div>
                  <img src={w.previewImage} alt={w.name} style={{ maxWidth: "100%", maxHeight: "60px", objectFit: "contain", filter: "brightness(0) invert(0.8)", marginBottom: "16px" }} />
                  <div style={{ fontSize: "12px", color: "#444" }}>by {w.artist}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* SUBMIT */}
      {activeTab === "submit" && (
        <main style={{ padding: "80px 40px", maxWidth: "680px" }}>
          {!submitted ? (
            <>
              <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#FFD700", textTransform: "uppercase", marginBottom: "16px" }}>The Keeps 2025</p>
              <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: "900", letterSpacing: "-3px", lineHeight: 0.95, marginBottom: "16px" }}>
                Submit Your<br /><span style={{ color: "#FFD700" }}>Font.</span>
              </h2>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8", marginBottom: "48px" }}>
                Open to all independent type designers. One font per submission. A $9 submission fee keeps the awards running and the community strong.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { label: "Font Name", key: "name", placeholder: "e.g. A BOROUGH" },
                  { label: "Your Artist Name", key: "artist", placeholder: "e.g. Zo Hargrove" },
                  { label: "Your Email", key: "email", placeholder: "you@example.com" },
                  { label: "Style Description", key: "style", placeholder: "e.g. Bold Display / Cultural" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontSize: "10px", letterSpacing: "3px", color: "#555", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{field.label}</label>
                    <input value={submitForm[field.key]} onChange={e => setSubmitForm(p => ({ ...p, [field.key]: e.target.value }))} placeholder={field.placeholder} style={{ width: "100%", background: "#111", border: "1px solid #2A2A2A", color: "#F0F0F0", padding: "16px 20px", fontSize: "14px", outline: "none" }} />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize: "10px", letterSpacing: "3px", color: "#555", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Font Category</label>
                  <select value={submitForm.category} onChange={e => setSubmitForm(p => ({ ...p, category: e.target.value }))} style={{ width: "100%", background: "#111", border: "1px solid #2A2A2A", color: "#F0F0F0", padding: "16px 20px", fontSize: "14px", outline: "none" }}>
                    {["Display", "Serif", "Script", "Monospace", "Slab Serif", "Sans Serif"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <div style={{ marginTop: "8px", padding: "24px", background: "#0C0C0C", border: "1px solid #2A2A2A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#444", textTransform: "uppercase" }}>Submission Fee</div>
                    <div style={{ fontSize: "32px", fontWeight: "900", color: "#FFD700", marginTop: "6px" }}>$9</div>
                  </div>
                  <div style={{ fontSize: "12px", color: "#444", maxWidth: "200px", lineHeight: "1.7" }}>Funds the awards, community features & winner prizes</div>
                </div>

                <button onClick={handleSubmit} style={{ background: "#FFD700", color: "#0A0A0A", border: "none", padding: "20px", fontSize: "13px", fontWeight: "900", letterSpacing: "4px", textTransform: "uppercase", cursor: "pointer" }}>
                  Submit & Pay $9 â
                </button>
              </div>
            </>
          ) : (
            <div>
              <div style={{ fontSize: "72px", marginBottom: "24px" }}>ð</div>
              <h2 style={{ fontSize: "clamp(48px, 7vw, 80px)", fontWeight: "900", letterSpacing: "-3px", lineHeight: 0.92, marginBottom: "20px" }}>
                You're<br /><span style={{ color: "#FFD700" }}>In.</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.8", maxWidth: "400px" }}>
                Your font has been submitted to The Keeps 2025. Community voting opens in 2 weeks. We'll email you when it goes live.
              </p>
              <button onClick={() => { setSubmitted(false); setActiveTab("awards"); }} style={{ marginTop: "40px", background: "transparent", border: "1px solid #FFD700", color: "#FFD700", padding: "14px 32px", fontSize: "11px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer" }}>
                View The Keeps â
              </button>
            </div>
          )}
        </main>
      )}

      {/* CART */}
      {activeTab === "cart" && (
        <main style={{ padding: "60px 40px", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: "900", letterSpacing: "-2px", marginBottom: "48px" }}>
            Your <span style={{ color: "#FFD700" }}>Licenses</span>
          </h2>
          {cart.length === 0 ? (
            <div style={{ color: "#444", fontSize: "16px" }}>
              No fonts yet.{" "}
              <span onClick={() => setActiveTab("browse")} style={{ color: "#FFD700", cursor: "pointer", textDecoration: "underline" }}>Browse fonts â</span>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1A1A1A" }}>
                {cart.map(font => (
                  <div key={font.id} style={{ background: "#0A0A0A", padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "10px", letterSpacing: "3px", color: font.color, textTransform: "uppercase", marginBottom: "4px" }}>{font.category}</div>
                      <div style={{ fontWeight: "700", fontSize: "18px" }}>{font.name}</div>
                      <div style={{ fontSize: "12px", color: "#444", marginTop: "2px" }}>by {font.artist}</div>
                    </div>
                    <img src={font.previewImage} alt={font.name} style={{ maxHeight: "40px", objectFit: "contain", filter: "brightness(0) invert(0.6)" }} />
                    <div style={{ fontSize: "20px", fontWeight: "900", color: "#FFD700" }}>${font.price}</div>
                    <button onClick={() => setCart(cart.filter(f => f.id !== font.id))} style={{ background: "none", border: "1px solid #2A2A2A", color: "#444", padding: "8px 14px", fontSize: "11px", cursor: "pointer", letterSpacing: "1px" }}>Remove</button>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "1px", padding: "32px", background: "#111", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#444", textTransform: "uppercase", marginBottom: "8px" }}>Total â {cart.length} font{cart.length > 1 ? "s" : ""}</div>
                  <div style={{ fontSize: "40px", fontWeight: "900", color: "#FFD700" }}>${total}</div>
                </div>
                <button
  onClick={async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else notify("Checkout error — try again");
    } catch (err) {
      notify("Checkout error — try again");
    }
  }}
  style={{ background: "#FFD700", color: "#0A0A0A", border: "none", padding: "18px 48px", fontSize: "13px", fontWeight: "900", letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer" }}>
  Checkout →
</button>
              </div>
            </>
          )}
        </main>
      )}

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-50%) translateY(10px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        button:focus, input:focus, select:focus { outline: none; }
        input:focus, select:focus { border-color: #FFD700 !important; }
        select option { background: #111; color: #F0F0F0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #2A2A2A; }
      `}</style>
    </div>
  );
}
