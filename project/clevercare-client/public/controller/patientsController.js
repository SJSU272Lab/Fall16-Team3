rhrApp.controller('patientsController', ["$scope", '$mdDialog', function($scope, $mdDialog) {
  
  //to be removed in code cleanup
  console.log("patientsController : going in");

  $scope.patientScreen = {};
  $scope.patientScreen.searchTerm = "";

  $scope.patientScreen.previousChancesData = [{"followup": "1", "percent": 45 },
                                              {"followup": "2", "percent": 85 },
                                              {"followup": "3", "percent": 31},
                                              {"followup": "4", "percent": 50},
                                              {"followup": "5", "percent": 61 }];

  $scope.patientScreen.patientList = [
              { 'id' : 1, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'mathew wayne' , 'contactNumber' : '1234567890' , 'status' : 'visit required' , 'followUpDueOn' : '11/06/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 7, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'allen smith' , 'contactNumber' : '1234567890' , 'status' : 'feedback required' , 'followUpDueOn' : '11/03/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 3, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'anderson cooper' , 'contactNumber' : '1234567890' , 'status' : 'feddback required' , 'followUpDueOn' : '10/01/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 4, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'barry watson' , 'contactNumber' : '1234567890' , 'status' : 'visit required' , 'followUpDueOn' : '09/03/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 5, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'bruce perry' , 'contactNumber' : '1234567890' , 'status' : 'visit required' , 'followUpDueOn' : '09/06/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 13, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'mathew wayne' , 'contactNumber' : '1234567890' , 'status' : 'visit required' , 'followUpDueOn' : '11/06/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 73, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'allen smith' , 'contactNumber' : '1234567890' , 'status' : 'feedback required' , 'followUpDueOn' : '11/03/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 33, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'anderson cooper' , 'contactNumber' : '1234567890' , 'status' : 'feddback required' , 'followUpDueOn' : '10/01/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 43, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'barry watson' , 'contactNumber' : '1234567890' , 'status' : 'visit required' , 'followUpDueOn' : '09/03/9016', 'files' : ['file1', 'file2', 'file3']},
              { 'id' : 53, 'dischargeNotes' : 'notes1', 'disease' : 'Common cold', 'age' : 28, 'email' : 'abc@gmail.com', 'name' : 'bruce perry' , 'contactNumber' : '1234567890' , 'status' : 'visit required' , 'followUpDueOn' : '09/06/9016', 'files' : ['file1', 'file2', 'file3']}
            ];
  
  $scope.patientScreen.patientListBackup = $scope.patientScreen.patientList;
  //initially keep first record selected
  $scope.patientScreen.currPatient = $scope.patientScreen.patientList[0];


  //to be removed in code cleanup
  console.log("patientsController : moving out");

  $scope.searchClicked = function(currPatient) {
      console.log("searchClicked : going in");

      console.log("Search this: " + $scope.patientScreen.searchTerm);

      searchString = $scope.patientScreen.searchTerm;
      var result = [];

      if(searchString == ''){
        result = $scope.patientScreen.patientListBackup;
      }else{
        
        searchString = searchString.toLowerCase();
        angular.forEach($scope.patientScreen.patientList, function(item){
            if(item.dischargeNotes.indexOf(searchString) !== -1
              || item.disease.indexOf(searchString) !== -1
              || item.email.indexOf(searchString) !== -1
              || item.name.indexOf(searchString) !== -1
              || item.contactNumber.indexOf(searchString) !== -1
              || item.status.indexOf(searchString) !== -1
              || item.followUpDueOn.indexOf(searchString) !== -1
              || item.files.indexOf(searchString) !== -1){
            
            result.push(item);
        }
        });
        }
      $scope.patientScreen.patientList = result;

      console.log("searchClicked : moving out");
  };

  $scope.takeFollowUp = function() {
      console.log("listItemClicked : going in");

      $scope.patientScreen.currPatient = currPatient;

      console.log("listItemClicked : moving out");
  };

  $scope.listItemClicked = function(currPatient) {
      console.log("listItemClicked : going in");

      $scope.patientScreen.currPatient = currPatient;

      console.log("listItemClicked : moving out");
  };

  $scope.editPatientDetails = function(id) {
      console.log("editPatientDetails : going in");
      console.log("editPatientDetails : moving out");
  };

  $scope.showPatientFile = function(id) {
      console.log("showPatientFile : going in");
      console.log("showPatientFile : moving out");
  };


  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: 'patientFormController',
      templateUrl: 'patientForm.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  function PatientFollowUpModalController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

}]);
