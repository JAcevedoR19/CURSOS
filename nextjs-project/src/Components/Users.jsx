"use client";
import { useRouter } from "next/navigation";


function Users({ users }) {
    const router = useRouter()
    return (
    <div>
        <h1 className='text-center'>Datos API</h1>
        <ul className="list-group">
            {
            users.map((user) => (
                <li key={user.id}
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                onClick={() => {
                    router.push(`/Users/${user.id}`)
                }}>
                    <div>
                    <h5>
                        <span className="text-dark">Nombre y Apellido:</span> {user.first_name} {user.last_name}
                    </h5>
                    <p>Email: {user.email}</p>
                    </div>
                    <img src={user.avatar} alt={user.email} style={{ borderRadius: "20%" }} />
                </li>
                ))
            }
        </ul>
    </div>
    );
}

export default Users
