/**
 * Forms
 */
import $ from 'jquery'

$('.form__nojs').addClass('form__nojs--hidden');

var resetForm = function ($form) {
  $form[0].reset();
};

var errorForm = function ($form, data) {
  $('.contact--thanks__error').show();
  $('.contact--thanks__success').hide();

  $form.find('.form__message').show();

  $('.form__save')
    .attr('disabled', false)
    .val('Submit again');

  // Normalize Thanks page
  $(document).on('click', '.contact--thanks__back', function () {
    $('.contact--thanks__error').hide();
    $('.contact--thanks__success').show();
  });
};

$('.form').submit(function () {
  var $form = $(this);
  var formData = $form.serializeArray();
  var success = true;

  $('.form__save')
    .attr('disabled', true)
    .val('Sending...');

  $.post('/api/contact', formData, function (data) {
    if (data.success === true) {
      resetForm($form);
    } else if (data.error) {
      errorForm($form, data);
      success = false;
    }
  }, 'json');

  setTimeout(function () {

    // Prevent thanks page from being shown if form is already submitted
    if (success) {
      window.location.hash = 'contact/thanks';

      $('.contact').find('video')[0].play();
    }
  }, 500);

  return false;
});
