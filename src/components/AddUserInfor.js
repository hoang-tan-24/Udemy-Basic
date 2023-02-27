import React, { useState } from "react";

// class AddUserInfor extends React.Component {

//     state = {
//         name: 'Hoàng Tân',
//         age: 22,
//         address: 'Củ Chi',
//         sex: 'Nam'
//     }

//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnChangeAddress = (event) => {
//         this.setState({
//             address: event.target.value
//         })
//     }

//     handleOnChangeSex = (event) => {
//         this.setstate({
//             sex: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100 + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age,
//             address: this.state.address,
//             sex: this.state.sex
//         });
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm form {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <hr />
//                     <label>Name: </label>
//                     <input onChange={(event) => this.handleOnChangeName(event)}
//                         value={this.state.name}
//                         type="text"></input>
//                     <br />
//                     <label>Age: </label>
//                     <input onChange={(event) => this.handleOnChangeAge(event)}
//                         value={this.state.age}
//                         type="text"></input>
//                     <br />
//                     <label>Address: </label>
//                     <input onChange={(event) => this.handleOnChangeAddress(event)}
//                         value={this.state.address}
//                         type="text"></input>
//                     <br />
//                     <label>Sex: </label>
//                     <input onChange={(event) => this.handleOnChangeSex(event)}
//                         value={this.state.sex}
//                         type="text"></input>
//                     <br />
//                     <button>Submit</button>
//                 </form>
//             </div>

//         )
//     }
// }

const AddUserInfor = (props) => {

    const [name, setName] = useState('Hoàng Tân');
    const [age, setAge] = useState('23');
    const [address, setAddress] = useState('Hóc Môn');
    const [sex, setSex] = useState('Nam');

    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnChangeAddress = (event) => {
        setAddress(event.target.value)
    }

    const handleOnChangeSex = (event) => {
        setSex(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: name,
            age: age,
            address: address,
            sex: sex
        });
    }

    return (
        <div>
            My name is {name} and I'm form {address}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <hr />
                <label>Name: </label>
                <input onChange={(event) => handleOnChangeName(event)}
                    value={name}
                    type="text"></input>
                <br />
                <label>Age: </label>
                <input onChange={(event) => handleOnChangeAge(event)}
                    value={age}
                    type="text"></input>
                <br />
                <label>Address: </label>
                <input onChange={(event) => handleOnChangeAddress(event)}
                    value={address}
                    type="text"></input>
                <br />
                <label>Sex: </label>
                <input onChange={(event) => handleOnChangeSex(event)}
                    value={sex}
                    type="text"></input>
                <br />
                <button>Submit</button>
            </form>
        </div>

    )
}
export default AddUserInfor;