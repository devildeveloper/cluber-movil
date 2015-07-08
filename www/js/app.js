 // Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
.factory('segue',function(){
  var benefit={
    data : {}
  }
  return benefit;
})
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller:'HomeController'
    })
    .state('nueva tarjeta', {
      url: "/nueva_tarjeta",
      templateUrl: "templates/nueva_tarjeta.html",
      controller:'nuevaTarjetaController'
    })    
    .state('valida tarjeta', {
      url: "/valida_tarjeta_1",
      templateUrl: "templates/valida_tarjeta_1.html",
      controller:'nuevaTarjetaController'
    })     
    .state('valida tarjeta 2', {
      url: "/valida_tarjeta_2",
      templateUrl: "templates/valida_tarjeta_2.html",
      controller:'nuevaTarjetaController'
    })   
    .state('valida tarjeta 3', {
      url: "/valida_tarjeta_3",
      templateUrl: "templates/valida_tarjeta_3.html",
      controller:'nuevaTarjetaController'
    })      
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller:'nuevaTarjetaController'
    })      
    .state('account status', {
      url: "/accountStatus",
      templateUrl: "templates/estado_cuenta.html",
      controller:'nuevaTarjetaController'
    })  
    .state('new card', {
      url: "/newCard",
      templateUrl: "templates/nueva_tarjeta.html",
      controller:'nuevaTarjetaController'
    })      
    .state('forgot password', {
      url: "/forgot",
      templateUrl: "templates/recu_pass.html",
      controller:'nuevaTarjetaController'
    }) 
    .state('password sended', {
      url: "/sended",
      templateUrl: "templates/pass_send.html",
      controller:'nuevaTarjetaController'
    })     
    .state('destacados', {
      url: "/destacados",
      templateUrl: "templates/destacados.html",
      controller:'destacadosController',
      cache: false
    })
    .state('detalle', {
      url: "/detail",
      templateUrl: "templates/detail_benefit.html",
      controller:'detailBenefitController',
    })    
    .state('myProfile', {
      url: "/profile",
      templateUrl: "templates/profile.html",

      controller:'profileController'
    })     
    .state('cupones', {
      url: "/cupones",
      controller:'profileController',
      views:{
        'tab-cupon':{
          templateUrl:'templates/tabs/cupones.html',
          controller:'profileController',
        }
      }
    }) 
    .state('sorteos', {
      url: "/sorteos",
      controller:'profileController',
      views:{
        'tab-sorteos':{
          templateUrl:'templates/tabs/sorteos.html',
          controller:'profileController',
        }
      }      
    })               
   $urlRouterProvider.otherwise("/home");
   $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');
})
