
/* 
	================================================
	  
	До / После
	
	================================================
*/

export function splitView() {
	class SplitView {
		constructor(props) {
			const defaultConfig = { init: true, logging: true }
			this.config = Object.assign(defaultConfig, props)

			if (this.config.init) {
				const items = document.querySelectorAll('[data-splitview]')
				if (items.length) this.splitViewInit(items)
			}
		}

		splitViewInit(items) {
			items.forEach(item => this.splitViewItemInit(item))
		}

		splitViewItemInit(wrapper) {
			const arrow = wrapper.querySelector('[data-splitview-arrow]')
			const after = wrapper.querySelector('[data-splitview-after]')
			const range = arrow?.querySelector('input[type="range"]')
			if (!arrow || !after) return

			const arrowWidth = parseFloat(getComputedStyle(arrow).width)
			let sizes = {}

			const updatePosition = percent => {
				arrow.style.cssText = `left:calc(${percent}% - ${arrowWidth}px)`
				after.style.cssText = `width:${100 - percent}%`
				if (range) range.value = percent
			}

			const startDrag = e => {
				if (wrapper.closest('.swiper')) {
					const swiperEl = wrapper.closest('.swiper')[0] || wrapper.closest('.swiper');

					if (swiperEl.swiper) swiperEl.swiper.allowTouchMove = false;
				}

				const clientX = e.touches ? e.touches[0].clientX : e.clientX
				sizes = {
					width: wrapper.offsetWidth,
					left: wrapper.getBoundingClientRect().left - scrollX
				}


				const move = evt => {
					const x = evt.touches ? evt.touches[0].clientX : evt.clientX
					let pos = x - sizes.left
					pos = Math.max(0, Math.min(pos, sizes.width))
					const percent = (pos / sizes.width) * 100
					updatePosition(percent)
				}

				const stop = () => {
					if (wrapper.closest('.swiper')) {
						const swiperEl = wrapper.closest('.swiper')[0] || wrapper.closest('.swiper');
						if (swiperEl.swiper) swiperEl.swiper.allowTouchMove = true;
					}

					document.removeEventListener('mousemove', move)
					document.removeEventListener('mouseup', stop)
					document.removeEventListener('touchmove', move)
					document.removeEventListener('touchend', stop)
				}

				document.addEventListener('mousemove', move)
				document.addEventListener('mouseup', stop, { once: true })
				document.addEventListener('touchmove', move)
				document.addEventListener('touchend', stop, { once: true })

				document.addEventListener('dragstart', e => e.preventDefault(), { once: true })
			}


			arrow.addEventListener('mousedown', startDrag)
			arrow.addEventListener('touchstart', startDrag)

			if (range) {
				range.addEventListener('input', e => {
					const percent = parseFloat(e.target.value)
					updatePosition(percent)
				})
			}

			updatePosition(50)
		}
	}

	new SplitView({})
}
