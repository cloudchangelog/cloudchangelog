function FindPageIndexAndRedirectPage(siteBaseUrl){var request=new XMLHttpRequest();request.open('GET',siteBaseUrl+"pageIndex",true);request.send(null);request.onreadystatechange=function(){if(request.readyState===4&&request.status===200){var pageIndexArray=request.responseText.split(';');var pageIndexDictionary={};for(i=0;i<pageIndexArray.length;i++){pageIndexArray[i]=pageIndexArray[i].trim();var temp=pageIndexArray[i].split(',');pageIndexDictionary[temp[0]]=temp[1];}
var fileName=FindFileNameFromUrl();pageNumber=pageIndexDictionary[fileName];if(pageNumber==null){href=siteBaseUrl;}
else if(pageNumber.match("1")){href=siteBaseUrl+"#"+fileName;}
else{href=siteBaseUrl+"page/"+pageNumber+"/#"+fileName;}
location.replace(href);return;}}}
function FindFileNameFromUrl(){var href=location.href;var urlArray=href.split('/');for(i=0;i<urlArray.length;i++){var item=urlArray[i];var regEx=/^\d{4}-\d{2}-\d{2}$/;if(item.match(regEx)){return item;}}}