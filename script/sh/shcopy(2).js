window.onload = function () {
    document.querySelectorAll(".hljs,div[id*=highlighter_]").forEach(a => {
        var div = "<div style='display:block;margin-top:10px'>[" + getCodeType(a) + "]&nbsp&nbsp&nbsp&nbsp&nbsp<a href='javascript:void(0);' target='_self' onclick='copyCode(this)' class='shcopy' title='复制代码'>复制代码</a></div>";
        a.parentElement.insertAdjacentHTML('beforebegin', div);
    })
}

function getCodeType(s) {
    switch (s.className.replace(/syntaxhighlighter|hljs/g,"").trim().toLowerCase()) {
    case "applescript":
        return "AppleScript";
    case "actionscript3":
    case "as3":
        return "Actionscript3";
    case "asm":
    case "assembly":
        return "ASM";
    case "bash":
        return "Bash Shell";
    case "shell":
        return "Shell";
    case "coldfusion":
        return "ColdFusion";
    case "cf":
        return "ColdFusion";
    case "c":
        return "C语言";
    case "cpp":
        return "C++";
    case "c#":
    case "c-sharp":
    case "csharp":
    case "cs":
        return "C#";
    case "css":
        return "CSS";
    case "delphi":
        return "Delphi";
    case "pascal":
        return "Pascal";
    case "pas":
        return "Pascal";
    case "diff":
        return "Diff";
    case "patch":
        return "Patch";
    case "erlang":
    case "erl":
        return "Erlang";
    case "go":
    case "golang":
        return "Go";
    case "groovy":
        return "Groovy";
    case "il":
        return "IL";
    case "java":
        return "Java";
    case "javafx":
    case "jfx":
        return "JavaFX";
    case "javascript":
    case "js":
    case "jscript":
        return "JavaScript";
    case "typescript":
        return "TypeScript";
    case "lua":
        return "LUA";
    case "objc":
    case "obj-c":
        return "Objective-C";
    case "perl":
    case "pl":
        return "Perl";
    case "php":
        return "PHP";
    case "plain":
    case "plaintext":
        return "Plain Text";
    case "py":
    case "python":
        return "Python";
    case "ruby":
    case "rb":
        return "Ruby";
    case "rails":
    case "ror":
        return "Ruby on Rails";
    case "sass":
        return "Sass";
    case "scss":
        return "Scss";
    case "scala":
        return "Scala";
    case "sql":
        return "Sql";
    case "vb":
        return "Visual Basic";
    case "vbnet":
        return "Visual Basic .NET";
    case "xml":
        return "XML";
    case "xhtml":
        return "XHTML";
    case "xslt":
        return "XSLT";
    case "html":
        return "HTML";
    case "json":
        return "JSON";
    case "kotlin":
        return "Kotlin";
    case "less":
        return "Less";
    case "makefile":
        return "Makefile";
    case "ini":
        return "INI";
    case "markdown":
        return "MarkDown";
    case "text":
        return "Plain";
    default:
        return "未知语言"
    }

}

function copyCode(a) {
    a = a.parentElement.parentElement.querySelector(".hljs,div[id*=highlighter_]");
    var input = document.createElement("textarea"),
        code = a.className.includes("hljs") ? a.innerText : (a.querySelector(".container").innerText);
    input.innerHTML = code;
    document.body.appendChild(input);
    input.select();
    if (document.execCommand("copy")) {
        alert("成功复制到了剪切板上！");
    } else {
        alert("复制失败！浏览器不支持或已禁用。");
    }
    document.body.removeChild(input);
}
