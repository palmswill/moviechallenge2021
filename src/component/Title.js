import React, { useRef, useContext } from "react";
import { MovieContext } from "../context/MovieContextProvider";
import logo from "../shoppng.png";

const Title = () => {
  const { setSearchWord, nomination, setErrorMessage } = useContext(
    MovieContext
  );

  const inputBar = useRef(null);
  const linkBar = useRef(null);
  const modeButton = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomination.length === 5) {
      setErrorMessage(
        "You have reached 5 nominations, please remove 1 to continue searching"
      );
    } else {
      setSearchWord(inputBar.current.value);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
    inputBar.current.value = "";
  };

  const generateLink = (nomination) => {
    let link = document.location.href;
    nomination.map((id) => (link += id + "&&"));
    link = link.substr(0, link.length - 2);

    return link;
  };
  const copyLink = () => {
    linkBar.current.select();
    linkBar.current.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  const changeMode = () => {
    if (modeButton.current.innerHTML === "Dark Mode") {
      document
        .querySelector(":root")
        .style.setProperty("--main-text-color", "black");
      document
        .querySelector(":root")
        .style.setProperty("background-color", "#DEE4E7");
      modeButton.current.innerHTML = "Light Mode";
    } else {
      document
        .querySelector(":root")
        .style.setProperty("--main-text-color", "white");
      document
        .querySelector(":root")
        .style.setProperty("background-color", "#282c34");
      modeButton.current.innerHTML = "Dark Mode";
    }

    //   document.querySelector(":root").setProperty('--main-text-color','black')
  };

  return (
    <div id="title">
      <div id="titleContainer">
        <img id="logo" src={logo} alt="shopify" />
        <span className="title text">The Shoppies</span>
        <button ref={modeButton} onClick={changeMode}>
          Dark Mode
        </button>
      </div>
      {nomination.length === 5 ? (
        <div>
          <span>{"Share it with Friends! : "} </span>
          <input
            id="linkBar"
            ref={linkBar}
            type="text"
            value={generateLink(nomination)}
            readOnly
          />
          <button type="submit" onClick={copyLink}>
            Copy
          </button>
        </div>
      ) : (
        <p>Search to Nominate Your Favorite Film!</p>
      )}
      <form onSubmit={handleSubmit}>
        <input ref={inputBar} type="text" id="searchBar" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Title;
