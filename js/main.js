//Just starting the main.js file

$('.post-grid').masonry({
  itemSelector: '.post-item',
  columnWidth: '.post-sizer',
  isFitWidth: true, 
  gutter: 30,
  horizontalOrder: true
});