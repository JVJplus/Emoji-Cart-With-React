import React from 'react';
import './css/common.css';
import './css/addEmoji.css';

class AddEmoji extends React.Component {
  myf = e => {
    e.preventDefault();
    console.log(e);

    const formData = new FormData(e.target);
    const user = {};

    e.preventDefault();

    for (let entry of formData.entries()) {
      user[entry[0]] = entry[1];
    }
    console.log(user);
  };

  render() {
    return (
      <div className={'add-emoji-container centre-content-both '}>
        <main className="centre-content-both ">
          <form onSubmit={this.myf.bind(this)}>
            <input type="text" placeholder="Emoji"></input>
            <input type="text" placeholder="Title"></input>
            <input type="number" placeholder="Price"></input>
            <input type="number" placeholder="Quantity"></input>
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
