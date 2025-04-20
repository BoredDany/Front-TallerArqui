import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Analista de tienda</h1>
      <div className="button">
        <Link href="/historyChanges" className="letter">Historial de cambios</Link>
      </div>
    </div>
  );
}
