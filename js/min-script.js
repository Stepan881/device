var review=document.querySelector(".review"),contactcloses=document.querySelector(".popap-closes"),map=document.querySelector(".popap");review.addEventListener("click",function(e){e.preventDefault(),map.classList.add("display-show")}),contactcloses.addEventListener("click",function(e){e.preventDefault(),map.classList.remove("display-show")});var openmap=document.querySelector(".main-maps"),popap=document.querySelector(".map"),popapclose=document.querySelector(".contact-closes");openmap.addEventListener("click",function(e){e.preventDefault(),popap.classList.add("display-show")}),popapclose.addEventListener("click",function(e){e.preventDefault(),popap.classList.remove("display-show")});var btn1=document.querySelector(".delivery-menu-btn1"),btn2=document.querySelector(".delivery-menu-btn2"),btn3=document.querySelector(".delivery-menu-btn3"),deliverys=document.querySelector(".main-deliverys"),guarantee=document.querySelector(".main-guarantee"),credit=document.querySelector(".main-credit");btn1.addEventListener("click",function(e){e.preventDefault(),btn1.classList.add("delivery-menu-active"),deliverys.classList.add("display-show"),btn2.classList.remove("delivery-menu-active"),btn3.classList.remove("delivery-menu-active"),guarantee.classList.add("display"),credit.classList.add("display"),guarantee.classList.remove("display-show"),credit.classList.remove("display-show")}),btn2.addEventListener("click",function(e){e.preventDefault(),btn2.classList.add("delivery-menu-active"),guarantee.classList.add("display-show"),btn1.classList.remove("delivery-menu-active"),btn3.classList.remove("delivery-menu-active"),deliverys.classList.add("display"),credit.classList.add("display"),deliverys.classList.remove("display-show"),credit.classList.remove("display-show")}),btn3.addEventListener("click",function(e){e.preventDefault(),btn3.classList.add("delivery-menu-active"),credit.classList.add("display-show"),btn1.classList.remove("delivery-menu-active"),btn2.classList.remove("delivery-menu-active"),deliverys.classList.add("display"),guarantee.classList.add("display"),deliverys.classList.remove("display-show"),guarantee.classList.remove("display-show")});var bt1=document.querySelector(".bt1"),bt2=document.querySelector(".bt2"),bt3=document.querySelector(".bt3"),btt1=document.querySelector(".btt1"),btt2=document.querySelector(".btt2"),btt3=document.querySelector(".btt3"),mainbt1=document.querySelector(".main-bt1"),mainbt2=document.querySelector(".main-bt2"),mainbt3=document.querySelector(".main-bt3");bt1.addEventListener("click",function(e){e.preventDefault(),btt1.classList.remove("display"),btt2.classList.add("display"),btt3.classList.add("display"),mainbt1.classList.remove("display"),mainbt2.classList.add("display"),mainbt3.classList.add("display")}),bt2.addEventListener("click",function(e){e.preventDefault(),btt2.classList.remove("display"),btt1.classList.add("display"),btt3.classList.add("display"),mainbt2.classList.remove("display"),mainbt1.classList.add("display"),mainbt3.classList.add("display")}),bt3.addEventListener("click",function(e){e.preventDefault(),btt3.classList.remove("display"),btt1.classList.add("display"),btt2.classList.add("display"),mainbt3.classList.remove("display"),mainbt2.classList.add("display"),mainbt1.classList.add("display")});