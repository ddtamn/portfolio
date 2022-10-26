<script>
    import Fa from 'svelte-fa';
    import {faPaperPlane} from '@fortawesome/free-solid-svg-icons/index.js'
</script>

<section>
    <div class="container">
        <div class="avatar"><img src="portfolio/avatar.png" alt=""></div>
        <div class="title">ddtamn<span>.</span></div>
        <div class="subtitle">Freelancer</div>
        <p>I'm creative freelancer based in Luwuk Banggai, and I'm very passionate and dedicated to my work.</p>
        <button>Let's Talk <span><Fa icon={faPaperPlane} /></span>  </button>
    </div>
</section>

<style>
    section {
        /* min-height: calc(100vh - 5rem); */
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
        gap: 0.5rem;
    }

    .title {
        font-weight: bold;
        font-size: 3rem;
    }

    .title span {
        color: var(--primary-color);
    }

    .subtitle {
        font-weight: 500;
        position: relative;
        margin-left: 8rem;
        margin-bottom: 1rem;
    }

    .subtitle::before {
        content: '';
        position: absolute;
        width: 120px;
        height: 1px;
        background-color: var(--font-color);
        left: -8rem;
        top: 0.8rem;

    }

    p {
        opacity: 0.7;
    }

    button {
        background-color:var(--primary-color);
        border-radius: 8px;
        display:inline-block;
        cursor:pointer;
        color:  var(--bg-color);
        font-size:13px;
        padding:10px 24px;
        text-decoration:none;
        margin-top: 2rem;
        border: none;
        font-weight: bold;
    }

    button span {
        margin-left: 0.5rem;
    }

    .avatar {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        border: 2px solid var(--primary-color);
        padding: 1px;
    }

    .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
</style>