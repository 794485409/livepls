/**
 * Created by Administrator on 2016/4/5.
 */
$(function(){
//��֤
    var filedTip = "alert-danger";
    var successTip = "alert-success";
//������ʽ

//�û���������ʽ
    var userReg = /^[a-zA-Z]{6,10}$/;
//����������ʽ
    var nameReg = /^[\u4E00-\u9FA5\uF900-\uFA2D]{2,5}$/;  //�������ĺͺ���
    var nickReg = /^[\u4E00-\u9FA5\uF900-\uFA2D]{3,10}$/;
//Ӣ�ġ��»���������ʽ
    var pwdReg = /^[a-zA-Z0-9_]{6,20}$/;  //����ֻ���԰�����ĸ�����»���

    function alertMsg(data,tipStatus){

        //�ж�ҳ�����Ƿ������ʾ��

        if($(".tipAlert").length > 0){
            $(".tipAlert").alert('close');
        }

        var div = document.createElement("div");

        var a = document.createElement("a");

        var span = document.createElement("span");

        div.setAttribute("class","alert videoHidden tipAlert " + tipStatus);

        document.getElementById("wrongMsg").appendChild(div);

        a.setAttribute("class","close");

        a.setAttribute("data-dismiss","alert");

        a.setAttribute("href","#");

        var aText=document.createTextNode("��");

        a.appendChild(aText);

        div.appendChild(a);

        var spanText = document.createTextNode(data);

        span.appendChild(spanText);

        div.appendChild(span);

        //$(".alert").fadeOut(function(){
        //    $(".alert").fadeIn("slow");
        //});

        $(".tipAlert").fadeIn("slow");


    }
});