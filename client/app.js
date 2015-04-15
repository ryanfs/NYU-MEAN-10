//configuration
var app = angular.module("myWorld", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when("/", {
      controller: "HomeCtrl",
      templateUrl: "/templates/home.html"
    })
    .when("/people", {
      controller: "PeopleCtrl",
      templateUrl: "/templates/people.html"
    })
    .when("/things", {
      controller: "ThingsCtrl",
      templateUrl: "/templates/things.html"
    });
    
    $locationProvider.html5Mode(true);
});
// services
app.factory("NavSvc", function(){
  console.log("Nav Svc is loading");
  var _tabs = [
    {
      title: "Home",
      path: "/",
      active: true
    },
    {
      title: "People",
      path: "/people"
    },
    {
      title: "Things",
      path: "/things"
    }
  ];
  return {
    tabs: _tabs,
    setTab: function(title){
      _tabs.forEach(function(tab){
        if(tab.title == title) 
          tab.active = true;
        else
          tab.active = false;
      });
    }
  };
});

//controllers
app.controller("NavCtrl", function($scope, NavSvc){
  $scope.tabs = NavSvc.tabs;
  
});
app.controller("HomeCtrl", function($scope, NavSvc){
  NavSvc.setTab("Home");
  $scope.message = "I am the home control"; 
  console.log("We're home!! This is coming from the controller");
});

app.controller("PeopleCtrl", function($scope, NavSvc){
  NavSvc.setTab("People");
  $scope.message = "I am the people control";
});

app.controller("ThingsCtrl", function($scope, NavSvc){
  NavSvc.setTab("Things");
  $scope.message = "I am the things control";
});

//directives