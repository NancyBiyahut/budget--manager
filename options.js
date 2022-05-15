jQuery(document).ready(function($){
  chrome.storage.sync.get('limit',function(budget){
      $('#limit').val(budget.limit);
  });
  $('#saveLimit').click(function(){
      var limit=$('#limit').val ();
      if(limit){
          chrome.storage.sync.set({'limit': limit}, function(){
              close();
          });
      }
  });
  $('#resetTotal').click(function(){
      chrome.storage.sync.set({'total':0},function(){
          var notifOptions = {
              type: "basic",
              iconUrl: "images/img48.png",
              title: "total reset",
              message: "total reset to 0."
      };
      chrome.notifications.create('limitNotif', notifOptions); 
      });
  });
});