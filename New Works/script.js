document.addEventListener('click', function (e) {
  if (e.target.classList.contains("plus")) {
    ++e.target.parentElement.querySelector("input").value;
  } 
  else if (e.target.classList.contains("minus")) {
    --e.target.parentElement.querySelector("input").value;
  }
  })