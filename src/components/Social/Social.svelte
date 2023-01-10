<script>
  export let socialData = {};
  const { HEADING } = socialData;
</script>

<section class="grey-bgcolor" id="social">
  <div class="container">
    <div class="row">
      <div class="row-md-6 social_items">
        <h1>{HEADING}</h1>
        <div class="row g-3">
          <div class="row contact_form">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              required
            />
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              required
            />
          </div>
          <input
            type="email"
            class="form-control email_form"
            placeholder="Email"
            aria-label="Email"
            required
          />
          <a role="button" href="/" class="btn  btn-md">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding-top: 5%;
    min-height: max-content;
  }

  .social_items {
    text-align: right;
  }
  .social_items h1 {
    color: rgb(255, 255, 255);
  }

  h1 {
    display: inline-block;
    width: 500px;
    font-size: 35px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 50px;
    margin-right: 120px;
    text-align: right;
  }

  input {
    width: 300px;
  }

  .email_form {
    width: 600px;
    margin-left: 520px;
  }

  .contact_form {
    display: flexbox;
    justify-content: flex-end;
    align-items: flex-end;
  }

  a {
    color: aliceblue;
    width: 100px;
    margin-left: 520px;
    background-color: rgb(135, 9, 199);
  }
  a:hover {
    color: white;
    background-color: rgb(79, 6, 151);
  }
</style>
