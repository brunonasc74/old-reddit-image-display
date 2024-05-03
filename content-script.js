const imgLinks = document.querySelectorAll('a');

imgLinks.forEach((imgLink) => {
  if (imgLink.innerHTML === '&lt;image&gt;') {
    const imageTag = `<img src="${imgLink.href}" alt="Image" max-width=300 max-height=300 />`;
    imgLink.innerHTML = imageTag;
  }
});
