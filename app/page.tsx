// app/page.tsx – GRADIENT 100% FORȚAT CU CSS INLINE
import Link from "next/link";

export default function Home() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1.5rem",
        background: "linear-gradient(to bottom right, #dbeafe, #ffffff, #fee2e2)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "32rem" }}>
        <h1 
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            background: "linear-gradient(to right, #2563eb, #dc2626)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          PC Builder România & UK
        </h1>
        <p 
          style={{
            fontSize: "1.25rem",
            color: "#374151",
            marginBottom: "3rem",
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Configurează-ți PC-ul perfect cu prețuri reale de la eMAG, PC Garage, Amazon UK, Currys și alții
        </p>
        <a
          href="/builder"
          style={{
            display: "inline-block",
            background: "linear-gradient(to right, #2563eb, #dc2626)",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
            padding: "2rem 4rem",
            borderRadius: "2rem",
            textDecoration: "none",
            boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          Începe Configurarea ACUM
        </a>
      </div>
    </div>
  );
}
