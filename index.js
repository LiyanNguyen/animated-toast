let toastButton = document.querySelector('.toast-caller');
let toast = document.querySelector('.toast');
let closeToastButton = document.querySelector('.close');
let progressBar = document.querySelector('.progress');
let toastTimeOut;

let removeToast = () => {
	toast.classList.remove('active');
	clearTimeout(toastTimeOut);
	setTimeout(() => {
    progressBar.classList.remove('active');
  }, 300);
}

let showToast = () => {
  toast.classList.add('active');
  progressBar.classList.add('active');
	toastTimeOut = setTimeout(removeToast, 3000);
};