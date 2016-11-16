/**
*
* @descrition:常用HTML理助类
* @author: blc整理
* @data: 2016-02-04
* 
*/

var HtmlHelper: {

    //去除HTML 
    removeHtmlEleContent = function(str) {
        var myReg4 = new RegExp("&nbsp;", "g");

        str = str.replace(myReg4, " ");

        str = replaceSpace(str);

        str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
        str.value = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
        str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
        return str;
    }，

    //替换换行符为html
    replaceSignToHtml = function(str) {
        str = str.replace(/\n/g, "<br/>").replace(/\s/g, "&nbsp;").replace(/\"/g, "”").replace(/\'/g, "’");
        return str;
    }，

    //替换html为换行符
    replaceHtmlToSign = function(str) {

        var myReg1 = new RegExp("<br>", "g");
        var myReg2 = new RegExp("<br/>", "g");
        var myReg3 = new RegExp("</span>", "g");
        var myReg4 = new RegExp("&nbsp;", "g");

        str = str.replace(myReg1, "\n").replace(myReg2, "\n").replace(myReg3, "").replace(myReg4, " ");

        return str;
    }，

    //替换空白
    replaceSpace = function(str) {
        var arr = str.split("");
        var result = "";

        for (var i = 0; i < arr.length; i++) {
            var test = arr[i];
            if (" " != test && null != test && " " != test) { //去掉输入字符串里边全角，半角的空格
                result += test;
            }
        };
        return result;
    },

    //html encode
    htmlEncode0 = function(str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        s = s.replace(/\n/g, "<br>");
        return s;
    },

    //html decode
    htmlDecode = function(str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        s = s.replace(/<br>/g, "\n");
        return s;
    },

}