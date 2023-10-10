export default function Root() {
  return (
    <section
      style={{
        borderColor: "blue",
        textAlign: "center",
        borderWidth: "2px",
        borderStyle: "solid",
        height: "100%",
      }}
    >
      <div
        style={{
          textAlign: "right",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <p
          style={{
            backgroundColor: "blue",
            width: "fit-content",
            margin: "0",
            padding: "0 4px",
          }}
        >
          About
        </p>
      </div>
      About
    </section>
  );
}
