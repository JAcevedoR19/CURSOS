import React from 'react'
import Users from '@/Components/Users';


async function fetchUsers() {
  const endPoint = 'https://reqres.in/api/users'     
  const response = await fetch(endPoint);
  const dataJson = await response.json();
  return dataJson.data
  
}


async function IndexPage() {
  const users = await fetchUsers()
  return (
      <Users users={users} />   
  )
}

export default IndexPage

