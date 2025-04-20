import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Analista de tienda</h1>
      <div>
        <Link href="/historyChanges">Historial de cambios</Link>
      </div>
    </div>
  );
}
