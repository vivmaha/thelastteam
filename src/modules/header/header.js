directives.directive('tltHeader', ['$location',
    function($location) {
        return {
            controller : function($scope) {
                $scope.items = [ {
                    title : 'our school',
                    link: '/#/our-school',
                }, {
                    title : 'learning',
                    link : '/#/learning-approach',
                }, {
                    title : 'staff',
                    link : '/#/staff',
                }, {
                    title : 'tuition',
                    link : '/#/tuition',
                }, ];   
                
                $scope.isSignedIn = ($location.path().indexOf("/parents-portal") == 0);
                if ($scope.isSignedIn) {                
                    $scope.callToAction = 'pay tuition';         
                    $scope.callToActionLink = '';                               
                } else {
                    $scope.callToAction = 'schedule a tour';
                    $scope.callToActionLink = '/#/schedule-tour'
                }
                
                $scope.onCallToActionClick = function() {
                      location.href = $scope.callToActionLink;
                };      
                
                function unselectItem() {
                    for (var i = 0; i < $scope.items.length; i++) {                        
                        $scope.items[i].isSelected = false;
                    }
                }  
                
                function selectItem(item) {
                    unselectItem();
                    item.isSelected = true;
                }
                
                $scope.onItemClick = function(item) {
                    selectItem(item);
                };
                
                $scope.onItemUnClick = function(item) {
                    item.isSelected = false;
                };
            },
            replace: true,
            restrict: 'E',
            scope: {
                data : '='
            },
            templateUrl: 'modules/header/header.html',
            link : function($scope, $element) {
                $scope.element = $element[0];
                window.addEventListener('scroll', function(event) {
                    $scope.isScrolled = (window.scrollY != 0);
                    $scope.$apply();
                });
            },
        };
    }
]);