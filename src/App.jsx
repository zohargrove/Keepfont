import { useState, useEffect } from "react";

const fonts = [
  {
    id: 1,
    name: "A BOROUGH",
    category: "Display",
    style: "Cultural / Brooklyn",
    price: 19,
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
    price: 22,
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
    price: 25,
    originalPrice: 39,
    launch: true,
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
  { id: "display", label: "Best Display", icon: "◈", desc: "Big, bold, unforgettable" },
  { id: "cultural", label: "Best Cultural Font", icon: "◉", desc: "Rooted in community & identity" },
  { id: "script", label: "Best Script", icon: "✦", desc: "Flow, rhythm, personality" },
  { id: "minimal", label: "Best Minimal", icon: "◻", desc: "Less is everything" },
  { id: "newcomer", label: "Best Newcomer", icon: "★", desc: "Freshest debut of the year" },
];

const pastWinners = [
  { year: "2024", award: "Best Cultural Font", name: "A BOROUGH", artist: "Zo Hargrove", previewImage: "/preview-aborough.png", color: "#FFD700" },
  { year: "2024", award: "Best Display", name: "HYPERBOLIC", artist: "Zo Hargrove", previewImage: "/preview-hyperbolic.png", color: "#00FF88" },
  { year: "2024", award: "Best Newcomer", name: "CLEAN KICKS", artist: "Zo Hargrove", previewImage: "/preview-cleankicks.png", color: "#FF3B00" },
];

// ─── Alphabet Specimen Modal ───────────────────────────────────────────────
function SpecimenModal({ font, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

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
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "16px",
        backdropFilter: "blur(4px)",
        overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0D0D0D",
          border: `1px solid ${font.color}33`,
          maxWidth: "860px",
          width: "100%",
          marginTop: "auto",
          marginBottom: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Modal header */}
        <div style={{
          padding: "20px 24px",
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
              color: "#666", width: "40px", height: "40px",
              fontSize: "18px", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Specimen image — scrollable on mobile */}
        <div style={{
          background: "#060606",
          padding: "24px",
          overflowX: "auto",
        }}>
          <img
            src={font.specimenImage}
            alt={`${font.name} full alphabet specimen`}
            style={{
              width: "100%",
              minWidth: "320px",
              height: "auto",
< truncated lines 156-450 >
                  </div>
                  <button onClick={() => voteForFont(font.id)} style={{ background: votedFor[font.id] ? "#111" : font.color, color: votedFor[font.id] ? "#444" : "#0A0A0A", border: `1px solid ${votedFor[font.id] ? "#2A2A2A" : font.color}`, padding: "12px", fontSize: "11px", fontWeight: "900", letterSpacing: "3px", textTransform: "uppercase", cursor: votedFor[font.id] ? "default" : "pointer", transition: "all 0.2s" }}>
                    {votedFor[font.id] ? "✓ Voted" : "Vote"}
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
                  Submit & Pay $9 →
                </button>
              </div>
            </>
          ) : (
            <div>
              <div style={{ fontSize: "72px", marginBottom: "24px" }}>🏆</div>
              <h2 style={{ fontSize: "clamp(48px, 7vw, 80px)", fontWeight: "900", letterSpacing: "-3px", lineHeight: 0.92, marginBottom: "20px" }}>
                You're<br /><span style={{ color: "#FFD700" }}>In.</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.8", maxWidth: "400px" }}>
                Your font has been submitted to The Keeps 2025. Community voting opens in 2 weeks. We'll email you when it goes live.
              </p>
              <button onClick={() => { setSubmitted(false); setActiveTab("awards"); }} style={{ marginTop: "40px", background: "transparent", border: "1px solid #FFD700", color: "#FFD700", padding: "14px 32px", fontSize: "11px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer" }}>
                View The Keeps →
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
              <span onClick={() => setActiveTab("browse")} style={{ color: "#FFD700", cursor: "pointer", textDecoration: "underline" }}>Browse fonts →</span>
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
                  <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#444", textTransform: "uppercase", marginBottom: "8px" }}>Total — {cart.length} font{cart.length > 1 ? "s" : ""}</div>
                  <div style={{ fontSize: "40px", fontWeight: "900", color: "#FFD700" }}>${total}</div>
                </div>
                <button
                  onClick={async () => {
                    try {
                      const res = await fetch("/api/checkout.mjs", {
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