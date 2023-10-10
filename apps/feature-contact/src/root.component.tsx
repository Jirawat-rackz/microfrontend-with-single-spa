export default function Root() {
  return (
    <section
      style={{
        borderColor: "purple",
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
            backgroundColor: "purple",
            width: "fit-content",
            margin: "0",
            padding: "0 4px",
          }}
        >
          Contact
        </p>
      </div>
      Contact
    </section>
  );
}
