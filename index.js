const searchFunc = () => {
  let filter = document.querySelector("input").value.toUpperCase();
  let textContainer = document.querySelectorAll(".userInputValue");

  for (let i = 0; i < textContainer.length; i++) {
    let span = textContainer[i].getElementsByTagName("span")[0];
    let textValue = span.textContent || span.innerHTML;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      textContainer[i].style.display = "";
    } else {
      textContainer[i].style.display = "none";
    }
  }
};

