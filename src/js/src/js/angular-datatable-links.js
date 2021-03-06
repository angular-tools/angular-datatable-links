(function () {
    'use strict';

    angular.module('angularDatatableLinks', ['session'])
        .directive('ngTrLink', ['$timeout', '$session', function ($timeout, $session) {
            return {
                restrict: 'A',
                scope: {ngTrLink: '='},
                link: function ($scope, element, attrs) {
                    element.find("td").each(function () {
                        var e = angular.element(this);
                        if (!e.find('a').length) {
                            e.wrapInner('<a href="' + $scope.ngTrLink + '"></a>');
                        }
                    });
                }
            };
        }]);
})();