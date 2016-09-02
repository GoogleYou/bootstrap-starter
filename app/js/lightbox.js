$('.thumbnail').click(function(){
    $('.modal-body').empty();
    var title = $(this).attr("title");
    $('.modal-title').html(title);
    $(this.innerHTML).appendTo('.modal-body');
    $('#myModal').modal({show:true}).center();
});

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                             $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                              $(window).scrollLeft()) + "px");
    return this;
}
/**
 * Created by 4schlede on 31.08.2016.
 */
