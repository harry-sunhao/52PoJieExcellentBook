window.onload = function(){
    var body = document.body.innerHTML;
    var reg = new RegExp('highlighter_\\d+','gi');
    var arr = body.match(reg);

    for(var i=0;i<arr.length;i++)
    {

        if(arr[i]){

            var div = document.getElementById("" + arr[i] + "");
            var s = div.className;
            var s1 = s;
            var shtype;
            switch (s1) {
                case "syntaxhighlighter  applescript":
                    shtype = "AppleScript";
                    break;
                case "syntaxhighlighter  actionscript3":
                    shtype = "Actionscript3";
                    break;
                case "syntaxhighlighter  as3":
                    shtype = "Actionscript3";
                    break;
                case "syntaxhighlighter  asm":
                    shtype = "ASM";
                    break;
                case "syntaxhighlighter  bash":
                    shtype = "Bash Shell";
                    break;
                case "syntaxhighlighter  shell":
                    shtype = "Shell";
                    break;
                case "syntaxhighlighter  coldfusion":
                    shtype = "ColdFusion";
                    break;
                case "syntaxhighlighter  cf":
                    shtype = "ColdFusion";
                    break;
                case "syntaxhighlighter  c":
                    shtype = "C语言";
                    break;
                case "syntaxhighlighter  cpp":
                    shtype = "C++";
                    break;
                case "syntaxhighlighter  c#":
                    shtype = "C#";
                    break;
                case "syntaxhighlighter  c-sharp":
                    shtype = "C#";
                    break;
                case "syntaxhighlighter  cs":
                    shtype = "C#";
                    break;
                case "syntaxhighlighter  css":
                    shtype = "CSS";
                    break;
                case "syntaxhighlighter  delphi":
                    shtype = "Delphi";
                    break;
                case "syntaxhighlighter  pascal":
                    shtype = "Pascal";
                    break;
                case "syntaxhighlighter  pas":
                    shtype = "Pascal";
                    break;
                case "syntaxhighlighter  diff":
                    shtype = "Diff";
                    break;
                case "syntaxhighlighter  patch":
                    shtype = "Patch";
                    break;
                case "syntaxhighlighter  erlang":
                    shtype = "Erlang";
                    break;
                case "syntaxhighlighter  erl":
                    shtype = "Erlang";
                    break;
                case "syntaxhighlighter  go":
                    shtype = "Go";
                    break;
                case "syntaxhighlighter  golang":
                    shtype = "Go";
                    break;
                case "syntaxhighlighter  groovy":
                    shtype = "Groovy";
                    break;
                case "syntaxhighlighter  il":
                    shtype = "IL";
                    break;
                case "syntaxhighlighter  java":
                    shtype = "Java";
                    break;
                case "syntaxhighlighter  javafx":
                    shtype = "JavaFX";
                    break;
                case "syntaxhighlighter  jfx":
                    shtype = "JavaFX";
                    break;
                case "syntaxhighlighter  javascript":
                    shtype = "JavaScript";
                    break;
                case "syntaxhighlighter  js":
                    shtype = "JavaScript";
                    break;
                case "syntaxhighlighter  jscript":
                    shtype = "JavaScript";
                    break;
                case "syntaxhighlighter  lua":
                    shtype = "LUA";
                    break;
                case "syntaxhighlighter  objc":
                    shtype = "Objective-C";
                    break;
                case "syntaxhighlighter  obj-c":
                    shtype = "Objective-C";
                    break;
                case "syntaxhighlighter  perl":
                    shtype = "Perl";
                    break;
                case "syntaxhighlighter  Perl":
                    shtype = "Perl";
                    break;
                case "syntaxhighlighter  pl":
                    shtype = "Perl";
                    break;
                case "syntaxhighlighter  php":
                    shtype = "PHP";
                    break;
                case "syntaxhighlighter  text":
                    shtype = "Plain";
                    break;
                case "syntaxhighlighter  plain":
                    shtype = "Plain Text";
                    break;
                case "syntaxhighlighter  py":
                    shtype = "Python";
                    break;
                case "syntaxhighlighter  python":
                    shtype = "Python";
                    break;
                case "syntaxhighlighter  ruby":
                    shtype = "Ruby";
                    break;
                case "syntaxhighlighter  rb":
                    shtype = "Ruby";
                    break;
                case "syntaxhighlighter  rails":
                    shtype = "Ruby on Rails";
                    break;
                case "syntaxhighlighter  ror":
                    shtype = "Ruby on Rails";
                    break;
                case "syntaxhighlighter  sass":
                    shtype = "Sass";
                    break;
                case "syntaxhighlighter  scss":
                    shtype = "Scss";
                    break;
                case "syntaxhighlighter  scala":
                    shtype = "Scala";
                    break;
                case "syntaxhighlighter  sql":
                    shtype = "Sql";
                    break;
                case "syntaxhighlighter  vb":
                    shtype = "Visual Basic";
                    break;
                case "syntaxhighlighter  vbnet":
                    shtype = "Visual Basic .NET";
                    break;
                case "syntaxhighlighter  xml":
                    shtype = "XML";
                    break;
                case "syntaxhighlighter  xhtml":
                    shtype = "XHTML";
                    break;
                case "syntaxhighlighter  xslt":
                    shtype = "XSLT";
                    break;
                case "syntaxhighlighter  html":
                    shtype = "HTML";
                    break;
            }

            var ahtml = "<div style='display:block;margin-top:10px'>["+ shtype +"]&nbsp&nbsp&nbsp&nbsp&nbsp<a href='javascript:void(0);' target='_self' onclick='copyVal(\"" + arr[i] + "\",\"container\")' class='shcopy' title='复制代码'>复制代码</a></div>";

            //div.innerHTML=div.innerHTML+ahtml;
            //div.before(ahtml);
            div.insertAdjacentHTML('beforebegin', ahtml);


        }

    }

}


function copyVal(ids, codeclass, msg) {
    var copyobj = codeclass;
    var copyid = ids;
    var s = document.getElementById(""+copyid+"").getElementsByClassName(copyobj)[0].innerText;
    //var s = document.getElementsByClassName(copyobj)[0].innerText;
    var input = document.createElement("textarea");
    input.innerHTML = s;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    if (msg == null) {
        alert("成功复制到了剪切板上！");
    } else{
        alert("复制失败！浏览器不支持或已禁用。");
    }
}