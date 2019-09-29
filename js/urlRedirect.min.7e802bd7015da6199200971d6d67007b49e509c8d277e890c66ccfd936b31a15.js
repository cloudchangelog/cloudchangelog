function FindPageIndexAndRedirectPage(siteBaseUrl){var fileName=FindFileNameFromUrl();if(fileName==null){location.replace(href);return;}
var request=new XMLHttpRequest();url=location.href;var lastChar=url.substr(-1);if(lastChar=='/'){url=url.substring(0,url.length-1);}
url=url.substring(0,url.lastIndexOf('/'));request.open('GET',url+"/indexes",true);request.send(null);request.onreadystatechange=function(){if(request.readyState===4&&request.status===200){var pageIndexArray=request.responseText.split(';');var pageIndexDictionary={};for(i=0;i<pageIndexArray.length;i++){pageIndexArray[i]=pageIndexArray[i].trim();var temp=pageIndexArray[i].split(',');pageIndexDictionary[temp[0]]=temp[1];}
fileName=fileName.replace(/\//g,"-");pageNumber=pageIndexDictionary[fileName];if(pageNumber==null){href=siteBaseUrl;}
else if(pageNumber.match("1")){href=siteBaseUrl+"#"+fileName;}
else{href=siteBaseUrl+"page/"+pageNumber+"/#"+fileName;}
location.replace(href);return;}}}
function FindFileNameFromUrl(){var regEx=/\d{4}\/\d{2}\/\d{2}/;var result=regEx.exec(location.href);return result[0].toString();}