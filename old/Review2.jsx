// import { bookService } from "../services/book-service.js";

// export class Review extends React.Component {

//     state = {
//         reviewToAdd: bookService.getEmpty()
//     }

//     onInputChange = (ev) => {
//         console.log('Input:', ev.target.name);
//         console.log('Changed', ev.target.value);
//         const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
//         this.setState({ reviewToAdd: ev.target.value })
//     }

//     addPet = (ev) => {
//         ev.preventDefault();
//         console.log('Adding Pet');
//         bookService.save(this.state.review)
//         // eventBus.emit('notify', { msg: 'Pet Saved', type: 'fail' })
//         // this.props.history.push('/pet')
//     }

//     onInputChange = (ev) => {
//         console.log('Input:', ev.target.name);
//         console.log('Changed', ev.target.value);
//         const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
//         this.setState({ reviewToAdd: ev.target.value } })
//     }


//     render() {
//         return (
//             <div >

//                 <input ref={ this.elInput } name="name" value={ this.state.reviewToAdd }
//                     placeholder="Review" type="text"
//                     onChange={ this.onInputChange }
//                 />

                
//                 <button onClick={ this.addPet }>Save Pet</button>
//             </div>


//         )    }
// }

