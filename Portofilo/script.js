document.querySelectorAll('[data-open]').forEach(button => {
  button.addEventListener('click', () => document.getElementById(button.dataset.open).showModal());
});
document.querySelectorAll('dialog').forEach(dialog => {
  const stopVideo = () => dialog.querySelector('video')?.pause();
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', stopVideo);
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    }
  });
});
