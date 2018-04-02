
;(function(window) {

	function FolderFx(el) {
		this.DOM = {};
		this.DOM.el = el;
		this.DOM.wrapper = this.DOM.el.querySelector('.folder__icon');
		this.DOM.back = this.DOM.wrapper.querySelector('.folder__icon-img--back');
		this.DOM.cover = this.DOM.wrapper.querySelector('.folder__icon-img--cover');
		this.DOM.feedback = this.DOM.el.querySelector('.folder__feedback');
		this.DOM.preview = this.DOM.el.querySelector('.folder__preview');
		this.DOM.previewElems = this.DOM.preview.children;
		this.totalPreview = this.DOM.previewElems.length;

		this._initEvents();
	}

	/**
	 * Remove/Stop any animation.
	 */
	FolderFx.prototype._removeAnimeTargets = function() {
		anime.remove(this.DOM.preview);
		anime.remove(this.DOM.previewElems);
		anime.remove(this.DOM.wrapper);
		anime.remove(this.DOM.cover);
		anime.remove(this.DOM.el);
		if( this.DOM.feedback ) {
			anime.remove(this.DOM.feedback);
			this.DOM.feedback.style.opacity = 0;
		}
		if( this.DOM.letters ) {
			anime.remove(this.DOM.letters);
		}
	};

	FolderFx.prototype._initEvents = function() {
		const self = this;
		this._mouseenterFn = function () {
		    if (window.innerWidth > 575) {
		        self.intimeout = setTimeout(function() {
		            self._removeAnimeTargets();
		            self._in();
		        }, 75);
		    }
		};
		this._mouseleaveFn = function() {
		    if (window.innerWidth > 575) {
		        clearTimeout(self.intimeout);
			    self._removeAnimeTargets();
			    self._out();
		    }
		};
		this.DOM.wrapper.addEventListener('mouseenter', this._mouseenterFn);
		this.DOM.wrapper.addEventListener('mouseleave', this._mouseleaveFn);
	};

	FolderFx.prototype._in = function() {
		const self = this;
		[].slice.call(this.DOM.previewElems).forEach(function(el) {
			// Add default behaviour.
			//el.style.opacity = 1;
		});
	};

	FolderFx.prototype._out = function() {
		const self = this;
		[].slice.call(this.DOM.previewElems).forEach(function(el) {
			// Add default behaviour.
			//el.style.opacity = 0;
		});
	};


	/************************************************************************
	 * 7: RaviFx.
	 ************************************************************************/
	
	function RaviFx(el) {
		FolderFx.call(this, el);
	}

	RaviFx.prototype = Object.create(FolderFx.prototype);
	RaviFx.prototype.constructor = RaviFx;
	
	RaviFx.prototype._in = function() {
		const self = this;

		anime({
			targets: this._reorder(this.DOM.previewElems),
			duration: 400,
			easing: [0.1,1,0.3,1],
			translateY: -70,
			translateX: function(t, i, c) {
				const interval = 60;
				return -1*interval*Math.floor(c/2)+interval*i  + (c/2 %1 != 0 ? 0 : interval/2) + 'px';
			},
			rotate: function(t, i, c) {
				const interval = 20;
				return -1*interval*Math.floor(c/2)+interval*i  + (c/2 %1 != 0 ? 0 : interval/2) + 'deg';
			},
			opacity: {
				value: 1,
				duration: 10,
				easing: 'linear'
			}
		});

		anime({
			targets: this.DOM.cover,
			duration: 400,
			easing: 'easeOutExpo',
			rotateX: [0,-30]
		});
	};

	RaviFx.prototype._out = function() {
		const self = this;

		anime({
			targets: this.DOM.previewElems,
			duration: 300,
			easing: 'easeInBack',
			translateY: 0,
			translateX: 0,
			rotate: 0,
			scale: [1,0.5],
			opacity: {
				value: 0,
				duration: 10,
				delay: 300,
				easing: 'linear'
			}
		});

		anime({
			targets: this.DOM.cover,
			duration: 300,
			delay: 300,
			easing: 'easeOutExpo',
			rotateX: 0
		});

		anime({
			targets: this.DOM.feedback,
			delay: 350,
			easing: [0.1,1,0.3,1],
			opacity: [
				{ 
					value:1, 
					duration:10
				},
				{ 
					value:0, 
					duration:500, 
					delay:20 
				}
			],
			scale: {
				value: [1,5],
				duration: 800
			}
		});
	};

	RaviFx.prototype._reorder = function(arr) {
		let newArray = [],
			i = Math.ceil(arr.length/2),
			j = i - 1;

		while (j >= 0) {
			newArray.push(arr[j--]);
			if (i < arr.length) {
				newArray.push(arr[i++]);
			}
		}
		return newArray;
	}

	window.RaviFx = RaviFx;

	})(window);