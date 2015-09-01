(function () {
    'use strict';

    angular.module('angularDatatableLinks', ['session'])
        .directive('ngTrLink', ['$timeout', '$session', function ($timeout, $session) {
            return {
                restrict: 'A',
                scope: {ngTrLink: '='},
                link: function ($scope, element, attrs) {
                    element.mousedown($scope.rowClick);
                },
                controller: function ($scope, $element, $session) {
                    $scope.rowClick = function () {
                        if (!$(event.target).closest('td.unclickable').length) {
                            top.location.href = /^\//.test($scope.ngTrLink) ? $scope.ngTrLink : $session.request.uri.replace(/\/$/, '') + '/' + $scope.ngTrLink;
                        }
                    };
                }
            };
        }]);
})();