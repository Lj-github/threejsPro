# 兼容性检测


（1）判断canvas兼容。

（2）判断webgl兼容性。

（3）在页面添加不兼容提示信息。



<code class="language-javascript">
    if ( ! Detector.webgl ) {  
        Detector.addGetWebGLMessage();  
    return;  
}</code>  