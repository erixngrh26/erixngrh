// Add event listener to show more buttons
const showMoreButtons = document.querySelectorAll('.show-more');

showMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const moreInfo = button.nextElementSibling;
    moreInfo.style.display = moreInfo.style.display === 'block' ? 'none' : 'block';
  });
});