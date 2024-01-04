

window.onload = function(event) {

	function callback_animated(entries) {
		Array.prototype.forEach.call(entries, function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-animate')
			} else {
				entry.target.classList.remove('is-animate')
			}
		});
	}
	const option_animated = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3 //.3時，區塊進入視窗30%後才觸發
	}
	const observerAnimated = new IntersectionObserver(callback_animated, option_animated)
	const animated_ = document.querySelectorAll('.g-section') //觸發的class
	Array.prototype.forEach.call(animated_, function (animated) {
		return observerAnimated.observe(animated)
	})

};


document.addEventListener('DOMContentLoaded', function () {

  anchor_calc()

  function callback_animated(entries) {
    Array.prototype.forEach.call(entries, function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animate')
      } else {
        entry.target.classList.remove('is-animate')
      }
    });
  }
  const option_animated = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 //.3時，區塊進入視窗30%後才觸發
  }
  const observerAnimated = new IntersectionObserver(callback_animated, option_animated)
  const animated_ = document.querySelectorAll('.g-section,.counter') //觸發的class
  Array.prototype.forEach.call(animated_, function (animated) {
    return observerAnimated.observe(animated)
  })

}, false);

window.addEventListener("resize", anchor_calc);

function anchor_calc(){

  let bodyRect = document.body.getBoundingClientRect()
  const is_anchors = document.querySelectorAll('.is-anchor')
  is_anchors.forEach(function(item){
    const href = item.getAttribute('href').replace(/#/g,'')
    let href_top = document.getElementById(href).getBoundingClientRect().top - bodyRect.top
    item.addEventListener('click',function(e){
      window.scrollTo({
        top: href_top,
        behavior: "smooth",
      })
      e.preventDefault()
    })
  })

}

function hideHint() {
  document.getElementById("hint").classList.add("hide-element")
  document.getElementById("mask").classList.add("hide-element")
  setTimeout(() => {
    document.getElementById("hint").classList.add("remove-element")
    document.getElementById("mask").classList.add("remove-element")
  }, 1000)
}