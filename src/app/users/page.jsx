async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

const UserItem = ({ user }) => {
  return (
    <div className="item">
      <div>
        <div className="item-title " key={user.id}>{`${user.id}.${user.name}`}</div>
        <div>{user.name}</div>
      </div>
      <span aria-hidden>--</span>
    </div>
  )
}

const UsersPage = async () => {
  const users = await getUsers()
  console.log('users ', users)
  return (
    <section className="content">
      <h2 className="section-title">Users</h2>
      <div className="users-list">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />
        })}
      </div>
    </section>
  )
}

export default UsersPage
