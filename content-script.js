const imgLinks = document.querySelectorAll('a');

imgLinks.forEach((imgLink) => {
  if (imgLink.innerHTML === '&lt;image&gt;') {
    const imageTag = `<img class="ig-s" src="${imgLink.href}" alt="Image" />`;
    imgLink.innerHTML = imageTag;
  }
});
