$(document).ready(function() {
  var step1 = $('#step1'),
      step2 = $('#step2'),
      step3 = $('#step3'),
      step4 = $('#step4');

  var buttons = $('.step');
  var oreos = $('.oreo');

  var listOfSteps = [step1, step2, step3, step4];
  var currentStep = step1;

  oreos.hide();
  currentStep.show();

  buttons.on('click', function() {
    currentStep.hide();
    currentStep = listOfSteps[this.dataset.step];
    currentStep.show();
  })

})
