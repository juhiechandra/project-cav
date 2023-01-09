<script lang="ts">
  export let navlists = [];
  export let header;
  console.log(navlists);
</script>

<section id="nav-bar">
  <nav class="navbar grey-bgcolor navbar-expand-md navbar-dark nav_style">
    <a class="navbar-brand company_brand" href="/">
      {header}
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        {#each navlists as list}
          <li class="nav-item">
            <a class="nav-link light-color" href={list.url}>{list.label}</a>
          </li>
        {/each}
        <a class="btn btn-primary nav_btn" href="/" role="button">Sign In</a>
      </ul>
    </div>
  </nav>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->

<!------------------------------------------->
<style>
  #nav-bar {
    position:static;
    top: 0;
    z-index: 15;
  }
  .navbar {
    padding: 0 80px !important;
  }

  .nav_style {
    min-height: 55px;
  }
  .nav_btn {
    margin-left: 20px;
    color: rgb(161, 99, 243);
    font-weight: 400;
    background-color: rgb(38, 38, 38) !important;
    border-color: none;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }
  .navbar-nav li a {
    font-weight: 400;

    float: right;
    text-align: left;
  }
</style>
