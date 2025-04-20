import Image from "next/image";

interface Change {
    date: string;
    time: string;
    product: string;
    amount: number;
}

export default async function Home() {
    const res = await fetch(
        'http://localhost:8000/changes_history/view_last_changes/',
        {cache: 'no-store'}
    );
    
    const raw = await res.json();
    const changes: Change[] = JSON.parse(raw);
    console.log("Tipo real de `changes`:", typeof changes);
    console.log("¿Es arreglo?", Array.isArray(changes));
    console.log("Contenido:", changes);
    
    return (
        <div>
            <h1>Tabla de cambios</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {changes.map((change) => (
                        <tr key={change.date + change.time}>
                            <td>{change.date}</td>
                            <td>{change.time}</td>
                            <td>{change.product}</td>
                            <td>{change.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}