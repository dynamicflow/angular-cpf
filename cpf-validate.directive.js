angular.module('angular-cpf', [])
.directive('cpf', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {

      ctrl.$validators['cpf'] = function(modelValue, viewValue) {
          var isValid = true;

          if (!ctrl.$isEmpty(modelValue)) {
              isValid = validate(modelValue);
          }
          return isValid;
      };


      function validate(str) {
        if (str == null)
            return false;

        var cpf = str.replace(/\D/g, '');

        if (cpf == '' || cpf.length != 11) return false;

        // Regex to validate strings with 11 same characters
        var regex = /([0]{11}|[1]{11}|[2]{11}|[3]{11}|[4]{11}|[5]{11}|[6]{11}|[7]{11}|[8]{11}|[9]{11})/g;
        var patt = new RegExp(regex);
        if (patt.test(cpf)) return false;

        numbers = cpf.substring(0, 9);
        digits = cpf.substring(9);
        sum = 0;
        for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0)) return false;

        numbers = cpf.substring(0, 10);
        sum = 0;
        for (i = 11; i > 1; i--) {
          sum += numbers.charAt(11 - i) * i;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        if (result != digits.charAt(1)) return false;

        return true;
      }
    }
  };
});
