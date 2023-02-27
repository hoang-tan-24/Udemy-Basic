// ⁡⁣⁢⁣class component⁡
// f⁡⁣⁢⁣unction component⁡

import React, { useState } from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';

// class MyComponent extends React.Component {
// state = {
//     listUsers: [
//         { id: 1, name: 'Hoàng Tân', age: '18', address: 'Hóc Môn', sex: 'Nam' },
//         { id: 2, name: 'Hahino', age: '23', address: 'Thủ Đức', sex: 'Nam' },
//         { id: 3, name: 'Ngọc Anh', age: '20', address: 'Bình Thạnh', sex: 'Nữ' }
//     ]
// }
// handleAddNewUser = (userObj) => {
//     //⁡⁣⁢⁣Cách2⁡
//     // let listUsersNew = this.state.listUsers;
//     // listUsersNew.unshift(userObj);
//     // this.setState({
//     //     listUsers: listUsersNew
//     // })

//     //⁡⁣⁢⁣Cách1⁡
//     this.setState({
//         listUsers: [userObj, ...this.state.listUsers]
//     })
// }

// handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter(item => item.id !== userId);
//     this.setState({
//         listUsers: listUsersClone
//     })

// }

//     //⁡⁣⁢⁣JSX⁡
//     // ⁡⁣⁢⁣{⁡
//     //     ⁡⁣⁢⁣key: value⁡
//     // ⁡⁣⁢⁣}⁡
//     //⁡⁣⁢⁡⁣⁢⁣DRY: don't repeat yourselft⁡
//     render() {
//     return (
//         <div>
//             <AddUserInfor
//                 handleAddNewUser={this.handleAddNewUser}
//             />
//             <br />
//             <br />
//             <DisplayInfor
//                 listUsers={this.state.listUsers}
//                 handleDeleteUser={this.handleDeleteUser}
//             />
//         </div>
//     );
// }
// }

const MyComponent = () => {

    const [listUsers, setlistUsers] = useState(
        [
            { id: 1, name: 'Hoàng Tân', age: '18', address: 'Hóc Môn', sex: 'Nam' },
            { id: 2, name: 'Hahino', age: '23', address: 'Thủ Đức', sex: 'Nam' },
            { id: 3, name: 'Ngọc Anh', age: '20', address: 'Bình Thạnh', sex: 'Nữ' }
        ]
    );
    const handleAddNewUser = (userObj) => {
        setlistUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setlistUsers(listUsersClone)
    }
    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br />
            <br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );
}
export default MyComponent;