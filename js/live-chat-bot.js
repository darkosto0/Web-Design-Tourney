var LHC_API = LHC_API || {};
        LHC_API.args = {
            mode: 'widget',
            lhc_base_url: '//digitalna.livehelperchat.com/',
            wheight: 450,
            wwidth: 350,
            pheight: 520,
            pwidth: 500,
            leaveamessage: true,
            check_messages: true
        };

        (function() {
            var po = document.createElement('script'); 
            po.setAttribute('crossorigin', 'anonymous');
            po.type = 'text/javascript'; 
            po.async = true;
            var date = new Date();
            po.src = '//digitalna.livehelperchat.com/design/defaulttheme/js/widgetv2/index.js?' + 
                     ("" + date.getFullYear() + date.getMonth() + date.getDate());
            var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(po, s);
        })();