var app = angular.module("meetupApp", []);

app.controller("destinationController", function($scope){
    $scope.destinations = [];
    $scope.newDestination = {name: '',country: '', city: '', zipcode: '', start_time: '', duration: '', description: ''}
    
    $scope.post = function(){
        
        $scope.destinations.push($scope.newDestination);
        $scope.newDestination = {name: '',country: '', city: '', zipcode: '', start_time: '', duration: '', description: ''}
    }
})