let immediatelyInvokedFunction = (() => {
  let guestName = prompt("what is your name?", "guest");
  let root = document.getElementById("root");

  let welcome = root.appendChild(document.createElement("h2"));
  welcome.innerText = `Welcome, stinky ${guestName}`;
})();
