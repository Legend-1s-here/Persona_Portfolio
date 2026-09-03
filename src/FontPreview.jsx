const FONTS = [
  { name: "Anton",                family: "'Anton', sans-serif" },
  { name: "Oswald",               family: "'Oswald', sans-serif" },
  { name: "Barlow Condensed",     family: "'Barlow Condensed', sans-serif" },
  { name: "Big Shoulders Display",family: "'Big Shoulders Display', sans-serif" },
  { name: "Bebas Neue",           family: "'Bebas Neue', sans-serif" },
];

const LABELS = ["ABOUT ME", "RESUME", "GITHUB LINK", "SOCIALS", "SIDE PROJECTS"];
const SIZES  = [54, 44, 36, 44, 36];
const SKEWS  = [-6, -11, -16, -3, -4];

export default function FontPreview() {
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      minHeight: '100vh',
      background: '#04060f',
      overflowX: 'auto',
    }}>
      {FONTS.map(font => (
        <div key={font.name} style={{
          flex: '1 0 0',
          minWidth: 220,
          borderRight: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '32px 24px',
          gap: 4,
        }}>
          <div style={{
            fontFamily: "'Bowlby One', sans-serif",
            fontSize: 11,
            color: '#c4001a',
            letterSpacing: 3,
            marginBottom: 20,
            textTransform: 'uppercase',
          }}>
            {font.name}
          </div>
          {LABELS.map((label, i) => (
            <span key={label} style={{
              fontFamily: font.family,
              fontStyle: 'italic',
              fontSize: SIZES[i],
              color: '#c6dbfa',
              letterSpacing: 1,
              lineHeight: 0.9,
              display: 'block',
              transform: `skewX(${SKEWS[i]}deg)`,
              whiteSpace: 'nowrap',
            }}>
              {label}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
