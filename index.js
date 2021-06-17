function getPic(){
$.ajax({
  url: "https://source.unsplash.com/random/800x600",
  type: "GET",
})
.done(function (data) {
  /*data.items.forEach(element => { 
  });(item => {
    image = `<img src="${item.urls.regular}"/>`
  });
  $("#test").append(Image);*/
  console.log(data)
  console.log("ajax is working")
})
.fail(function (data) {
  console.log("it runs Failed")
})
.always(function (data) {
  console.log("it always run ")
});
setTimeout(function () {
  getPic();
  console.log("test")
}, 100000)}
