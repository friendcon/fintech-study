import React, {useState} from 'react'
import ListItem from './ListItem'

const ListComponent = () => {
    const [users, setUsers] = useState([
        {name: "홍길동", age:12, height:180},
        {name: "동", age:18, height:180},
        {name: "홍", age:16, height:180}
    ])
    return (
        <div>
            {users.map((user) => {
                return (
                    <ListItem username={user.name} age={user.age} height={user.height}></ListItem>
                )
            })}
        </div>
    )
}

export default ListComponent
