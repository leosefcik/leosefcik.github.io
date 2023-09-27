const navbar = document.createElement('template');

navbar.innerHTML = `
<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
  <div class="container-fluid">

    <a class="navbar-brand" href="#">
      <img src="media/botlabs.png" alt="Eggs & Chickens Icon" style="height:2.5rem;" class="rounded-pill">
      <img src="media/eggsnchickens_text.png" alt="Eggs & Chickens" style="height:2rem;"> 
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">💈 Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">🎓 About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">👢 Fancy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">🍔 Tidbits</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">🦄 Stuff</a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
`;

document.body.appendChild(navbar.content);