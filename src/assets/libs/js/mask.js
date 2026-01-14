window.addEventListener('DOMContentLoaded', () => {
	maskPhone()
})

function maskPhone() {
	const phoneInputs = document.querySelectorAll('[type="tel"]')

	phoneInputs.forEach(input => {
		input.setAttribute('data-original-placeholder', input.placeholder)

		let firstFocus = true;

		input.addEventListener('focus', function () {
			if (!this.value) {
				if (firstFocus) {
					input.blur()
					firstFocus = false
				} else {
					this.value = '+7 ('
					this.placeholder = ''
				}
			}

			setTimeout(() => {
				this.setSelectionRange(this.value.length, this.value.length)
			}, 0)
		})

		input.addEventListener('input', function (event) {
			const isDelete = event.inputType === 'deleteContentBackward'
			let raw = this.value
			const digits = raw.replace(/\D/g, '')

			if (isDelete) {
				return
			}

			let formatted = formatWithMask(digits)

			this.value = formatted

			setTimeout(() => {
				const pos = this.value.indexOf('_')
				setCursorPosition(this, pos === -1 ? this.value.length : pos)
			}, 0)
		})

		input.addEventListener('paste', function (e) {
			e.preventDefault()
			let pasted = (e.clipboardData || window.clipboardData).getData('text')
			pasted = pasted.replace(/\D/g, '')
			this.value = formatWithMask(pasted)
		})

		input.addEventListener('change', function () {
			const submit = input.closest('form').querySelector('[type="submit"]') || input.closest('form').querySelector('button:not([type="button"])')

			if (!submit) return
			const validLength = this.value.startsWith('8') ? 17 : 18
			if (this.value.length < validLength) {
				this.reportValidity()
				this.classList.add('error')
			} else {
				this.classList.remove('error')
			}
		})
	})

	function formatWithMask(digits) {
		if (!digits) return ''

		if (digits[0] !== '7' && digits[0] !== '8') {
			digits = '7' + digits
		}

		const mask = digits[0] === '8' ? '8 (___) ___ __ __' : '+7 (___) ___ __ __'

		let i = 0
		let formatted = ''

		for (const char of mask) {
			if (i >= digits.length) break
			if (char === '_' || /\d/.test(char)) {
				formatted += digits[i++]
			} else {
				formatted += char
			}
		}

		return formatted
	}

	function setCursorPosition(el, pos) {
		el.setSelectionRange(pos, pos)
	}
}
