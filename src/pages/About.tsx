export default function About() {
  return (
    <section style={{ padding: '80px 0 0' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <span
          style={{
            fontSize: 12,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--color-terracotta)',
            fontWeight: 600,
          }}
        >
          Our Story
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 6vw, 80px)',
            lineHeight: 1.05,
            color: 'var(--color-brown-dark)',
            marginTop: 16,
            marginBottom: 32,
          }}
        >
          Made slowly, served warmly.
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            fontSize: 17,
            lineHeight: 1.75,
            color: 'var(--color-brown)',
          }}
        >
          <p>
            Alchenny began at a flour-dusted kitchen table — a place where mornings smelled
            of toasted butter and afternoons sounded like the rhythm of a wooden spoon against
            a ceramic bowl.
          </p>
          <p>
            We believe baking is its own kind of meditation. A practice. A way of making the
            ordinary feel a little more sacred. That belief shapes everything we offer here —
            from heirloom recipes refined over decades, to the linens, tools, and aprons we
            design for the considered kitchen.
          </p>
          <p>
            Every product is made in small batches by people who care, with materials that
            age beautifully. Every recipe is tested, retested, and rooted in something real.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22 }}>
            Thank you for baking with us.
          </p>
        </div>
      </div>
    </section>
  );
}
