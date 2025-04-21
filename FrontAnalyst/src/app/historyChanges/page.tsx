import Image from "next/image";
import styles from "./page.module.css";

interface Change {
    date: string;
    time: string;
    product: string;
    amount: number;
}

export default async function Home() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/changes_history/view_last_changes/`,
        {cache: 'no-store'}
    );
    
    const raw = await res.json();
    const changes: Change[] = JSON.parse(raw);
    console.log("Tipo real de `changes`:", typeof changes);
    console.log("¿Es arreglo?", Array.isArray(changes));
    console.log("Contenido:", changes);
    
    return (
        <div className="styles.container">
            <h1>Tabla de cambios</h1>
            <p className="letter">Última hora de actualización: {new Date().toLocaleTimeString()}</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className="letter">Fecha</th>
                        <th className="letter">Hora</th>
                        <th className="letter">Producto</th>
                        <th className="letter">Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {changes.map((change) => (
                        <tr key={change.date + change.time}>
                            <td className="letter">{change.date}</td>
                            <td className="letter">{change.time}</td>
                            <td className="letter">{change.product}</td>
                            <td className="letter">{change.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}