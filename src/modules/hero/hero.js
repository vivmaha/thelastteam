directives.directive('tltHero', [
    function () {
        return {
            controller: function ($scope) {
               $scope.style = {
                   backgroundImage : 'url(\'' + $scope.data.image + '\')',
               };
            },
            replace: true,
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'modules/hero/hero.html',
        };
    }
]);