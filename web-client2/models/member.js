'use strict';
spaApp_members.factory("services", ['$http','$location','$route',
	function($http,$location,$route) {
    var obj = {};
    obj.getMembers = function(){
        return $http.get(serviceBase + 'members');
    }	
	obj.createMember = function (member) {
		return $http.post( serviceBase + 'members', member )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/members/index');
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/members/create')
		}
	};	
	obj.getMember = function(memberID){
        return $http.get(serviceBase + 'members/' + memberID);
    }
	
	obj.updateMember = function (member) {
	    return $http.put(serviceBase + 'members/' + member.id, member )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/members/index');
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/members/update/' + member.id)
		}	
	};	
	obj.deleteMember = function (memberID) {
	    return $http.delete(serviceBase + 'members/' + memberID)
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$route.reload();
		}
		function errorHandler( result ){
			alert("Error data")
			$route.reload();
		}	
	};	
    return obj;   
}]);