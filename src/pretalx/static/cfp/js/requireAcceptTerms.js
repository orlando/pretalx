document.addEventListener("DOMContentLoaded", function () {
  const $submitPropsalBtn = $("a[data-accept-terms='true']");
  const $requireAcceptTermsCheckbox = $("#require-accept-terms-checkbox");

  // do nothing if require-accept-terms is not enabled
  if (!$submitPropsalBtn.length) {
    return;
  }

  $requireAcceptTermsCheckbox.change(function () {
    $submitPropsalBtn.toggleClass('disabled', $(this).not(':checked'));
  });

  // make sure is set to false on every render
  $requireAcceptTermsCheckbox.prop('checked', false);
});
