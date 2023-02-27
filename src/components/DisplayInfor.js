import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'

// class DisplayInfor extends React.Component {
//     // constructor(props) {
//     //     console.log('>>> call constructor: 1');
//     //     super(props);
//     //     this.state = {
//     //         isShowListUser: true
//     //     }
//     // }

//     // componentDidMount() {
//     //     console.log('>>> call me component did mount');
//     //     setTimeout(() => { document.title = 'Hahino' }, 3000)
//     // }

//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     console.log('>>> call me component did update', this.props, prevProps);
//     //     //so sánh sự thay đổi
//     //     if (this.props.listUsers !== prevProps.listUsers) {
//     //         if (this.props.listUsers.length === 5) {
//     //             alert('You got 5 users')
//     //         };

//     //     }
//     // }

//     //ẩn danh sách list user
//     // handleShowHide = () => {
//     //     this.setState({
//     //         isShowListUser: !this.state.isShowListUser
//     //     })
//     // }

//     render() {
//         console.log('>>> call me render');
//         //destructuring array/object
//         const { listUsers } = this.props; //object
//         //props => viết tắt của Properties
//         return (
//             <div className="display-infor-container">
//                 {true && //phải là true thì listUsers mới show ra được
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>Id: {user.id}</div>
//                                     <div>Full Name: {user.name}</div>
//                                     <div>Age: {user.age}</div>
//                                     <div>Address: {user.address}</div>
//                                     <div>Sex: {user.sex}</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div> //ai lớn hơn age 18 thì biến thành màu xanh còn không thì ngược lại
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         );
//     }
// }


const DisplayInfor = (props) => {
    const { listUsers } = props; //object

    const [isShowHideListUser, setShowHideListUsers] = useState();

    const handleShowHideListUsers = () => {
        setShowHideListUsers(!isShowHideListUser);
    }

    //trong component function thì đây là componentDidMount và componentDidUpdate
    useEffect( //có thể viết nhiền hàm useEffect cùng lúc
        () => {
            setTimeout(() => { document.title = 'Hahino' }, 3000)
            if (listUsers.length === 5) //componentDidUpdate
                alert('You got 5 users')
            console.log("Call me useEffect");
        }, [listUsers] //[] nó sẽ giúp chúng ta chạy đúng một lần  console.log("Call me useEffect");
    );                 //còn khi truyền tham số [listUsers] vào nó sẽ cập nhật những thứ liên quan đến listUser

    return (
        <div className="display-infor-container">
            <div className="1" >
                <button onClick={() => { handleShowHideListUsers() }}>
                    {isShowHideListUser === true ? "Hide List User" : "Show List User"}
                </button>
            </div>
            {isShowHideListUser && //phải là true thì listUsers mới show ra được
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>Id: {user.id}</div>
                                <div>Full Name: {user.name}</div>
                                <div>Age: {user.age}</div>
                                <div>Address: {user.address}</div>
                                <div>Sex: {user.sex}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div> //ai lớn hơn age 18 thì biến thành màu xanh còn không thì ngược lại
                        )
                    })}
                </>
            }
        </div>
    );
}


export default DisplayInfor;