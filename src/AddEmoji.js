import React from 'react';
import './css/common.css';
import './css/addEmoji.css';

class AddEmoji extends React.Component {
  render() {
    return (
      <div className={'add-emoji-container centre-content-both '}>
        <main className="centre-content-both ">
          <form onSubmit={this.props.addEmoji.bind(this.props.AppThis)}>
            {/* TODO: Add https://www.cssscript.com/emoji-picker-button/ */}
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
