async function getUser(id) {
    const res =  await fetch (`https://reqres.in/api/users/${id}`)
    const data = await res.json();
    return data.data
}


async function userPage({params}) {
    const user = await getUser(params.id)

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>User Detail</h1>
                <div className="card">
                    <div className="card-header text-center">
                        <img src={user.avatar} alt="" style={{ width:"150px", borderRadius: "20%" }}/>
                    </div>
                    <div className="card-body">
                        <h3 className="text-dark">{user.id} {user.first_name} {user.last_name}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default userPage