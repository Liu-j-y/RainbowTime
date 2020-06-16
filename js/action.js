$(document).ready(function(){
    // 点击输入框改变样式
	$(".account input").focus(function(){
        $(this).parent().css("border","1px solid #333333");
        $(this).parent().find(".icon").css("background","url(image/icon/account-.svg) no-repeat 1px");
    })
    $(".account input").blur(function(){
        $(this).parent().css("border","1px solid #e3e2e2");
        $(this).parent().find(".icon").css("background","url(image/icon/account.svg) no-repeat 1px");
    })
    $(".password input").focus(function(){
        $(this).parent().css("border","1px solid #333333");
        $(this).parent().find(".icon").css("background","url(image/icon/password-.svg) no-repeat 1px");
    })
    $(".password input").blur(function(){
        $(this).parent().css("border","1px solid #e3e2e2");
        $(this).parent().find(".icon").css("background","url(image/icon/password.svg) no-repeat 1px");
    })
    $(".code input").focus(function(){
        $(this).parent().css("border","1px solid #333333");
    })
    $(".code input").blur(function(){
        $(this).parent().css("border","1px solid #e3e2e2");
    })
    $(".repassword input").focus(function(){
        $(this).parent().css("border","1px solid #333333");
    })
    $(".repassword input").blur(function(){
        $(this).parent().css("border","1px solid #e3e2e2");
    })

	//登录验证
    $(".login-form :input").blur(function () {
        var $parent = $(this).parent();
        //验证账号
        if($(this).is("#account")){
            var accountVal = $.trim(this.value); 
            var reEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            var rePhone = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
            var error = $(".account-error");
            if(accountVal!="" && (reEmail.test(accountVal) || (rePhone.test(accountVal) && accountVal.length==11))){
        		error.text("");
        		$(".account input").addClass("true");
                $(".account input").removeClass("false");
            }
            else if(accountVal==""){
                error.text("× 请输入账号");
                $(".account input").addClass("false");
                $(".account input").removeClass("true");
            }
            else{
                error.text("× 请输入正确的手机或者邮箱");
                $(".account input").addClass("false");
                $(".account input").removeClass("true");
            }
        }
        //验证密码
        if($(this).is("#password")){
            var pwdVal = $.trim(this.value);
            var error = $(".password-error");
            var pwd=$(".password input");
            if(pwdVal!="" && (pwdVal.length >= 6 && pwdVal.length <=25)){
                error.text("");
                pwd.addClass("true");
                pwd.removeClass("false");
            }
            else if(pwdVal==""){
            	error.text("× 请输入密码");
            	pwd.addClass("false");
                pwd.removeClass("true");
            }
            else{
                error.text("× 请输入6-20位密码");
                pwd.addClass("false");
                pwd.removeClass("true");
            }
        }
    });

    //注册验证
    $(".register-form :input").blur(function () {
        var $parent = $(this).parent();
        //验证账号
        if($(this).is("#account")){
            var accountVal = $.trim(this.value); 
            var reEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            var rePhone = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
            var error = $(".account-error");
            if(accountVal!="" && (reEmail.test(accountVal) || (rePhone.test(accountVal) && accountVal.length==11))){
                error.text("");
                $(".account input").addClass("true");
                $(".account input").removeClass("false");
            }
            else if(accountVal==""){
                error.text("× 请输入手机号或者邮箱");
                $(".account input").addClass("false");
                $(".account input").removeClass("true");
            }
            else{
                error.text("× 请输入正确的手机或者邮箱");
                $(".account input").addClass("false");
                $(".account input").removeClass("true");
            }
        }
        //验证验证码
        if($(this).is("#code")){
            var codeVal = $.trim(this.value);
            var error = $(".code-error");
            var code=$(".code input");
            if(codeVal!="" && codeVal.length==6){
                error.text("");
                code.addClass("true");
                code.removeClass("false");
            }
            else if(codeVal==""){
                error.text("× 请输入验证码");
                code.addClass("false");
                code.removeClass("true");
            }
            else{
                error.text("× 请输入正确的验证码");
                code.addClass("false");
                code.removeClass("true");
            }
        }
        //验证密码
        if($(this).is("#password")){
            var pwdVal = $.trim(this.value);
            var error = $(".password-error");
            var pwd=$(".password input");
            if(pwdVal!="" && (pwdVal.length >= 6 && pwdVal.length <=25)){
                error.text("");
                pwd.addClass("true");
                pwd.removeClass("false");
            }
            else if(pwdVal==""){
                error.text("× 请输入密码");
                pwd.addClass("false");
                pwd.removeClass("true");
            }
            else{
                error.text("× 请输入6-20位密码");
                pwd.addClass("false");
                pwd.removeClass("true");
            }
        }
        //验证密码和确认密码是否一致
        if($(this).is("#repassword")){
            var repwdVal = $.trim(this.value);
            var error = $(".repassword-error");
            var pwd=$(".password #password").val();
            var repwd=$(".repassword input");
            if(repwdVal!="" && repwdVal==pwd){
                error.text("");
                repwd.addClass("true");
                repwd.removeClass("false");
            }
            else if(repwdVal==""){
                error.text("× 请输入确认密码");
                repwd.addClass("false");
                repwd.removeClass("true");
            }
            else{
                error.text("× 两次密码输入不一致");
                repwd.addClass("false");
                repwd.removeClass("true");
            }
        }
    });
})