url = "http://github.com/carbonfive/raygun"
url = "http://www.zombie-bites.com" 
url = "https://www.cnet.com"                

function domainName(url){
    url = url.replace("http://", "")
    url = url.replace("https://", "")
    url = url.replace("www.", "")
    
    return url.split(".")[0]
  }

  