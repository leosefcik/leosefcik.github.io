const footer = document.createElement('template');

footer.innerHTML = `
<!-- Footer -->
<footer class="py-4 py-md-5 mt-5 bg-body-tertiary">
  <div class="container text-body-secondary">
    <div class="row">
    <div class="col"><p>© 2023 Eggs & Chickens</p></div>
    <div class="col text-end"><p>insert kewl social media icons</p></div>
    </div>
  </div>
</footer>
`;

document.body.appendChild(footer.content);