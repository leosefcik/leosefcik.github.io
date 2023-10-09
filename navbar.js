const navbar = document.createElement('template');

navbar.innerHTML = `
<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
  <div class="container-fluid">

    <a class="navbar-brand" href="/">
      <img src="/media/botlabs.png" alt="Icon" style="height:2.5rem;" class="rounded-pill">
      <img src="/media/eggsnchickens_text.png" alt="Logo" style="height:2rem;">
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/" title="Homepage">💈 Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" title="Nerd stuff">🎓 About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/fancy" title="Fancy stuff">👢 Fancy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tidbits" title="Less fancy stuff">🍔 Tidbits</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/stuff" title="Everything else">🦄 Stuff</a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
`;

document.body.appendChild(navbar.content);