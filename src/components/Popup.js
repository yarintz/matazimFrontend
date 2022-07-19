import React from 'react';
import './Popup.css'


function Popup(props) {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>סגור</button>
                {props.children }
                {/* <button onClick={() => props.proceedToNextLesson}>שמור והמשך לשיעור הבא</button> */}
                {/* <input type = "text"></input> */}
            </div>
        </div> 
    ) : "";
}
export default Popup;
// import ReactDom from 'react-dom';
// import Popup from 'react-popup';

// // ReactDom.render(
// //     <Popup />,
// //     document.getElementById('popupContainer')
// // );

// /** The prompt content component */
// class Prompt extends React.Component {
//     constructor(props) {
//         super(props);
  
//         this.state = {
//             value: this.props.defaultValue
//         };
  
//         this.onChange = (e) => this._onChange(e);
//     }
  
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.value !== this.state.value) {
//             this.props.onChange(this.state.value);
//         }
//     }
  
//     _onChange(e) {
//         let value = e.target.value;
  
//         this.setState({value: value});
//     }
  
//     render() {
//         return <input type="text" placeholder={this.props.placeholder} className="mm-popup__input" value={this.state.value} onChange={this.onChange} />;
//     }
//   }
  
//   /** Prompt plugin */
//   Popup.registerPlugin('prompt', function (defaultValue, placeholder, callback) {
//     let promptValue = null;
//     let promptChange = function (value) {
//         promptValue = value;
//     };
  
//     this.create({
//         title: 'What\'s your name?',
//         content: <Prompt onChange={promptChange} placeholder={placeholder} value={defaultValue} />,
//         buttons: {
//             left: ['cancel'],
//             right: [{
//                 text: 'Save',
//                 key: '⌘+s',
//                 className: 'success',
//                 action: function () {
//                     callback(promptValue);
//                     Popup.close();
//                 }
//             }]
//         }
//     });
//   });
