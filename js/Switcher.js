var Switcher = function(){
	this.mask = 0;
	this.data = [];
	this.started = false;
	this.limit = 30;
	this.init(arguments);
}
Switcher.prototype = {
	set: function(){
		var c = 1,
			r = true,
			ar,t,v,l;
		for(ar in arguments){
			if(typeof arguments[ar] != "object") {
				if((parseInt(ar) + c) % 2){
					v = arguments[ar];
				}else{
					l = arguments[ar];
					r = this.setEl(v,arguments[ar]);
				}
			}else{
				c++;
				set(arguments[ar]);
			}
		}
		r = this.setEl(v,l);
		return r;
	},
	get: function(k){
		var k,i,b,r;
		if(typeof k === "undefined")
			return this.data;
		k = k || false
		if(typeof k != "string")
			return null;
		i = this.data.indexOf(k);
		if(!~i)
			return null;
		b = Math.pow(2,i);
		r = b & this.mask;
		return r != 0;
	},
	getMap: function(raw){
		var raw = raw || false,
			res = [],
			a,i,len,t;
		if(raw)
			return this.mask;
		a = this.get();
		for(i = 0, len = a.length; i < len; i++){
			t = this.get(a[i]) ? 1 : 0;
			res.push(t);
		}
		return res;
	},
	init: function(arr){
		var ar, t;
		if(this.started)
			return;
		this.started = true;
		for(ar in arr){
			if(typeof arr[ar] != "object"){ 
				if(!this.setEl(arr[ar])){
					return false;
					break;
				}
			}else{
				set(arr[ar]);
			}
		}
	},
	setEl: function(k,v){
		var k = k || false,
			v = v || false,
			i = this.data.indexOf(k),
			b;
		if(~i){
			b = Math.pow(2,i);
		}else{
			if(this.data.length >= this.limit){
				console.warn("Limit of " + this.limit + " switches reached");
				return false;
			}
			b = Math.pow(2,this.data.length);
			this.data.push(k);
		}
		this.mask = (v) ? this.mask | b : this.mask = this.mask & ~b;
		return true;
	},
};
