import React from 'react';
import './css/common.css';
import './css/addEmoji.css';
import { EmojiButton } from '@joeattardi/emoji-button';

class AddEmoji extends React.Component {
  checkEmoji() {
    let emojiDOM = document.querySelector('#emoji-field');
    let emoji = document.querySelector('#emoji-field').value;
    if (emoji.length !== 2) emojiDOM.value = '';
  }

  render() {
    window.addEventListener('DOMContentLoaded', () => {
      const button = document.querySelector('#emoji-button');
      const picker = new EmojiButton({ position: 'auto' });

      picker.on('emoji', emoji => {
        document.querySelector('#emoji-field').value = emoji.emoji;
        document.querySelector('#emoji-title').value = emoji.name;
        document.querySelector('#emoji-price').value = Math.trunc(
          Math.random() * 10 + 1
        );
        document.querySelector('#emoji-qty').value = Math.trunc(
          Math.random() * 5 + 1
        );
      });

      button.addEventListener('click', () => {
        picker.pickerVisible ? picker.hidePicker() : picker.showPicker(button);
      });
    });

    return (
      <div className={'add-emoji-container centre-content-both '}>
        <main className="centre-content-both ">
          <form
            onSubmit={this.props.addEmoji.bind(this.props.AppThis)}
            autoComplete="off"
          >
            {/* https://www.cssscript.com/emoji-picker-button/ */}
            <div className="emoji-container">
              <input
                id="emoji-field"
                type="text"
                name="img"
                placeholder="Emoji"
                required
                onChange={this.checkEmoji.bind(this)}
              ></input>
              <button type="button" id="emoji-button">
                🙂
              </button>
            </div>

            <input
              type="text"
              name="title"
              id="emoji-title"
              placeholder="Title"
              required
            ></input>

            <input
              type="number"
              name="price"
              id="emoji-price"
              placeholder="Price"
              min="0"
              required
            ></input>

            <input
              type="number"
              name="qty"
              id="emoji-qty"
              placeholder="Quantity"
              min="1"
              required
            ></input>

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
