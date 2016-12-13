var switcher = new Switcher,
	Switch = function(id,target){
		this.id = id;
		this.status = false;
		this.callback = function(){};
		this.els = {
			container: document.createElement("div"),
			toggle: document.createElement("button")
		}
		this.init(target);
	}
Switch.prototype = {
	init: function(target){
		var me = this;
		this.els.toggle.addEventListener("click",function(e){e.preventDefault();me.toggle()});
		target.appendChild(this.els.container);
		this.els.container.appendChild(document.createTextNode(this.id));
		this.els.container.appendChild(this.els.toggle);
	},
	toggle: function(){
		this.status = !this.status;
		this.els.toggle.className = (this.status) ? "active" : "";
		this.callback(this.id,this.status);
	},
	onToggle: function(c){
		this.callback = typeof c == "function" ? c : this.callback;
		//this.callback(this.id,this.status);
	}
};
window.onload = function(){
	var target = document.querySelector("#switcher"),
		add = document.querySelector("#addSwitch"),
		res = document.querySelector("#results"),
		count = 0;
	add.addEventListener("click",function(){
		var s;
		if(!switcher.set("switch" + count))
			return;
		s = new Switch("switch" + count,target);
		s.onToggle(function(id,v){
			switcher.set(id,v)
			res.innerHTML = "<strong>Switches stored</strong><br />" + switcher.get().join(", ") + "<br /><strong>Binary data</strong><br />" + switcher.getMap().reverse().join("") + "<br /><strong>Stored as</strong><br />" + switcher.getMap(true);
		});
		res.innerHTML = "<strong>Switches stored</strong><br /> " + switcher.get().join(", ") + "<br /><strong>Binary data</strong><br />" + switcher.getMap().reverse().join("") + "<br /><strong>Stored as</strong><br />" + switcher.getMap(true);
		count++;
	});
};
