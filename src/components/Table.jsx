import React from 'react'

const Table = ({ datas }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        {datas.map((data) => (
          <tr key={data.uid}>
            <td>{data.username}</td>
            <td>{data.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table