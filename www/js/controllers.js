angular.module('starter.controllers',[])
	.controller('HomeController',function($scope){
		$scope.init=function(){
			var init=document.getElementById('init');
			init.style.height = window.innerHeight+'px';
		}
		//running
		$scope.init();
	})
	.controller('nuevaTarjetaController',function($scope,$ionicHistory){
		$scope.myGoBack=function(){
			$ionicHistory.goBack();
		}
	})
	.controller('destacadosController',function($scope,$ionicSideMenuDelegate,segue){
		$scope.toggleLeft = function() {
			$ionicSideMenuDelegate.toggleLeft();
		};
		$scope.setBenefit=function(benefit){
			segue.data=benefit;
		}
	})
	.controller('detailBenefitController',function($scope,$ionicSideMenuDelegate,segue){
		$scope.toggleLeft = function() {
			$ionicSideMenuDelegate.toggleLeft();
		};
		$scope.benefit=segue.data;
	})	
	.controller('profileController',function($scope,$ionicSideMenuDelegate,$ionicTabsDelegate){
		$scope.toggleLeft = function() {
			$ionicSideMenuDelegate.toggleLeft();
		};
		$scope.tabs={
			tab1:{
				show:true
			},
			tab2:{
				show:false
			},
			activeTab:1
		},
		/*$scope.showTab=function(tab){
			if(tab === 1){
				$scope.tabs.tab1.show=true;
				$scope.tabs.tab2.show=false;
			}else{
				$scope.tabs.tab1.show=false;
				$scope.tabs.tab2.show=true;
			}
			$ionicTabsDelegate.select(tab);
		}*/
		$scope.setActiveTab=function(index){
			$scope.tabs.activeTab=index;
		}
	})	