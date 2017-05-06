# packaged angular-cpf

This repo is for distribution on `npm` and `bower`. The source for this module is in the
[main AngularCPF repo](https://github.com/dynamicflow/angular-cpf).
Please file issues and pull requests against that repo.

## Install

You can install this package with `bower`.

### bower

```shell
bower install angular-cpf
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-cpf/cpf-validate.directive.js"></script>
```

## Usage

You can use this validator along with forms, ui-mask and regular angular validation framework.

### Just CPF Validation

The CPF fields can be validated without any other angular validation

```html
<script src="/bower_components/angular-cpf/cpf-validate.directive.js"></script>
... 
<input type="text" name="cpf" ng-model="cpf" cpf>
```

### CPF Validation + Required

The CPF fields can also be validated along with other angular directives such as `required` 

```html
<script src="/bower_components/angular-cpf/cpf-validate.directive.js"></script>
... 
<input type="text" name="cpf" ng-model="cpf" required cpf>
```

[Check Sample01](https://rawgit.com/dynamicflow/angular-cpf/master/examples/sample01/index.html)

### CPF Validation + Required + UI.Mask

The CPF fields can also be formatted using regular ui.mask templates such as:
 
```html
<input type="text" name="cpf" ng-model="cpf" cpf required
    ui-mask="999.999.999-99" ui-mask-placeholder ui-mask-placeholder-char="_" >
```

[Check Sample02](https://rawgit.com/dynamicflow/angular-cpf/master/examples/sample02/index.html)