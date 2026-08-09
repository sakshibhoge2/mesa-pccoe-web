import EngineeringBackground from "./components/EngineeringBackground";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <EngineeringBackground />

      <Navbar />

      <main className="relative z-10 min-h-screen">

        <section
          id="home"
          className="
            flex
            min-h-screen
            items-center
            justify-center
            px-6
          "
        >
          <div className="text-center">

            <p
              className="
                mb-4
                font-[var(--font-mono)]
                text-xs
                tracking-[0.25em]
                text-[var(--blueprint)]
              "
            >
              DWG-004 · REV A · STATUS: ACTIVE
            </p>

            <h1
              className="
                font-[var(--font-display)]
                text-6xl
                font-bold
                text-[var(--text-primary)]
                sm:text-7xl
                md:text-8xl
              "
            >
              MESA
            </h1>

          </div>
        </section>

      </main>
    </>
  );
}

export default App;