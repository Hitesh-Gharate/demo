var myApp = angular.module('bank', ['ngLocalize'])

myApp.controller('bankController',function($scope,getData){
	 getData.then(function(response){
         $scope.dataResponse = response.data;
     });    

})
myApp.factory('getData',function($http){
	  return $http.get('data.json', { cache: true });
})

myApp.directive('buttonDir',function(){
 return {
        template : '<div class="col-md-12 col-sm-12 col-xs-12" ng-if="dataResponse.length > 5">\
			  			<div class="pull-left col-md-6 col-sm-12 col-xs-12 buttonContainer" ng-repeat="text in dataResponse" ng-class="newwidth">\
			  			<button class="btn-default btn col-md-12 col-sm-12 col-xs-12">{{text.text}}</button>\
			  		</div>\
			  		</div>\
			  		<div class="col-md-6 col-sm-12 col-xs-12" ng-if="dataResponse.length <= 5 && dataResponse.length > 1">\
			  		  <div class="pull-left col-md-12 col-sm-12 col-xs-12 buttonContainer" ng-repeat="text in dataResponse" ng-class="newwidth">\
			  			<button class="btn-default btn col-md-12 col-sm-12 col-xs-12">{{text.text}}</button>\
			  		</div>\
			  	    </div>\
			  	    <div class="col-md-12 col-sm-12 col-xs-12" ng-if="dataResponse.length == 1">\
			  		   <div class="pull-left col-md-6 col-md-offset-3 col-sm-offset-1 col-sm-12 col-xs-12 buttonContainer" ng-repeat="text in dataResponse" ng-class="newwidth">\
			  			<button class="btn-default btn col-md-12 col-sm-12 col-xs-12">{{text.text}}</button>\
			  	     </div>\
			  	</div>'
    };
})
