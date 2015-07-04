/**
 * Forms
 */
(function ($) {
  'use strict';

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

    $.each(data.FieldErrors, function (element) {
      console.log(element.ErrorText);
    });

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

    $.post('?file=form', formData, function (data) {
      if (data.success === 1) {
        resetForm($form);
      } else if (data.ErrorText) {
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
}(jQuery));
