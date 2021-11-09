document.getElementById("message").addEventListener('change', function(){
  chrome.storage.local.set({"message": this.value});
});
