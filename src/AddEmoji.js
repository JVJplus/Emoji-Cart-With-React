import React from 'react';
import './css/common.css';
import './css/addEmoji.css';

class AddEmoji extends React.Component {
  render() {
    return (
      <div className={'add-emoji-container centre-content-both '}>
        <main className="centre-content-both ">
          <form onSubmit={this.props.addEmoji.bind(this.props.AppThis)}>
            {/* <a href="https://getemoji.com/">Select emojis</a> */}
            {/* TODO: Add 'browse image' after emoji input field image href  */}
            <input type="text" name="img" placeholder="Emoji" required></input>
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
            ></input>
            <input
              type="number"
              name="price"
              placeholder="Price"
              required
            ></input>
            <input
              type="number"
              name="qty"
              placeholder="Quantity"
              required
            ></input>
            <br></br>
            <input
              className="centre-content-both submit-btn"
              type="submit"
              value="ADD"
            ></input>
          </form>
        </main>
      </div>
    );
  }
}
export default AddEmoji;
