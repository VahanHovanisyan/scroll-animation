const burger = document.querySelector('.menu__burger')
const body = document.body

burger.addEventListener('click', () => {
    burger.parentElement.classList.toggle('active')
    body.classList.toggle('lock')
})




// const animItems = document.querySelectorAll('.anim-item');

// function getOffset(el) {
//     const rect = el.getBoundingClientRect();
//     const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return {
//         top: rect.top + scrollTop,
//         left: rect.left + scrollLeft
//     };
// }

// function isElementInViewport(el, offset = 0) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top + offset <= window.innerHeight &&
//         rect.bottom >= 0 &&
//         rect.left <= window.innerWidth &&
//         rect.right >= 0
//     );
// }

// function animateItem(animItem) {
//     const animItemOffset = getOffset(animItem).top;
//     const animItemPoint = window.innerHeight - animItem.offsetHeight / 4;

//     if (isElementInViewport(animItem, animItemPoint)) {
//         animItem.classList.add('anim-item_active');
//     } else {
//         animItem.classList.remove('anim-item_active');
//     }
// }

// function animOnScroll() {
//     animItems.forEach(animateItem);
// }

// function throttle(callback, delay) {
//     let lastTime = 0;
//     return function () {
//         const now = new Date().getTime();
//         if (now - lastTime >= delay) {
//             callback.apply(null, arguments);
//             lastTime = now;
//         }
//     };
// }

// if (animItems.length > 0) {
//     window.addEventListener('scroll', throttle(animOnScroll, 100));

//     // Initial animation check
//     animOnScroll();
// }

















// const animItems = document.querySelectorAll('.anim-item');

// function offset(el) {
//     const rect = el.getBoundingClientRect();
//     const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return {
//         top: rect.top + scrollTop,
//         left: rect.left + scrollLeft
//     };
// }

// function animateItem(animItem) {
//     const animItemHeight = animItem.offsetHeight;
//     const animItemOffset = offset(animItem).top;
//     const animStart = 4;
//     const animItemPoint = Math.min(window.innerHeight - animItemHeight / animStart, window.innerHeight / animStart);

//     if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
//         animItem.classList.add('anim-item_active');
//     } else {
//         animItem.classList.remove('anim-item_active');
//     }
// }

// function animOnScroll() {
//     animItems.forEach(animateItem);
// }

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     animOnScroll(); // Initial animation check

//     // Optional: Debounce the scroll event for performance
//     // let scrollTimeout;
//     // window.addEventListener('scroll', () => {
//     //     clearTimeout(scrollTimeout);
//     //     scrollTimeout = setTimeout(animOnScroll, 100);
//     // });
// }









// const animItems = document.querySelectorAll('.scroll-anim');

// if (animItems.length > 0) {

//     window.addEventListener('scroll', animOnScroll);

//     function animOnScroll() {
//         animItems.forEach(animItem => {
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = animItem.getBoundingClientRect().top + window.scrollY;
//             const animStart = 2;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('scroll-anim_active');
//             } else {
//                 if (!animItem.classList.contains('scroll-anim_default')) {
//                     animItem.classList.remove('scroll-anim_active');
//                 }
//             }
//         });
//     }
//     setTimeout(() => {
//         animOnScroll();
//     }, 300);

// function offset(el) {
//     const rect = el.getBoundingClientRect();
//     const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return {
//         top: rect.top + scrollTop,
//         left: rect.left + scrollLeft
//     }
// }
// }





const animItems = document.querySelectorAll('.scroll-anim');


if (animItems.length > 0) {
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 300);

    function handleScroll() {
        animItems.forEach(animItem => {
            const { top, height } = animItem.getBoundingClientRect();
            const offset = window.scrollY + top;
            const animStart = 2;
            const animItemPoint = window.innerHeight - Math.min(height, window.innerHeight) / animStart;
            if (offset < window.scrollY + animItemPoint &&
                offset + height > window.scrollY) {
                animItem.classList.add('scroll-anim_active')
            } else {
                if (!animItem.classList.contains('scroll-anim_once')) {
                    animItem.classList.remove('scroll-anim_active');
                }
            }
        });
    }
}













// // Select all elements with the class 'anim-item'
// const animItems = document.querySelectorAll('.anim-item');

// // Check if there are any elements with the class 'anim-item'
// if (animItems.length > 0) {
//     // Add a scroll event listener to the window
//     window.addEventListener('scroll', handleScroll);

//     // Call the scroll handler function once after a delay
//     setTimeout(() => {
//         handleScroll();
//     }, 300);

//     // Function to handle the scroll event
//     function handleScroll() {
//         // Loop through each 'anim-item' element
//         animItems.forEach(animItem => {
//             // Get the height of the current 'anim-item'
//             const animItemHeight = animItem.offsetHeight;

//             // Get the offset of the current 'anim-item' from the top of the document
//             const animItemOffset = getOffset(animItem).top;

//             // Define the point at which the animation should start (adjustable)
//             const animStart = 4;

//             // Calculate the point at which the animation should be triggered
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             // Check if the current 'anim-item' is in the viewport
//             if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('anim-item_active');
//             } else {
//                 // Remove the 'anim-item_active' class if not in the viewport
//                 if (!animItem.classList.contains('anim-item_default')) {
//                     animItem.classList.remove('anim-item_active');
//                 }
//             }
//         });
//     }

//     // Function to get the offset of an element from the top of the document
//     function getOffset(el) {
//         const rect = el.getBoundingClientRect();
//         const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//         const scrollTop = window.scrollY || document.documentElement.scrollTop;
//         return {
//             top: rect.top + scrollTop,
//             left: rect.left + scrollLeft
//         };
//     }
// }

















// const animItems = document.querySelectorAll('.anim-item');

// if (animItems.length > 0) {
// window.addEventListener('scroll', animOnScroll);
// function animOnScroll() {
//     animItems.forEach(animItem => {
//         const animItemHeight = animItem.offsetHeight;
//         const animItemOffset = offset(animItem).top;
//         const animStart = 4;

//         let animItemPoint = window.innerHeight - animItemHeight / animStart;
//         if (animItemHeight > window.innerHeight) {
//             animItemPoint = window.innerHeight - window.innerHeight / animStart;
//         }

//         if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//             animItem.classList.add('anim-item_active');
//         } else {
//             if (!animItem.classList.contains('anim-item_default')) {
//                 animItem.classList.remove('anim-item_active');
//             }
//         }
//     });
// }
// setTimeout(() => {
//     animOnScroll();
// }, 300);

// function offset(el) {
//     const rect = el.getBoundingClientRect();
//     const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return {
//         top: rect.top + scrollTop,
//         left: rect.left + scrollLeft
//     }
// }
// }