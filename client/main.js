if (Meteor.isClient) {
  Template.homepage.rendered = function() {
    // $('#carousel').slick({
    //   dots: true,
    //   arrows: true
    // });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination'
    });
  }
}
