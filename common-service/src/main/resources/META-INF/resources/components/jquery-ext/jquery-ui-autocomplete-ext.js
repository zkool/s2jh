(function(a){a.extend(a.ui.autocomplete.prototype.options,{minLength:1,delay:500,autoFocus:false});a.extend(a.ui.autocomplete.prototype,{_init:function(){var c=this.element;var b=a(c).attr("inited");if(b){return a(c)}else{a(c).attr("inited","autocomplete")}a(c).data("autocomplete")._renderItem=function(d,e){return a("<li></li>").data("item.autocomplete",e).append("<a>"+e.label+"</a>").appendTo(d)}}})})(jQuery);